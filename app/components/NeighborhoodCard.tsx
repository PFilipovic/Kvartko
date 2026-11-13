"use client";
import Image from "next/image";
import Link from "next/link";
import { Neighborhood } from "../data/neighborhoods";

type NeighborhoodCardProps = {
  neighborhood: Neighborhood;
};

export default function NeighborhoodCard( {neighborhood }: NeighborhoodCardProps) {
return (
  <article className="w-full min-w-0 max-w-[350px] overflow-hidden rounded-xl border border-gray-300 bg-white shadow-lg/15 transition duration-200 ease-in-out hover:scale-103 hover:shadow-xl/20">
    <Link
      href={`/neighborhoods/${neighborhood.slug}`}
      className="block w-full min-w-0"
    >
      <Image
        src={neighborhood.image}
        alt={`Granice gradske četvrti ${neighborhood.name}`}
        width={1280}
        height={1440}
        className="h-48 w-full object-contain p-3"
      />

      <div className="px-4">
        <h3 className="pt-1 text-lg font-bold">
          {neighborhood.name}
        </h3>

        <p className="mt-2 text-sm text-gray-600">
          {neighborhood.description}
        </p>
      </div>
    </Link>

    <div className="px-4 pb-4">
      <p className="mt-3 mb-2 text-xs text-gray-500">
        {neighborhood.imageCredit}{" "}
        <a
          href={neighborhood.imageSourceUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Izvor slike
        </a>
      </p>
    </div>
  </article>
);
}