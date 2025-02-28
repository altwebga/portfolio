export function Footer() {
  return (
    <footer className="bg-background/50 backdrop-blur-md sticky bottom-0 z-40 w-full border-t">
      <div className="h-16 flex items-center justify-center container mx-auto px-4">
        <p className="text-sm text-muted-foreground">
          &copy; {new Date().getFullYear()} seomix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
