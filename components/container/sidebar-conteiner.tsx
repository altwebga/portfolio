import { cn } from "@/lib/utils";

export function SidebarContainer({
  children,
  className,
  sidebar,
}: {
  children: React.ReactNode;
  className?: string;
  sidebar: React.ReactNode;
}) {
  return (
    <article
      className={cn(
        `container mx-auto my-20 flex flex-col md:flex-row gap-4 px-4`,
        className,
      )}
    >
      <div className="w-full md:w-3/4">{children}</div>
      <aside className="w-full md:w-1/4 md:border-l">
        <div className="md:sticky md:top-20 md:pl-4">{sidebar}</div>
      </aside>
    </article>
  );
}
