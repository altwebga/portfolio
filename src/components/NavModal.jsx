import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxActivityLog, RxCross1 } from "react-icons/rx";


const NavModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(); // Добавляем ссылку на модальное окно

  // Функция для закрытия модального окна при клике вне его
  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  // Добавляем и удаляем обработчик события клика
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className="text-white flex flex-row items-center gap-2 ml-10"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxActivityLog />
        Меню
      </button>
      {isOpen && (
        <div className="fixed inset-0 bg-black z-50 flex justify-center items-center w-full md:w-1/4" ref={modalRef}>
            <button className="absolute mx-0" onClick={() => setIsOpen(false)}><RxCross1 className="text-white" /></button> {/* Кнопка закрытия */}
          <nav className="text-white flex flex-col gap-4 text-2xl">
            
            <NavLink to="/" onClick={() => setIsOpen(false)}>Главная</NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>Обо мне</NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>Контакты</NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)}>Услуги</NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)}>Блог</NavLink>
          </nav>
        </div>
      )}
    </>
  );
};

export default NavModal;