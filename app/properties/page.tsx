"use client";
import PropertyCard from "@/app/components/PropertyCard";
import { properties } from "@/app/data/properties";
import type { Property } from "@/app/data/properties";
import PropertyFilters from "../components/PropertyFilters";
import { useState } from "react";

export default function PropertiesPage() {

  function normalizeText(text: string) {
    return text.normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .toLowerCase();
  }

  const [selectedType, setSelectedType] = useState("")
  const [selectedLocation, setSelectedLocation] = useState("") 
  const [minPrice, setMinPrice] = useState("")
  const [maxPrice, setMaxPrice] = useState("")
  const [minArea, setMinArea] = useState("")
  const [maxArea, setMaxArea] = useState("")
  const [minRooms, setMinRooms] = useState("")
  const [distances, setDistances] = useState({
    school: "",
    kindergarten: "",
    park: "",
    groceryStore: "",
    transport: ""
  })
  const [sortOrder, setSortOrder] = useState<SortOrder>("")
  const [showFilters, setShowFilters] = useState(false);


type DistanceKey = keyof typeof distances;
function matchesDistance(property: Property, key: DistanceKey) {
  const maxDistance = distances[key];
  if (!maxDistance) return true;

  const propertyDistance = property.distances?.[key];
  if (propertyDistance === undefined) return false;

  return Number(propertyDistance) <= Number(maxDistance);
};


const filteredProperties = properties.filter(property => {
  const area = property.type === "Zemljište" ? property.landArea : property.livingArea;
  return (
    (!selectedType || property.type === selectedType) &&
    (!selectedLocation || normalizeText(property.location).includes(normalizeText(selectedLocation))) &&
    (!minPrice || property.price >= Number(minPrice)) &&
    (!maxPrice || property.price <= Number(maxPrice)) &&
    (!minArea || (area !== undefined && area >= Number(minArea))) &&
    (!maxArea || (area !== undefined && area <= Number(maxArea))) &&
    (!minRooms || property.rooms >= Number(minRooms)) &&
    (Object.keys(distances) as DistanceKey[]).every(key => matchesDistance(property, key))
  );
});

function getPropertyArea(property: Property) {
  return property.type === "Zemljište" ? property.landArea : property.livingArea
}

type SortOrder = "price-asc" | "price-desc" | "newest" | "area-asc" | "area-desc" | "";
const sortedProperties = [...filteredProperties].sort((a, b) => {
  if (sortOrder === "price-asc") return a.price-b.price;
  if (sortOrder === "price-desc") return b.price-a.price;
  if (sortOrder === "newest") return new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
  const areaA = getPropertyArea(a);
  const areaB = getPropertyArea(b);

  if (areaA === undefined && areaB === undefined) return 0;
  if (areaA === undefined) return 1;
  if (areaB === undefined) return -1;

  if (sortOrder === "area-desc") return areaA - areaB;
  if (sortOrder === "area-asc") return areaB - areaA;
  return 0;
});


  
return (
  <main className="mx-auto max-w-7xl px-4 pt-24 pb-24 sm:px-6 md:pt-12 lg:px-8 lg:pt-8">

    {/* Mobilni gumb za otvaranje filtera */}
    <button
      onClick={() => setShowFilters(!showFilters)}
      aria-expanded={showFilters}
      className="mb-4 flex w-full items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white px-4 py-3 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-50 md:hidden"
    >
      <span>Filtriraj nekretnine</span>
      <span>{showFilters ? "−" : "+"}</span>
    </button>

    {/* Sortiranje */}
    <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
      <label className="flex flex-col gap-1.5 text-sm font-medium text-gray-700 sm:flex-row sm:items-center">
        Sortiraj po:
        <select
          className="w-full cursor-pointer rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100 sm:w-52"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value as SortOrder)}
        >
          <option value="">Zadano</option>
          <option value="price-asc">Najniža cijena</option>
          <option value="price-desc">Najviša cijena</option>
          <option value="newest">Najnovije objavljeno</option>
          <option value="area-asc">Najmanja površina</option>
          <option value="area-desc">Najveća površina</option>
        </select>
      </label>

      <p className="text-sm text-gray-600">
        Pronađeno nekretnina:{" "}
        <span className="font-semibold text-gray-900">
          {filteredProperties.length}
        </span>
      </p>
    </div>

    {/* Filteri */}
    <div className={`${showFilters ? "block" : "hidden"} mb-6 md:block`}>
      <PropertyFilters
        selectedType={selectedType}
        setSelectedType={setSelectedType}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
        minArea={minArea}
        setMinArea={setMinArea}
        maxArea={maxArea}
        setMaxArea={setMaxArea}
        minRooms={minRooms}
        setMinRooms={setMinRooms}
        distances={distances}
        setDistances={setDistances}
      />
    </div>

    {/* Oglasi */}
    <div className="mx-auto grid w-full max-w-7xl grid-cols-1 justify-items-center gap-5 px-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
      {sortedProperties.map((property: Property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>

    {/* Poruka ako nema rezultata */}
    {sortedProperties.length === 0 && (
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-200 bg-gray-50 px-4 py-12 text-center">
        <h3 className="text-lg font-semibold text-gray-900">
          Nema pronađenih nekretnina
        </h3>
        <p className="mt-2 text-sm text-gray-500">
          Pokušaj promijeniti ili ukloniti neke filtere.
        </p>
      </div>
    )}

  </main>
)
}