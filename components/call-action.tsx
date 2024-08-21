import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { PopupForm } from "./popup-form";

export const CallAction = () => {
  return (
    <Card className="bg-slate-950 md:px-8 py-12 shadow-lg">
      <CardContent>
        <h2 className="py-2 text-white">Обсудим ваш проект?</h2>
        <p className="max-w-4xl py-2 text-white pb-8">
          Не ждите идеального момента или подходящего времени — начинайте прямо
          сейчас! Свяжитесь со мной, и я помогу воплотить ваши идеи в
          реальность.
        </p>
        <PopupForm />
      </CardContent>
    </Card>
  );
};
