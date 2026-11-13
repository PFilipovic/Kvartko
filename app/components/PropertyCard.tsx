import type { Property } from "../data/properties"
import Link from "next/link"
import Image from "next/image"

type PropertyCardProps = {
  property: Property;
  className?: string;
}


export default function PropertyCard({ property, className }: PropertyCardProps) {
  return (
  <Link href={`/properties/${property.id}`} className="block w-full max-w-[350px]">
    <article className={`w-full bg-white border border-gray-300 overflow-hidden h-[320px] rounded-xl transition shadow-lg/15 delay-100 duration-200 ease-in-out hover:scale-102 hover:shadow-xl/20 ${className ?? ""}`}>
      <Image src={property.image} alt={property.title} width={200} height={100} className="w-full p-3 h-[200px] rounded-2xl object-cover mx-auto" />
      <h3 className="text-[16px] font-bold pt-1 px-4">{property.title}</h3>
      <p className="text-gray-600 px-4 pb-2 text-[14px]">{property.location}</p>
      <div className="flex flex-row justify-between items-baseline">
        <div className="flex flex-col">
        {property.type !== "Zemljište" && <p className="px-4 text-[16px]">Broj soba: {property.rooms}</p>}
      <p className="px-4 pb-2 text-[16px]">Površina: {property.livingArea ? property.livingArea : property.landArea} m²</p>
      </div>
      <p className="text-[16px] font-bold px-4 py-2">{property.price.toLocaleString("hr-HR", {style:"currency", currency:"EUR"})}</p>
    </div>
  </article>
  </Link>
);
}