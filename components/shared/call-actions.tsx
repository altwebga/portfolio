import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { CallbackRequestForm } from "../form/callback-request-form";
import { Lightbulb } from "lucide-react";

export function CallActions() {
  return (
    <Card className="max-w-md gap-0 my-4">
      <CardHeader className="m-0">
        <CardTitle className="flex gap-2 items-center">
          <Lightbulb className="w-10 h-10" />
          <h3>Есть идея?</h3>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-muted-foreground leading-relaxed text-sm">
          Оставьте заявку на звонок, и мы свяжемся с вами в удобное время.
          Обсудим вашу идею или текущую задачу, ответим на вопросы и подскажем,
          как лучше подойти к реализации проекта.
        </p>
      </CardContent>

      <CardFooter>
        <CallbackRequestForm />
      </CardFooter>
    </Card>
  );
}
