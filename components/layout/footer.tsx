export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t bg-background">
      <div className="h-16 container mx-auto px-4 flex flex-row justify-center items-center">
        <p className="m-0 text-sm">©2012 - {year} seomix. Все права защищены</p>
      </div>
    </footer>
  );
}
