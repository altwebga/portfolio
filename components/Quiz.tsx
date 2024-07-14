"use client";
import { useState, ChangeEvent, FormEvent } from "react";
import { Card } from "@nextui-org/card";
import { Button } from "@nextui-org/button";
import { Checkbox, CheckboxGroup } from "@nextui-org/checkbox";
import { Radio, RadioGroup } from "@nextui-org/radio";
import { Input, Textarea } from "@nextui-org/input";
import { HiArrowSmRight, HiArrowSmLeft } from "react-icons/hi";

import { PrivacyPolicy } from "./PrivacyPolicy";

type FormDataType = {
  services: string[];
  customService: string;
  websites: string[];
  budget: string;
  timeframe: string;
  name: string;
  phone: string;
  message: string;
  file: File | null;
};

export const Quiz = () => {
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState<FormDataType>({
    services: [],
    customService: "",
    websites: ["", "", "", ""],
    budget: "",
    timeframe: "",
    name: "",
    phone: "",
    message: "",
    file: null,
  });

  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isNameInvalid, setIsNameInvalid] = useState<boolean>(false);
  const [isPhoneInvalid, setIsPhoneInvalid] = useState<boolean>(false);
  const [checkboxSelect, setCheckboxSelect] = useState<boolean>(true);

  const handleNext = () => setStep((prevStep) => prevStep + 1);
  const handlePrev = () => setStep((prevStep) => prevStep - 1);

  const handleCheckboxChange = (values: string[]) => {
    setFormData((prevData) => ({ ...prevData, services: values }));
  };

  const handleRadioChange =
    (field: keyof FormDataType) => (event: ChangeEvent<HTMLInputElement>) => {
      setFormData((prevData) => ({ ...prevData, [field]: event.target.value }));
    };

  const handleInputChange =
    (field: keyof FormDataType) =>
    (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData((prevData) => ({ ...prevData, [field]: event.target.value }));
    };

  const handleFileChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData((prevData) => ({
      ...prevData,
      file: event.target.files ? event.target.files[0] : null,
    }));
  };

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();

    setIsNameInvalid(!formData.name);
    setIsPhoneInvalid(!formData.phone);

    if (!formData.name || !formData.phone) {
      setFormStatus("Пожалуйста, заполните все обязательные поля.");

      return;
    }

    setIsLoading(true);
    const data = new FormData();

    if (formData.services.length)
      formData.services.forEach((service) => data.append("services", service));
    if (formData.customService)
      data.append("customService", formData.customService);
    if (formData.websites.some((site) => site))
      formData.websites.forEach((site) => data.append("websites", site));
    if (formData.budget) data.append("budget", formData.budget);
    if (formData.timeframe) data.append("timeframe", formData.timeframe);
    if (formData.name) data.append("name", formData.name);
    if (formData.phone) data.append("phone", formData.phone);
    if (formData.message) data.append("message", formData.message);
    if (formData.file) data.append("file", formData.file);

    try {
      const response = await fetch("/api/sendQuiz", {
        method: "POST",
        body: data,
      });

      if (response.ok) {
        setFormStatus("Форма успешно отправлена!");
        setStep(4);
      } else {
        setFormStatus("Ошибка при отправке формы. Попробуйте еще раз.");
      }
    } catch (error) {
      setFormStatus("Ошибка при отправке формы. Попробуйте еще раз.");
    } finally {
      setIsLoading(false);
    }
  };

  const handleAgree = () => {
    setCheckboxSelect(true);
  };

  const handleDisagree = () => {
    setCheckboxSelect(false);
  };

  const renderStepContent = () => {
    const steps = [
      {
        title: "Какие услуги Вас интересуют?",
        content: (
          <>
            <div className="space-y-4 py-6">
              <CheckboxGroup
                orientation="horizontal"
                value={formData.services}
                onValueChange={handleCheckboxChange}
              >
                <Checkbox value="Разработка сайта">Разработка сайта</Checkbox>
                <Checkbox value="Продвижение сайта">Продвижение сайта</Checkbox>
                <Checkbox value="Настройка интернет рекламы">
                  Настройка интернет рекламы
                </Checkbox>
                <Checkbox value="Настройка рекламы в социальных сетях">
                  Настройка рекламы в социальных сетях
                </Checkbox>
                <Checkbox value="Техническая поддержка">
                  Техническая поддержка
                </Checkbox>
                <Checkbox value="Разработка мобильного приложения">
                  Разработка мобильного приложения
                </Checkbox>
                <Checkbox value="Разработка дизайна и фирменного стиля">
                  Разработка дизайна и фирменного стиля
                </Checkbox>
                <Checkbox value="Email-рассылка">Email-рассылка</Checkbox>
              </CheckboxGroup>
              <Input
                className="max-w-xs"
                label="Свой вариант"
                placeholder="Название услуг"
                type="text"
                value={formData.customService}
                onChange={handleInputChange("customService")}
              />
            </div>
            <div className="flex justify-end">
              <Button
                color="primary"
                endContent={<HiArrowSmRight className="h-4 w-4" />}
                onPress={handleNext}
              >
                Дальше
              </Button>
            </div>
          </>
        ),
      },
      {
        title: "4 сайта которые вам нравятся больше всего",
        content: (
          <>
            <p>Скопируйте URL-адреса сайтов из адресной строки браузера</p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-6">
              {formData.websites.map((site, index) => (
                <Input
                  key={index}
                  className="max-w-xs"
                  label={`Сайт ${index + 1}`}
                  placeholder="URL-адрес сайта"
                  type="text"
                  value={site}
                  onChange={(e) => {
                    const newWebsites = [...formData.websites];

                    newWebsites[index] = e.target.value;
                    setFormData((prevData) => ({
                      ...prevData,
                      websites: newWebsites,
                    }));
                  }}
                />
              ))}
            </div>
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
          </>
        ),
      },
      {
        title: "В какие бюджеты и сроки Вы хотите уложиться?",
        content: (
          <>
            <div className="flex flex-col md:flex-row gap-4 py-6">
              <RadioGroup
                className="flex-1"
                label="Бюджет"
                value={formData.budget}
                onChange={handleRadioChange("budget")}
              >
                <Radio value="от 15 000 до 50 000 руб.">
                  от 15 000 до 50 000 руб.
                </Radio>
                <Radio value="от 50 000 до 100 000 руб.">
                  от 50 000 до 100 000 руб.
                </Radio>
                <Radio value="от 100 000 до 200 000 руб.">
                  от 100 000 до 200 000 руб.
                </Radio>
                <Radio value="более 200 000 руб.">более 200 000 руб.</Radio>
              </RadioGroup>
              <RadioGroup
                className="flex-1"
                label="Сроки"
                value={formData.timeframe}
                onChange={handleRadioChange("timeframe")}
              >
                <Radio value="от 14 дней до 1 месяца">
                  от 14 дней до 1 месяца
                </Radio>
                <Radio value="от 1 месяца до 6 месяцев">
                  от 1 месяца до 6 месяцев
                </Radio>
                <Radio value="от 6 месяцев до 1 года">
                  от 6 месяцев до 1 года
                </Radio>
                <Radio value="более 1 года">более 1 года</Radio>
              </RadioGroup>
            </div>
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
          </>
        ),
      },
      {
        title: "Ваши контактные данные",
        content: (
          <form className="py-6 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <Input
                isRequired
                className="max-w-xs"
                errorMessage={
                  isNameInvalid ? "Имя обязательно для заполнения" : ""
                }
                isInvalid={isNameInvalid}
                label="Имя"
                name="name"
                type="text"
                value={formData.name}
                onChange={handleInputChange("name")}
              />
              <Input
                isRequired
                className="max-w-xs"
                errorMessage={
                  isPhoneInvalid
                    ? "Номер телефона обязателен для заполнения"
                    : ""
                }
                isInvalid={isPhoneInvalid}
                label="Телефон"
                name="phone"
                type="text"
                value={formData.phone}
                onChange={handleInputChange("phone")}
              />
            </div>
            <div className="flex flex-col gap-4">
              <Textarea
                className="max-w-2xl"
                label="Сообщение"
                name="message"
                placeholder="Дополнительное описание"
                value={formData.message}
                onChange={handleInputChange("message")}
              />
              <label htmlFor="file">Техническое задание</label>
              <input
                accept=".doc,.docx,.xml,application/msword,application/vnd.openxmlformats-officedocument.wordprocessingml.document"
                className="max-w-2xl"
                name="file"
                type="file"
                onChange={handleFileChange}
              />
            </div>
            <Checkbox
              isSelected={checkboxSelect}
              onValueChange={setCheckboxSelect}
            >
              <PrivacyPolicy
                onAgree={handleAgree}
                onDisagree={handleDisagree}
              />
            </Checkbox>
            <div>{formStatus && <p>{formStatus}</p>}</div>
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
                isDisabled={!checkboxSelect || isLoading}
                isLoading={isLoading}
                type="submit"
              >
                Отправить
              </Button>
            </div>
          </form>
        ),
      },
      {
        title: "",
        content: (
          <>
            <p>Спасибо, мы с Вами свяжемся</p>
            <Button
              color="default"
              startContent={<HiArrowSmLeft className="h-4 w-4" />}
              onPress={handlePrev}
            >
              Ответить еще раз
            </Button>
          </>
        ),
      },
    ];

    return (
      <>
        <h3>{steps[step].title}</h3>
        {steps[step].content}
      </>
    );
  };

  return (
    <Card className="p-4 min-h-96 flex flex-col justify-between">
      {renderStepContent()}
    </Card>
  );
};
