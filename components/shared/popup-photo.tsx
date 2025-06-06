import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type PopupPhotoProps = {
  title: string;
  image: string;
};

export function PopupPhoto({ title, image }: PopupPhotoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image}
          alt={title}
          className="w-auto h-auto aspect-auto cursor-pointer"
          width={800}
          height={800}
        />
      </DialogTrigger>
      <DialogContent className="md:min-w-[1024px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Image
          src={image}
          alt={title}
          className="w-full h-full object-contain"
          width={1024}
          height={1024}
        />
      </DialogContent>
    </Dialog>
  );
}
