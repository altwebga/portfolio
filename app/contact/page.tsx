import { title } from "@/components/primitives";
import { SocialLink } from "@/components/SocialLink";
import { ContactForm } from "@/components/ContactForm";

export default function ContactPage() {
  return (
    <div className="py-8">
      <h1 className={title()}>Мои контакты</h1>
      <div className="flex flex-col md:flex-row gap-12 py-6">
        <div className="flex-1">
          <p className="py-4">
            Я не публикую номер телефона т.к. не хочу попасть в базу спам
            звонков. Вы можете легко получить его перейдя в любой из моих
            социальных аккаунтов.
          </p>
          <SocialLink color="secondary" size="large" />
        </div>
        <div className="flex-1">
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
