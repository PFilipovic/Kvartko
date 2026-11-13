import { properties } from "@/app/data/properties";
import { notFound } from "next/navigation";
import Image from "next/image";




type PropsType = {
  params: Promise<{
    id: string;
  }>;
};


export default async function PropertyDetails(props: PropsType) {
  const { id } = await props.params;
  const foundProperty = properties.find((property) => property.id === parseInt(id));

  if (!foundProperty) {
    notFound();
  }

  return (
    <div className="md:mx-20 p-4 md:p-8 bg-white mt-20 md:mt-12 md:flex md:flex-row md:justify-between gap-10">
      <section className="md:w-2/3 lg:w-1/2">
        <h1 className="text-2xl font-bold mb-4">{foundProperty.title}</h1>
        <p className="text-lg mb-4">Lokacija: {foundProperty.location}</p>
        <Image src={foundProperty.image} alt={foundProperty.title} width={800} height={400} className="w-full md:w-[600px] h-[250px] md:h-[400px] object-cover rounded-lg" />
      </section>
      <section className="md:w-1/3 lg:w-1/2 md:flex md:flex-col md:justify-center">
        <p className="text-xl font-bold mb-2 mt-5">Cijena: {foundProperty.price.toLocaleString("hr-HR", { style: "currency", currency: "EUR" })}</p>
        <p className="mb-2">Veličina: {foundProperty.livingArea || foundProperty.landArea} m²</p>
        <p className="mb-2">Sobe: {foundProperty.rooms}</p>
        <h4 className="text-lg font-bold">Opis</h4>
        <p className="mb-2">{foundProperty.description}</p>
        <p className="mb-2">Datum objave: {new Date(foundProperty.createdAt).toLocaleDateString("hr-HR")}</p>
      </section>
    </div>
  );
}