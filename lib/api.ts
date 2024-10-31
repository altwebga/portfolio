import { Post } from "./types";
import placeholderImage from "@/public/images/placeholder_image.svg";

const apiUrl = process.env.NEXT_PUBLIC_API_URL;

export async function getPosts(
  categories: number,
  elements: number
): Promise<Post[]> {
  try {
    // Запрос постов
    const response = await fetch(
      `${apiUrl}/posts?categories=${categories}&per_page=${elements}`,
      { next: { revalidate: 3600 } }
    );
    const posts: Post[] = await response.json();
    // Параллельные запросы для получения изображений
    const postsWithImages = await Promise.all(
      posts.map(async (post) => {
        if (post.featured_media) {
          try {
            // Запрос для получения URL изображения по featured_media
            const imageResponse = await fetch(
              `${apiUrl}/media/${post.featured_media}?_fields=source_url`
            );
            const imageData = await imageResponse.json();
            return { ...post, image_url: imageData.source_url };
          } catch (imageError) {
            console.error(
              `Ошибка загрузки изображения для поста ${post.id}`,
              imageError
            );
            return { ...post, image_url: placeholderImage.src }; // В случае ошибки добавляем null
          }
        } else {
          return { ...post, image_url: placeholderImage.src }; // Если нет featured_media, добавляем null
        }
      })
    );
    return postsWithImages;
  } catch (error) {
    console.error("Ошибка загрузки постов", error);
    return [];
  }
}

export async function getPost(slug: string): Promise<Post | null> {
  try {
    // Запрос поста по slug
    const response = await fetch(
      `${apiUrl}/posts?slug=${slug}&_fields=id,title,content,featured_media,acf,excerpt,category_names,tag_names,categories,tags`
    );
    const posts: Post[] = await response.json();
    // Если постов нет, возвращаем null
    if (posts.length === 0) {
      return null;
    }
    const post = posts[0]; // WP возвращает массив с одним постом, обрабатываем его.
    if (post.featured_media) {
      try {
        // Запрос для получения URL изображения по featured_media
        const imageResponse = await fetch(
          `${apiUrl}/media/${post.featured_media}?_fields=source_url`,
          { next: { revalidate: 3600 } }
        );
        const imageData = await imageResponse.json();
        post.image_url = imageData.source_url; // Сохраняем строку URL изображения
      } catch (imageError) {
        console.error(
          `Ошибка загрузки изображения для поста ${post.id}`,
          imageError
        );
        post.image_url = placeholderImage; // Если изображение не загрузилось, устанавливаем placeholder
      }
    } else {
      post.image_url = placeholderImage; // Если нет featured_media, добавляем placeholder
    }
    return post;
  } catch (error) {
    console.error("Ошибка загрузки поста", error);
    return null;
  }
}
