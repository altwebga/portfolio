import { auth } from "@/auth";
export default async function ProfilePage() {
  const session = await auth();
  return (
    <div>
      <h1>Профиль</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
