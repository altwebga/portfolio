import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ContactForm } from "./ContactForm";

export function CallAction() {
  return (
    <Card className="my-16 bg-bg-pattern shadow-lg">
      <CardHeader>
        <CardTitle>Обсудим ваш проект?</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="max-w-4xl">
          Не ждите идеального момента или подходящего времени — начинайте прямо
          сейчас! Свяжитесь со мной, и я помогу воплотить ваши идеи в
          реальность.
        </p>
      </CardContent>
      <CardFooter>
        <ContactForm />
      </CardFooter>
    </Card>
  );
}
