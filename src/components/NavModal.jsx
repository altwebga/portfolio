import { useState, useRef, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { RxActivityLog, RxCross1 } from "react-icons/rx";

const NavModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const modalRef = useRef(); 

  const handleClickOutside = (event) => {
    if (modalRef.current && !modalRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <button
        className="text-white flex flex-row items-center gap-2"
        onClick={() => setIsOpen(!isOpen)}
      >
        <RxActivityLog />
        Меню
      </button>
      {isOpen && (
        <div
          className="fixed inset-0 bg-gray-900 z-50 flex justify-center items-center w-full md:w-1/4"
          ref={modalRef}
        >
                   
          <nav className="text-white flex flex-col gap-4 text-2xl">
            <NavLink to="/" onClick={() => setIsOpen(false)}>
              Главная
            </NavLink>
            <NavLink to="/about" onClick={() => setIsOpen(false)}>
              Обо мне
            </NavLink>
            <NavLink to="/contact" onClick={() => setIsOpen(false)}>
              Контакты
            </NavLink>
            <NavLink to="/services" onClick={() => setIsOpen(false)}>
              Услуги
            </NavLink>
            <NavLink to="/blog" onClick={() => setIsOpen(false)}>
              Блог
            </NavLink>
          </nav>
          <button className="absolute top-0 right-0 m-2" onClick={() => setIsOpen(false)}>
            <RxCross1 className="text-white w-6 h-6" />
          </button> 
        </div>
      )}
    </>
  );
};

export default NavModal;
