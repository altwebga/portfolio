import { PostTableAdmin } from "@/components/admin/post-table-admin";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function PostsPage() {
  return (
    <div>
      <div className="flex items-center justify-start gap-4">
        <h1>Посты</h1>
        <Link href="/admin/posts/add">
          <Button>Добавить пост</Button>
        </Link>
      </div>
      <PostTableAdmin />
    </div>
  );
}
