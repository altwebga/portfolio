import Image, { StaticImageData } from "next/image";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

type ModalPhotoProps = {
  image: StaticImageData;
  title: string;
};

export function ModalPhoto({ image, title }: ModalPhotoProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Image
          src={image}
          alt="diploma"
          className="w-auto h-auto aspect-auto cursor-pointer"
          width={800}
          height={800}
        />
      </DialogTrigger>
      <DialogContent className="max-w-5xl">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription></DialogDescription>
        </DialogHeader>
        <Image
          src={image}
          alt="diploma"
          className="w-auto h-auto"
          width={1024}
          height={1024}
        />
      </DialogContent>
    </Dialog>
  );
}
