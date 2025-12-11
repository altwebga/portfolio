import { getSlugs } from "@/lib/content";
import { CallAction } from "@/components/shared/call-action";
import Image from "next/image";

export async function generateStaticParams() {
  const slugs = await getSlugs("services");
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { frontmatter } = await import(`@/content/services/${slug}.mdx`);
  return {
    title: frontmatter.title,
    description: frontmatter.description,
    openGraph: {
      title: frontmatter.title,
      description: frontmatter.description,
      images: [
        {
          url: frontmatter.image,
          width: 800,
          height: 600,
        },
      ],
    },
  };
}

export default async function SingleServicePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const slug = (await params).slug;
  const { default: Post, frontmatter } = await import(
    `@/content/services/${slug}.mdx`
  );

  return (
    <>
      <div className="fixed bottom-0 left-0 z-[-1] w-full h-screen">
        <Image
          src={frontmatter.image}
          alt={frontmatter.title}
          width={1024}
          height={1024}
          className="w-full h-full object-cover opacity-5"
        />
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 justify-between">
        <div>
          <h1>{frontmatter.title}</h1>
          <Post />
          <h3>Сколько стоит?</h3>
          <p>
            Стоимость работ начинается{" "}
            <b className="text-primary">{frontmatter.price}</b>. Точную цену
            смогу назвать только после составления технического задания.
          </p>
        </div>
        <div></div>
      </div>
      <CallAction />
    </>
  );
}
