import { Link } from "@nextui-org/link";
import { Button } from "@nextui-org/button";
import { Card, CardBody } from "@nextui-org/card";

export const CallToAction = () => {
  return (
    <Card className="bg-stone-950 px-8 py-12" shadow="md">
      <CardBody>
        <h2 className="py-2 text-4xl text-white">Обсудим ваш проект?</h2>
        <p className="max-w-4xl py-2 text-white">
          Не ждите идеального момента или подходящего времени — начинайте прямо
          сейчас!
        </p>
        <p className="max-w-4xl text-white">
          Свяжитесь со мной, и я помогу воплотить ваши идеи в реальность.
        </p>
        <Button
          as={Link}
          className="mt-6 w-48"
          color="primary"
          href="/contact"
          variant="solid"
        >
          Начать проект
        </Button>
      </CardBody>
    </Card>
  );
};
