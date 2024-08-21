import { SocialNetwork } from "./social-network";
import { Separator } from "./ui/separator";

export function Footer() {
  return (
    <footer className="bg-background mt-8">
      <Separator />
      <div className="container flex flex-col items-center justify-between px-4 py-6 mx-auto space-y-4 sm:px-6 lg:px-8">
        <SocialNetwork color="primary" size="medium" />
        <p className="text-sm text-center text-foreground">
          © 2022 SeoMix. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
