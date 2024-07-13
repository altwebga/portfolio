"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { Button } from "@nextui-org/button";
import { Checkbox } from "@nextui-org/checkbox";
import { Input, Textarea } from "@nextui-org/input";

import { PrivacyPolicy } from "./PrivacyPolicy";

export const ContactForm = () => {
  const [checkboxSelect, setCheckboxSelect] = useState<boolean>(true);
  const [formStatus, setFormStatus] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [name, setName] = useState<string>("");
  const [phone, setPhone] = useState<string>("");
  const [isNameInvalid, setIsNameInvalid] = useState<boolean>(false);
  const [isPhoneInvalid, setIsPhoneInvalid] = useState<boolean>(false);
  const pathname = usePathname();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Сброс сообщений об ошибках
    setIsNameInvalid(!name);
    setIsPhoneInvalid(!phone);

    if (!name || !phone) {
      setFormStatus("Пожалуйста, заполните все обязательные поля.");

      return;
    }

    setIsLoading(true);
    const formData = new FormData(event.currentTarget);

    try {
      const response = await fetch("/api/sendEmail", {
        method: "POST",
        body: formData,
      });

      if (response.ok) {
        setFormStatus("Форма успешно отправлена!");
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

  return (
    <form
      className="flex flex-col gap-6 p-4 border border-gray-500 rounded-md"
      onSubmit={handleSubmit}
    >
      <div className="flex flex-col md:flex-row gap-6">
        <Input
          isRequired
          errorMessage={isNameInvalid ? "Имя обязательно для заполнения" : ""}
          isInvalid={isNameInvalid}
          label="Имя"
          name="name"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <Input
          isRequired
          errorMessage={
            isPhoneInvalid ? "Номер телефона обязателен для заполнения" : ""
          }
          isInvalid={isPhoneInvalid}
          label="Номер телефона"
          name="phone"
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <Textarea
        label="Ваше сообщение"
        name="message"
        placeholder="Введите сюда ваше сообщение (не обязательно)"
      />
      <input name="pageUrl" type="hidden" value={pathname} />
      <Checkbox isSelected={checkboxSelect} onValueChange={setCheckboxSelect}>
        <PrivacyPolicy onAgree={handleAgree} onDisagree={handleDisagree} />
      </Checkbox>
      <Button
        color="primary"
        isDisabled={!checkboxSelect || isLoading}
        isLoading={isLoading}
        type="submit"
      >
        Отправить
      </Button>
      {formStatus && <p>{formStatus}</p>}
    </form>
  );
};
