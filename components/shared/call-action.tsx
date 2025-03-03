import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactDialog } from "./contact-dialog";

export function CallAction() {
  return (
    <Card className="bg-[url(/images/pattern.min.svg)] bg-no-repeat bg-top min-h-[25vh] my-8 container mx-auto px-4">
      <CardHeader>
        <CardTitle className="text-3xl">Обсудим ваш проект?</CardTitle>
      </CardHeader>
      <CardContent className="max-w-2xl">
        Не ждите идеального момента или подходящего времени — начинайте прямо
        сейчас! Свяжитесь со мной, и я помогу воплотить ваши идеи в реальность.
      </CardContent>
      <CardFooter>
        <ContactDialog />
      </CardFooter>
    </Card>
  );
}
