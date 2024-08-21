export default function BlogLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className="container mx-auto mt-8">{children}</div>;
}
