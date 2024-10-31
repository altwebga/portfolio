export function Footer() {
  return (
    <footer className="bg-background w-full border-t">
      <div className="flex items-center justify-center h-16 md:h-20 px-4">
        <p>Copyright &copy; 2014 - {new Date().getFullYear()}</p>
      </div>
    </footer>
  );
}
