import Link from "next/link";
import { useState } from "react"

export default function Burger () {

  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <div className="relative">
        <div className="flex flex-col justify-center items-center cursor-pointer" onClick={toggleMenu}>
            <div className={`w-6 h-1 my-0.5 bg-black transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-1.5' : ''}`}></div>
            <div className={`w-6 h-1 my-0.5 bg-black transition-opacity duration-300 ${isOpen ? 'opacity-0' : 'opacity-100'}`}></div>
            <div className={`w-6 h-1 my-0.5 bg-black transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`}></div>
        </div>
        {isOpen && (
            <div className="absolute right-[-6rem] mt-1 w-48 bg-gray-900 rounded-md shadow-lg py-1 px-2 z-50 top-10">
                <div className="flex flex-col">
                  <Link className="py-2 text-white z-10" href='/'>Главная</Link>
                  <Link className="py-2 text-white z-10" href='/library'>Библиотека</Link>
                  <Link className="py-2 text-white z-10" href='/editor'>Редактор</Link>
                  <Link className="py-2 text-white z-10" href='/profile'>Профиль</Link>
                </div>
            </div>
        )}
    </div>
  )
}