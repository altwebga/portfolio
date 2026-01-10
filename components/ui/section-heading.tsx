"use client";
import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, type Variants } from "motion/react";

function SectionHeading({
  alignment = "left",
  className,
  ...props
}: React.ComponentProps<"div"> & { alignment?: "left" | "center" | "right" }) {
  return (
    <div
      data-slot="section-heading"
      data-alignment={alignment}
      className={cn(
        "group/section-heading flex flex-col gap-3",
        alignment === "left" && "items-start text-left",
        alignment === "center" && "items-center text-center",
        alignment === "right" && "items-end text-right",
        className
      )}
      {...props}
    />
  );
}

function SectionHeadingContentType({
  className,
  ...props
}: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="section-heading-content-type"
      className={cn(
        "text-muted-foreground font-sans text-base leading-6 font-medium",
        className
      )}
      {...props}
    />
  );
}

const containerVariants: Variants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.05, // word timing
    },
  },
};

const wordVariants: Variants = {
  hidden: { opacity: 0, filter: "blur(10px)" },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    transition: { duration: 0.3, ease: "easeOut" },
  },
};

function splitWords(text: string) {
  // сохраняем пробелы как отдельные сегменты, чтобы не “склеивало”
  return text.split(/(\s+)/);
}

function SectionHeadingTitle({
  className,
  children,
  ...props
}: React.ComponentPropsWithoutRef<"h2">) {
  const isString = typeof children === "string";
  const words = isString ? splitWords(children) : [];

  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="md:max-w-2/3"
    >
      <h2
        data-slot="section-heading-title"
        className={cn(
          "text-foreground scroll-m-20 text-4xl leading-none font-bold tracking-tight lg:text-6xl",
          className
        )}
        {...props}
      >
        {isString ? (
          <>
            {/* SEO + a11y: цельная строка всегда в DOM */}
            <span className="sr-only">{children}</span>

            {/* Визуальная анимация, скрыта от скринридеров */}
            <span aria-hidden="true" className="whitespace-pre-wrap">
              {words.map((w, i) => (
                <motion.span
                  key={`${w}-${i}`}
                  variants={wordVariants}
                  className="inline-block whitespace-pre"
                >
                  {w}
                </motion.span>
              ))}
            </span>
          </>
        ) : (
          // Если вдруг передали не строку — рендерим как есть (без “каши”)
          children
        )}
      </h2>
    </motion.div>
  );
}

function SectionHeadingBody({
  className,
  ...props
}: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="section-heading-body"
      className={cn(
        "max-w-4xl text-base/6 font-normal text-pretty text-foreground",
        className
      )}
      {...props}
    />
  );
}

export {
  SectionHeading,
  SectionHeadingBody,
  SectionHeadingContentType,
  SectionHeadingTitle,
};
