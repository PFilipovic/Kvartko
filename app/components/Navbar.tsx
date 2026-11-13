"use client";
import Link from "next/link";
import { useState } from "react"
import { usePathname } from "next/navigation";
import Image from "next/image";


export default function Navbar() {

const pathname = usePathname();

const [menuState, setMenuState] = useState<boolean>(false)

  return (
    <header className="absolute top-0 left-0 z-50 w-full bg-transparent md:relative md:bg-white">
      <nav className={`flex flex-col justify-between md:border-b-2 md:border-b-gray-200 px-8 py-4 md:flex-row md:px-16 lg:px-24 ${
        pathname === "/" ? "text-white md:text-black" : "text-black"
        }`}>
        <div className="relative flex justify-between items-center w-full">
          <Link href="/">
          <div className="relative flex flex-row items-center gap-2">
            <Image src="/kvartko-logo.svg" alt="Kvartko Logo" width={100} height={50} className="hidden md:block w-[40px] h-auto"/>
            <p className="text-xl">Kvartko</p>
          </div>
          </Link>
          <ul className="hidden gap-6 md:flex">
            <li><Link href="/" className="relative w-fit cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Početna</Link></li>
            <li><Link href="/properties" className="relative w-fit cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Nekretnine</Link></li>
            <li><Link href="/neighborhoods" className="relative w-fit cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">Kvartovi</Link></li>
            <li><Link href="/about" className="relative w-fit cursor-pointer after:absolute after:bottom-0 after:left-0 after:h-[1px] after:w-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full">O nama</Link></li>
          </ul>
          <button className="md:hidden text-xl"
            type="button" onClick={() => setMenuState(!menuState)}
            aria-label={menuState ? "Zatvori izbornik" : "Otvori izbornik"}>
            {menuState ? "✕" : "☰"}
          </button>
          {menuState && (<ul className="absolute text-black uppercase top-full right-0 z-50 flex menu-enter mt-2 flex-col gap-2 bg-gray-100 w-50 ml-auto p-3 text-right justify-end rounded-l md:hidden">
            <li><Link href="/properties" onClick={() => setMenuState(false)}>nekretnine</Link></li>
            <li><Link href="/about" onClick={() => setMenuState(false)}>o nama</Link></li>
            <li><Link href="/neighborhoods" onClick={() => setMenuState(false)}>kvartovi</Link></li>
        </ul>)}
        </div>
      </nav>
    </header>
  )
}