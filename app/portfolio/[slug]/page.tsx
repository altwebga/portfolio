import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProjectBySlug, getCustomerById } from "@/actions/get-content";
import { Markdown } from "@/components/shared/markdown";
import { RuTubeFrame } from "@/components/shared/rutube-frame";
import { Button } from "@/components/ui/button";
import { ExternalLink, MoveLeft } from "lucide-react";
import { CustomerCard } from "@/components/shared/customer-card";
import Link from "next/link";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { CallbackRequestForm } from "@/components/form/callback-request-form";

export async function generateMetadata(
  props: PageProps<"/portfolio/[slug]">
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);

  if (!project?.seo) {
    return { robots: { index: false, follow: false } };
  }

  const ogUrl = project.seo.og_image
    ? `${process.env.ASSETS}/${project.seo.og_image}`
    : undefined;

  return {
    title: project.seo.title,
    description: project.seo.meta_description,
    openGraph: {
      images: ogUrl
        ? [{ url: ogUrl, width: 1200, height: 630, alt: project.seo.title }]
        : undefined,
    },
  };
}

export default async function PortfolioPage(
  props: PageProps<"/portfolio/[slug]">
) {
  const { slug } = await props.params;
  const project = await getProjectBySlug(slug);
  if (!project) notFound();

  const customer =
    project.client !== null ? await getCustomerById(project.client) : null;

  return (
    <article className="my-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="md:w-2/3">
            <Markdown markdown={project.content || ""} />
            <div className="w-full flex justify-end">
              {project.site_url ? (
                <Button size={"lg"} asChild>
                  <a
                    href={project.site_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Посмотреть сайт <ExternalLink />
                  </a>
                </Button>
              ) : null}
            </div>
            <RuTubeFrame
              videoId={project.rutube_id || ""}
              title={project.title}
            />
          </div>

          <aside className="md:w-1/3 md:border-l md:px-4">
            <div className="md:fixed md:top-20 space-y-8">
              {customer && (
                <CustomerCard
                  cover_image={customer.cover_image}
                  title={customer.title}
                  content={customer.content}
                />
              )}
              <Card className="min-w-xs">
                <CardHeader>
                  <CardTitle>
                    <h3>Понравился сайт?</h3>
                  </CardTitle>
                  <CardDescription>
                    <p className="m-0 text-sm">
                      Оставьте заявку — обсудим задачу и сделаем для вас сайт
                      ещё лучше.
                    </p>
                  </CardDescription>
                  <CardFooter className="p-0 mt-4">
                    <CallbackRequestForm textAction="Хочу такой же сайт" />
                  </CardFooter>
                </CardHeader>
              </Card>
              <Button variant={"ghost"}>
                <MoveLeft />
                <Link href={"/portfolio"}>Назад к кейсам</Link>
              </Button>
            </div>
          </aside>
        </div>
      </div>
    </article>
  );
}
