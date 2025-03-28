import { getUsers } from "@/actions/get-users";

export default async function AdminPage() {
  const users = await getUsers();
  return (
    <div className="container mx-auto px-4">
      <h1>Админка</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
