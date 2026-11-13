export type Property = {
  id: number
  title: string
  type: string
  location: string
  price: number
  livingArea?: number
  landArea?: number
  rooms: number
  image: string
  description: string
  createdAt: string
  distances: {
    school: string
    kindergarten: string
    park: string
    groceryStore: string
    transport: string
  }
}


export const properties: Property[] = [
  {
    id: 1,
    title: "Moderan stan na Španskom",
    type: "Stan",
    location: "Trešnjevka - jug",
    price: 255000,
    livingArea: 48,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Moderan stan u novogradnji, u blizini tržnice i javnog prijevoza. Dobro organiziran prostor s dvije spavaće sobe i puno prirodnog svjetla.",
    distances: {
      school: "500",
      kindergarten: "300",
      park: "1000",
      groceryStore: "800",
      transport: "400"
    },
    createdAt: "2026-10-29",
  },
  {
    id: 2,
    title: "Obiteljska kuća s vrtom",
    type: "Kuća",
    location: "Stenjevec",
    price: 385000,
    livingArea: 165,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    description:
      "Prostrana obiteljska kuća s privatnim vrtom, terasom i tri spavaće sobe. Mirna lokacija pogodna za obiteljski život.",
    distances: {
      school: "600",
      kindergarten: "400",
      park: "1200",
      groceryStore: "900",
      transport: "500"
    },
    createdAt: "2026-10-28",
  },
  {
    id: 3,
    title: "Stan u blizini Jaruna",
    type: "Stan",
    location: "Trešnjevka - jug",
    price: 298000,
    livingArea: 72,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    description:
      "Svijetao stan u blizini Jarunskog jezera, rekreacijskih sadržaja i tramvajske stanice. Idealan za parove i manje obitelji.",
    distances: {
      school: "700",
      kindergarten: "500",
      park: "1100",
      groceryStore: "1000",
      transport: "600"
    },
    createdAt: "2026-10-27",
  },
  {
    id: 4,
    title: "Građevinsko zemljište",
    type: "Zemljište",
    location: "Podsused - Vrapče",
    price: 125000,
    landArea: 650,
    rooms: 0,
    image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80",
    description:
      "Građevinsko zemljište u mirnom dijelu Samobora. Pogodno za izgradnju obiteljske kuće, uz pristup osnovnoj infrastrukturi.",
    distances: {
      school: "800",
      kindergarten: "600",
      park: "1300",
      groceryStore: "1100",
      transport: "700"
    },
    createdAt: "2026-10-26",
  },
  {
    id: 5,
    title: "Stan s balkonom u novogradnji",
    type: "Stan",
    location: "Trešnjevka - sjever",
    price: 279000,
    livingArea: 64,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600607687644-c7171b42498f?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stan modernog rasporeda s dvije spavaće sobe i balkonom. U blizini trgovina, škola i javnog prijevoza.",
    distances: {
      school: "900",
      kindergarten: "700",
      park: "1400",
      groceryStore: "1200",
      transport: "800"
    },
    createdAt: "2026-10-25",
  },
  {
    id: 6,
    title: "Prostrana kuća za obitelj",
    type: "Kuća",
    location: "Podsused - Vrapče",
    price: 345000,
    livingArea: 145,
    rooms: 4,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kuća s četiri spavaće sobe, garažom i dvorištem. Lokacija nudi mirnije okruženje i dobru povezanost s gradom.",
    distances: {
      school: "1000",
      kindergarten: "800",
      park: "1500",
      groceryStore: "1300",
      transport: "900"
    },
    createdAt: "2026-10-24",
  },
  {
    id: 7,
    title: "Stan u centru grada",
    type: "Stan",
    location: "Donji grad",
    price: 310000,
    livingArea: 78,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stan u centru Zagreba s visokim stropovima i prostranim dnevnim boravkom. Svi važni gradski sadržaji nalaze se u blizini.",
    distances: {
      school: "1000",
      kindergarten: "800",
      park: "1500",
      groceryStore: "1300",
      transport: "900"
    },
    createdAt: "2026-10-23",
  },
  {
    id: 8,
    title: "Kuća s velikom okućnicom",
    type: "Kuća",
    location: "Stenjevec",
    price: 320000,
    livingArea: 130,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Obiteljska kuća s tri spavaće sobe, velikom okućnicom i natkrivenom terasom. Smještena u mirnom susjedstvu.",
    distances: {
      school: "300",
      kindergarten: "900",
      park: "1100",
      groceryStore: "200",
      transport: "900"
    },
    createdAt: "2026-10-22",
  },
  {
    id: 9,
    title: "Dvosobni stan u novijoj zgradi",
    type: "Stan",
    location: "Novi Zagreb - zapad",
    price: 225000,
    livingArea: 55,
    rooms: 1,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Uređen stan s jednom spavaćom sobom, otvorenim dnevnim prostorom i balkonom. Trgovački centar i javni prijevoz dostupni su u blizini.",
    distances: {
      school: "400",
      kindergarten: "700",
      park: "1400",
      groceryStore: "1200",
      transport: "800"
    },
    createdAt: "2026-10-21",
  },
  {
    id: 10,
    title: "Građevinsko zemljište uz Samobor",
    type: "Zemljište",
    location: "Podsused - Vrapče",
    price: 89000,
    landArea: 720,
    rooms: 0,
    image: "https://images.unsplash.com/photo-1500530855697-b586d89ba3ee?auto=format&fit=crop&w=1200&q=80",
    description:
      "Zemljište za buduću gradnju kuće u mirnom okruženju. Dobar izbor za one koji žele više privatnosti i prostora.",
    distances: {
      school: "100",
      kindergarten: "400",
      park: "700",
      groceryStore: "1300",
      transport: "300"
    },
    createdAt: "2026-10-20",
  },
  {
    id: 11,
    title: "Stan s pogledom na park",
    type: "Stan",
    location: "Maksimir",
    price: 289000,
    livingArea: 68,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stan s dvije spavaće sobe i pogledom na zelenilo. U blizini se nalaze park, škole i svakodnevni sadržaji.",
    distances: {
      school: "200",
      kindergarten: "500",
      park: "700",
      groceryStore: "1200",
      transport: "300"
    },
    createdAt: "2026-10-19",
  },
  {
    id: 12,
    title: "Obiteljska kuća u mirnoj ulici",
    type: "Kuća",
    location: "Stenjevec",
    price: 365000,
    livingArea: 155,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Prostrana kuća s tri spavaće sobe, garažom i uređenim dvorištem. Prikladna za obitelji koje žele mirnije okruženje.",
    distances: {
      school: "300",
      kindergarten: "600",
      park: "800",
      groceryStore: "1400",
      transport: "400"
    },
    createdAt: "2026-10-18",
  },
  {
    id: 13,
    title: "Stan u blizini Bundeka",
    type: "Stan",
    location: "Novi Zagreb - istok",
    price: 315000,
    livingArea: 75,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Moderan stan s dvije spavaće sobe u blizini Bundeka. Odlična povezanost s ostatkom grada i brojni sadržaji u susjedstvu.",
    distances: {
      school: "200",
      kindergarten: "500",
      park: "700",
      groceryStore: "1200",
      transport: "300"
    },
    createdAt: "2026-10-17",
  },
  {
    id: 14,
    title: "Manja kuća s terasom",
    type: "Kuća",
    location: "Brezovica",
    price: 245000,
    livingArea: 105,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?auto=format&fit=crop&w=1200&q=80",
    description:
      "Ugodna kuća s dvije spavaće sobe, terasom i manjim vrtom. Praktičan raspored prostora i mirna lokacija.",
    distances: {
      school: "200",
      kindergarten: "800",
      park: "500",
      groceryStore: "1200",
      transport: "500"
    },
    createdAt: "2026-10-16",
  },
  {
    id: 15,
    title: "Stan u novogradnji s lođom",
    type: "Stan",
    location: "Podsused - Vrapče",
    price: 239000,
    livingArea: 59,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Noviji stan s dvije spavaće sobe i lođom. U blizini su željeznička stanica, trgovine i sadržaji za svakodnevni život.",
    distances: {
      school: "500",
      kindergarten: "500",
      park: "500",
      groceryStore: "1200",
      transport: "1000"
    },
    createdAt: "2026-10-15",
  },
  {
    id: 16,
    title: "Građevinsko zemljište s pogledom",
    type: "Zemljište",
    location: "Stenjevec",
    price: 145000,
    landArea: 900,
    rooms: 0,
    image: "https://images.unsplash.com/photo-1472396961693-142e6e269027?auto=format&fit=crop&w=1200&q=80",
    description:
      "Prostrano zemljište u zelenom okruženju, namijenjeno potencijalnoj gradnji obiteljske kuće.",
    distances: {
      school: "500",
      kindergarten: "700",
      park: "300",
      groceryStore: "1000",
      transport: "100"
    },
    createdAt: "2026-10-14",
  },
  {
    id: 17,
    title: "Stan u blizini tramvaja",
    type: "Stan",
    location: "Trešnjevka - sjever",
    price: 215000,
    livingArea: 52,
    rooms: 1,
    image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=1200&q=80",
    description:
      "Funkcionalan stan s jednom spavaćom sobom, odvojenom kuhinjom i dnevnim boravkom. Tramvaj i trgovine nalaze se u blizini.",
    distances: {
      school: "500",
      kindergarten: "700",
      park: "300",
      groceryStore: "1000",
      transport: "100"
    },
    createdAt: "2026-10-13",
  },
  {
    id: 18,
    title: "Obiteljska kuća s garažom",
    type: "Kuća",
    location: "Podsused - Vrapče",
    price: 410000,
    livingArea: 180,
    rooms: 4,
    image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Veća kuća s četiri spavaće sobe, garažom i uređenim vrtom. Dovoljno prostora za obitelj i rad od kuće.",
    distances: {
      school: "200",
      kindergarten: "500",
      park: "300",
      groceryStore: "100",
      transport: "600"
    },
    createdAt: "2026-10-12",
  },
  {
    id: 19,
    title: "Stan s dvije spavaće sobe",
    type: "Stan",
    location: "Gornja Dubrava",
    price: 205000,
    livingArea: 61,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=1200&q=80",
    description:
      "Praktičan stan s dvije spavaće sobe i balkonom. U okolici se nalaze škole, trgovine i stanice javnog prijevoza.",
    distances: {
      school: "1700",
      kindergarten: "700",
      park: "300",
      groceryStore: "1300",
      transport: "1000"
    },
    createdAt: "2026-10-11",
  },
  {
    id: 20,
    title: "Zemljište za obiteljsku kuću",
    type: "Zemljište",
    location: "Brezovica",
    price: 110000,
    landArea: 800,
    rooms: 0,
    image: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?auto=format&fit=crop&w=1200&q=80",
    description:
      "Zemljište u naselju obiteljskih kuća, s potencijalom za izgradnju doma u blizini Zagreba.",
    distances: {
      school: "300",
      kindergarten: "500",
      park: "900",
      groceryStore: "200",
      transport: "900"
    },
    createdAt: "2026-10-10",
  },
  {
    id: 21,
    title: "Renoviran stan u centru",
    type: "Stan",
    location: "Gornji grad - Medveščak",
    price: 275000,
    livingArea: 66,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1200&q=80",
    description:
      "Renoviran stan s dvije spavaće sobe i očuvanim karakterom starije gradske zgrade. U blizini su kulturni sadržaji i restorani.",
    distances: {
      school: "300",
      kindergarten: "500",
      park: "900",
      groceryStore: "200",
      transport: "900"
    },
    createdAt: "2026-10-09",
  },
  {
    id: 22,
    title: "Kuća s velikom terasom",
    type: "Kuća",
    location: "Stenjevec",
    price: 335000,
    livingArea: 140,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kuća s tri spavaće sobe, prostranom terasom i vrtom. Pogodna za obiteljski život izvan gradske gužve.",
    distances: {
      school: "500",
      kindergarten: "500",
      park: "1000",
      groceryStore: "400",
      transport: "200"
    },
    createdAt: "2026-10-08",
  },
  {
    id: 23,
    title: "Moderan stan blizu parka",
    type: "Stan",
    location: "Novi Zagreb - istok",
    price: 198000,
    livingArea: 58,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stan s dvije spavaće sobe i funkcionalnim rasporedom. U neposrednoj blizini nalaze se parkovi, trgovine i škole.",
    distances: {
      school: "500",
      kindergarten: "700",
      park: "1000",
      groceryStore: "400",
      transport: "200"
    },
    createdAt: "2026-10-07",
  },
  {
    id: 24,
    title: "Kuća za renovaciju s okućnicom",
    type: "Kuća",
    location: "Stenjevec",
    price: 210000,
    livingArea: 120,
    rooms: 3,
    image: "https://images.unsplash.com/photo-1600047509358-9dc75507daeb?auto=format&fit=crop&w=1200&q=80",
    description:
      "Kuća s tri spavaće sobe i okućnicom koja pruža mogućnost uređenja prema vlastitim željama.",
    distances: {
      school: "600",
      kindergarten: "800",
      park: "1100",
      groceryStore: "400",
      transport: "500"
    },
    createdAt: "2026-10-06",
  },
  {
    id: 25,
    title: "Stan s velikim dnevnim boravkom",
    type: "Stan",
    location: "Trešnjevka - jug",
    price: 267000,
    livingArea: 70,
    rooms: 2,
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=80",
    description:
      "Stan s dvije spavaće sobe, prostranim dnevnim boravkom i balkonom. Dobro povezan kvart s brojnim trgovinama i zelenim površinama.",
    distances: {
      school: "600",
      kindergarten: "800",
      park: "1100",
      groceryStore: "400",
      transport: "500"
    },
    createdAt: "2026-10-05",
  },
];