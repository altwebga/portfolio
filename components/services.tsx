import Image from "next/image";
import Link from "next/link";
import { getPosts } from "@/lib/api";
import { Post } from "@/lib/types";
import placeholderImage from "@/public/images/placeholder_image.svg";

export async function Services() {
  const posts: Post[] = await getPosts(4, 12);
  return (
    <section className="mt-8">
      <h2>Услуги и цены</h2>
      <p>
        Работайте с единым подрядчиком для всех Ваших интернет-активностей.
        Когда ответственность за сайт, продвижение, рекламу и социальные сети
        сосредоточена в одних руках, управление и результаты становятся
        максимально простыми.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
        {posts.map((post: Post) => (
          <Link href={`/services/${post.slug}`} key={post.id}>
            <div className="flex items-center gap-4 mt-4">
              <Image
                src={post.acf?.icon || placeholderImage}
                alt={post.title.rendered}
                width={64}
                height={56}
                className="w-16 h-14 rounded-lg object-contain"
              />
              <div>
                <h4>{post.title.rendered}</h4>
                <span className="text-green-600">{post.acf?.price}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
