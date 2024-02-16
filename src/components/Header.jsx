import { Link } from "react-router-dom";
import NavModal from "./NavModal";
import { RxMargin } from "react-icons/rx";

const Header = () => {
  return (
    <header className="h-12 bg-gray-900 w-full flex items-center justify-between px-4 shadow-md">
        <NavModal />
        <div className="flex items-center gap-2">
        <RxMargin className="text-white w-6 h-6" />
        <Link to="/" className="text-white text-xl font-bold">seomix.</Link>
        
        </div>
        
        <button className="text-white">Начать проект</button>
    </header>
  )
}

export default Header