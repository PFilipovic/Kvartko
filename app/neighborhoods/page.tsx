import NeighborhoodCard from "../components/NeighborhoodCard";
import { neighborhoods } from "../data/neighborhoods";

export default function NeighborhoodsPage() {
  return (
    <main className="mx-auto max-w-7xl px-4 pt-24 pb-24 sm:px-6 md:pt-12 lg:px-8 lg:pt-8">
      <div className="grid grid-cols-1 gap-4 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 mx-auto">
        {neighborhoods.map((neighborhood) => (
          <NeighborhoodCard key={neighborhood.id} neighborhood={neighborhood} />
        ))}
      </div>
    </main>
  )
}