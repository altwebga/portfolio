export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="h-full">
      <div className="container mx-auto max-w-7xl px-4">{children}</div>
    </div>
  );
}
