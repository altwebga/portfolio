"use client";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { DirectusImage } from "@/components/shared/directus-image";

type Certificate = {
  directus_files_id: string;
};

type CertificatesGalleryProps = {
  certificates?: Certificate[];
};

export function CertificatesGallery({
  certificates,
}: CertificatesGalleryProps) {
  if (!certificates?.length) return null;

  return (
    <div className="mt-6">
      <div className="grid grid-cols-2 gap-2">
        {certificates.map((cert) => (
          <Dialog key={cert.directus_files_id}>
            <DialogTrigger>
              <DirectusImage
                url={cert.directus_files_id}
                width={160}
                height={160}
                className="w-full h-40"
              />
            </DialogTrigger>

            <DialogContent className="md:min-w-[1024px] p-2">
              <DialogHeader>
                <DialogTitle></DialogTitle>
                <DialogDescription></DialogDescription>
              </DialogHeader>
              <DirectusImage
                url={cert.directus_files_id}
                width={1200}
                height={1200}
                className="w-full h-auto"
              />
            </DialogContent>
          </Dialog>
        ))}
      </div>
    </div>
  );
}
