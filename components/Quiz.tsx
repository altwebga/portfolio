"use client";
import { useState } from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrev = () => setStep((prevStep) => prevStep - 1);
  const renderStepContent = () => {
    switch (step) {
      case 0:
        return (
          <div>
            <h3>Какие услуги Вас интересуют?</h3>
            <div className="flex justify-end">
              <Button
                color="primary"
                endContent={<HiArrowSmRight className="h-4 w-4" />}
                onPress={handleNext}
              >
                Дальше
              </Button>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <h3>Какие сайты вам нравятся?</h3>
            <div className="flex justify-between">
              <Button
                color="primary"
                startContent={<HiArrowSmLeft className="h-4 w-4" />}
                onPress={handlePrev}
              >
                Назад
              </Button>
              <Button
                color="primary"
                endContent={<HiArrowSmRight className="h-4 w-4" />}
                onPress={handleNext}
              >
                Дальше
              </Button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>В какие бюджеты и сроки Вы хотите уложиться?</h3>
            <div className="flex justify-between">
              <Button
                color="primary"
                startContent={<HiArrowSmLeft className="h-4 w-4" />}
                onPress={handlePrev}
              >
                Назад
              </Button>
              <Button
                color="primary"
                endContent={<HiArrowSmRight className="h-4 w-4" />}
                onPress={handleNext}
              >
                Дальше
              </Button>
            </div>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>Ваши контактные данные</h3>
            <div className="flex justify-between">
              <Button
                color="primary"
                startContent={<HiArrowSmLeft className="h-4 w-4" />}
                onPress={handlePrev}
              >
                Назад
              </Button>
              <Button
                color="primary"
                endContent={<HiArrowSmRight className="h-4 w-4" />}
                onPress={handleNext}
              >
                Дальше
              </Button>
            </div>
          </div>
        );
      case 4:
        return (
          <div>
            <p>Спасибо, мы с Вами свяжемся</p>
            <Button
              color="default"
              startContent={<HiArrowSmLeft className="h-4 w-4" />}
              onPress={handlePrev}
            >
              Ответить еще раз
            </Button>
          </div>
        );
      default:
        return null;
    }
  };

  return <Card className="p-4">{renderStepContent()}</Card>;
};
