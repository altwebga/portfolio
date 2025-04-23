"use client";
import { useState } from "react";
import { useIsMobile } from "@/hooks/use-mobile";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { ContactForm } from "./contact-form";

export function ContactDialog() {
  const [open, setOpen] = useState(false);
  const isMobile = useIsMobile();
  const handleClose = () => setOpen(false); // Функция для закрытия формы
  if (!isMobile) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="default" size="lg" className="w-40">
            Начать проект
          </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader className="flex flex-col gap-2">
            <DialogTitle>Заявка на проект</DialogTitle>
            <DialogDescription className="m-0">
              Оставьте ваши контактные данные. Я свяжусь с вами в течении 15
              минут.
            </DialogDescription>
          </DialogHeader>
          <ContactForm onSuccess={handleClose} />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="default" size="lg" className="w-40">
          Начать проект
        </Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-left">
          <DrawerTitle>Заявка на проект</DrawerTitle>
          <DrawerDescription className="m-0">
            Оставьте ваши контактные данные. Я свяжусь с вами в течении 15
            минут.
          </DrawerDescription>
        </DrawerHeader>
        <ContactForm onSuccess={handleClose} className="px-4 space-y-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline" size="lg" className="w-full mt-2">
              Отмена
            </Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}
