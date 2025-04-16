'use client'
import { Book, Menu } from "lucide-react"
import Link from "next/link"
import { useState } from "react"
import Burger from "./Burger"

export default function Header() {

  return (
    <>
      <div className="flex items-center md:h-16 h-12 shadow-lg justify-between px-6 md:px-20">
        <div className="flex my-5 items-center">
          <Book size={30}/>
          <h1 className="md:text-2xl text-xl font-bold mx-4">Moon Town</h1>
        </div>
        <div className="md:flex gap-12 text-xl hidden">
        <Link href='/'>Главная</Link>
          <Link href='/library'>Библиотека</Link>
          <Link href='/editor'>Редактор</Link>
          <Link href='/profile'>Профиль</Link>
        </div>
        <div className="md:hidden">
          <Burger/>
        </div>
      </div>
    </>
  )
}