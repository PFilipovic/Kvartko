import globalStyles from '../styles/global.css'


export type PropertyFiltersProps = {
  selectedType: string
  setSelectedType: (type: string) => void
  selectedLocation: string
  setSelectedLocation: (location: string) => void
  minPrice: string
  setMinPrice: (price: string) => void
  maxPrice: string
  setMaxPrice: (price: string) => void
  minArea: string
  setMinArea: (area: string) => void
  maxArea: string
  setMaxArea: (area: string) => void
  minRooms: string
  setMinRooms: (rooms: string) => void
  distances: {
    school: string
    kindergarten: string
    park: string
    groceryStore: string
    transport: string
  }
  setDistances: (distances: {
    school: string
    kindergarten: string
    park: string
    groceryStore: string
    transport: string
  }) => void
  className?: string
}

export default function PropertyFilters({ selectedType, setSelectedType, selectedLocation, setSelectedLocation, minPrice, setMinPrice, maxPrice, setMaxPrice, minArea, setMinArea, maxArea, setMaxArea, minRooms, setMinRooms, distances, setDistances }: PropertyFiltersProps) {
  
const fieldClass = "flex flex-col gap-1.5 text-sm font-medium text-gray-700";

const inputClass = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 placeholder:text-gray-400 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

const selectClass = "w-full rounded-lg border border-gray-300 bg-white px-3 py-2.5 text-sm text-gray-800 outline-none transition focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  
return (
  <section className="grid grid-cols-1 gap-6 rounded-xl border border-gray-200 bg-white p-4 shadow-sm md:p-6 lg:grid-cols-2">

    {/* Osnovni filteri */}
    <div className="flex flex-col gap-4">
      <h3 className="text-base font-semibold text-gray-900">
        Osnovni filteri
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        <label className={fieldClass}>
          Tip nekretnine
          <select
            className={selectClass}
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Sve nekretnine</option>
            <option value="Stan">Stan</option>
            <option value="Kuća">Kuća</option>
            <option value="Zemljište">Zemljište</option>
          </select>
        </label>

        <label className={fieldClass}>
          Lokacija
          <input
            className={inputClass}
            type="text"
            placeholder="Unesi kvart..."
            value={selectedLocation}
            onChange={(e) => setSelectedLocation(e.target.value)}
          />
        </label>

        <label className={fieldClass}>
          Minimalna cijena
          <input
            className={inputClass}
            value={minPrice}
            type="number"
            min="0"
            placeholder="Min. cijena (€)"
            onChange={(e) => setMinPrice(Number(e.target.value) < 0 ? "0" : e.target.value)}
          />
        </label>

        <label className={fieldClass}>
          Maksimalna cijena
          <input
            className={inputClass}
            value={maxPrice}
            type="number"
            min="0"
            placeholder="Maks. cijena (€)"
            onChange={(e) => setMaxPrice(Number(e.target.value) < 0 ? "0" : e.target.value)}
          />
        </label>

        <label className={fieldClass}>
          Minimalna površina
          <input
            className={inputClass}
            value={minArea}
            type="number"
            min="0"
            placeholder="Min. površina (m²)"
            onChange={(e) => setMinArea(Number(e.target.value) < 0 ? "0" : e.target.value)}
          />
        </label>

        <label className={fieldClass}>
          Maksimalna površina
          <input
            className={inputClass}
            value={maxArea}
            type="number"
            min="0"
            placeholder="Maks. površina (m²)"
            onChange={(e) => setMaxArea(Number(e.target.value) < 0 ? "0" : e.target.value)}
          />
        </label>

        <label className={fieldClass}>
          Minimalan broj soba
          <input
            className={inputClass}
            value={minRooms}
            type="number"
            min="0"
            placeholder="Broj soba"
            onChange={(e) => setMinRooms(Number(e.target.value) < 0 ? "0" : e.target.value)}
          />
        </label>

      </div>
    </div>

    {/* Udaljenosti */}
    <div className="flex flex-col gap-4 border-l border-gray-200 pl-4">
      <h3 className="text-base font-semibold text-gray-900">
        Udaljenosti od sadržaja
      </h3>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">

        <label className={fieldClass}>
          Škola
          <input
            className={inputClass}
            value={distances.school}
            type="number"
            min="0"
            placeholder="Udaljenost (m)"
            onChange={(e) => setDistances({...distances, school: e.target.value})}
          />
        </label>

        <label className={fieldClass}>
          Vrtić
          <input
            className={inputClass}
            value={distances.kindergarten}
            type="number"
            min="0"
            placeholder="Udaljenost (m)"
            onChange={(e) => setDistances({...distances, kindergarten: e.target.value})}
          />
        </label>

        <label className={fieldClass}>
          Park
          <input
            className={inputClass}
            value={distances.park}
            type="number"
            min="0"
            placeholder="Udaljenost (m)"
            onChange={(e) => setDistances({...distances, park: e.target.value})}
          />
        </label>

        <label className={fieldClass}>
          Trgovina
          <input
            className={inputClass}
            value={distances.groceryStore}
            type="number"
            min="0"
            placeholder="Udaljenost (m)"
            onChange={(e) => setDistances({...distances, groceryStore: e.target.value})}
          />
        </label>

        <label className={fieldClass}>
          Javni prijevoz
          <input
            className={inputClass}
            value={distances.transport}
            type="number"
            min="0"
            placeholder="Udaljenost (m)"
            onChange={(e) => setDistances({...distances, transport: e.target.value})}
          />
        </label>

      </div>
    </div>

  </section>
)
}