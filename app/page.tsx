import Image from "next/image";
import heroImageDesktop from "@/public/hero-image-desktop.jpg";
import Link from "next/link";
import PropertyCard from "./components/PropertyCard";
import { properties } from "./data/properties";

export default function Home() {
  return (
    <main>
      <div className="relative h-dvh w-full md:h-[500px]">
        <Image
          src={heroImageDesktop}
          alt="hero image"
          loading="eager"
          priority
          fill
          sizes="100vw"
          className="object-cover brightness-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/100 via-black/50 to-transparent" />
        <div className="absolute inset-0 flex items-center justify-center p-8 md:justify-between">
          <div className="absolute flex flex-col items-center gap-4 text-center md:items-start md:text-left md:max-w-[50%]">
            <p className="text-l text-shadow-lg text-white flex  mx-5 md:text-xl">Usporedi nekretnine prema lokaciji, sadržajima i kvaliteti života.</p>
            <h1 className="text-3xl text-shadow-lg font-bold text-white flex  mx-5 md:text-4xl">Pronađi dom u kvartu  koji ti odgovara.</h1>
            <p className="text-sm text-shadow-lg text-white flex  mx-5 md:text-xl">Od urbane sredine do mirnih obiteljskih kvartova.</p>
            <Link href="/neighborhoods" aria-label="Pretraži nekretnine"  className="bg-lime-300 text-center w-36 text-sm font-medium p-2 m-auto mt-10 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 cursor-pointer rounded-full hover:bg-lime-400">
              Započni pretragu
            </Link>
          </div>
          <div className="hidden ml-auto h-[80%] w-[40%] bg-white/10 backdrop-contrast-100 p-8 md:block"></div>
        </div>
      </div>
      <section className="md:mx-10 lg:mx-20">
        <h2 className="text-2xl my-10 text-center font-semibold">
          Novi oglasi
        </h2>
      <div className="mx-auto flex w-full max-w-7xl flex-wrap justify-center gap-5 px-2">
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
      </section>
    </main>
);
}