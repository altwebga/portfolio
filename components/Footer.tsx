import { SocialLink } from "./SocialLink";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t-1 border-gray-500">
      <div className="flex flex-col items-center py-4">
        <SocialLink color="foreground" size="medium" />
        <div className="text-sm mt-2">
          &copy; {currentYear} seomix. All rights reserved.
        </div>
      </div>
    </footer>
  );
};
