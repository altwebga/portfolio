import { CallAction } from "@/components/call-action";

export default function ServicesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="container mx-auto mt-8">
      {children}
      <CallAction />
    </div>
  );
}
