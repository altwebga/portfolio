import { getUsers } from "@/actions/get-users";

export default async function UsersPage() {
  const users = await getUsers();
  return (
    <div className="container mx-auto px-4">
      <h1>Все пользователи</h1>
      <pre>{JSON.stringify(users, null, 2)}</pre>
    </div>
  );
}
