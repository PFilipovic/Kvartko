
export type Neighborhood = {
  id: number;
  name: string;
  slug: string;
  description: string;
  image: string;
  imageCredit: string;
  imageSourceUrl: string;
};

export const neighborhoods: Neighborhood[] = [
  {
    id: 1,
    name: "Donji grad",
    slug: "donji-grad",
    description:
      "Središnja gradska četvrt Zagreba, poznata po povijesnoj arhitekturi, parkovima, trgovima i bogatoj kulturnoj ponudi.",
    image: "/neighborhood-images/donji-grad.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039556",
  },
  {
    id: 2,
    name: "Gornji grad - Medveščak",
    slug: "gornji-grad-medvescak",
    description:
      "Četvrt koja obuhvaća povijesnu jezgru Gornjeg grada, Medveščak i sjeverne dijelove užeg gradskog područja.",
    image: "/neighborhood-images/gornji-grad.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039557",
  },
  {
    id: 3,
    name: "Trnje",
    slug: "trnje",
    description:
      "Gradska četvrt južno od središta Zagreba, s kombinacijom stambenih naselja, poslovnih zona i važnih prometnih pravaca.",
    image: "/neighborhood-images/trnje.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039572",
  },
  {
    id: 4,
    name: "Maksimir",
    slug: "maksimir",
    description:
      "Zelena gradska četvrt poznata po parku Maksimir, zoološkom vrtu i brojnim stambenim naseljima.",
    image: "/neighborhood-images/maksimir.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039558",
  },
  {
    id: 5,
    name: "Peščenica - Žitnjak",
    slug: "pescenica-zitnjak",
    description:
      "Prostrana istočna četvrt koja obuhvaća stambena naselja, industrijske zone i područja s pretežno gospodarskom namjenom.",
    image: "/neighborhood-images/pescenica.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039561",
  },
  {
    id: 6,
    name: "Novi Zagreb - istok",
    slug: "novi-zagreb-istok",
    description:
      "Istočni dio Novog Zagreba s modernim stambenim naseljima, trgovačkim centrima i dobrim prometnim povezivanjem.",
    image: "/neighborhood-images/novi-zagreb-istok.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039559",
  },
  {
    id: 7,
    name: "Novi Zagreb - zapad",
    slug: "novi-zagreb-zapad",
    description:
      "Zapadni dio Novog Zagreba s modernim stambenim naseljima, trgovačkim centrima i dobrim prometnim povezivanjem.",
    image: "/neighborhood-images/novi-zagreb-zapad.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039562",
  },
  {
    id: 8,
    name: "Trešnjevka - sjever",
    slug: "tresnjevka-sjever",
    description:
      "Gusto naseljena gradska četvrt s prepoznatljivim gradskim karakterom, lokalnim trgovinama, tržnicama i dobrom povezanošću.",
    image: "/neighborhood-images/tresnjevka-sjever.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039570",
  },
  {
    id: 9,
    name: "Trešnjevka - jug",
    slug: "tresnjevka-jug",
    description:
      "Južni dio Trešnjevke koji obuhvaća stambena naselja, sportske sadržaje i brojne zelene površine.",
    image: "/neighborhood-images/tresnjevka-jug.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039569",
  },
  {
    id: 10,
    name: "Črnomerec",
    slug: "crnomerec",
    description:
      "Zapadna gradska četvrt s raznolikim stambenim područjima, zelenim obroncima Medvednice i važnim prometnim vezama.",
    image: "/neighborhood-images/crnomerec.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039554",
  },
  {
    id: 11,
    name: "Gornja Dubrava",
    slug: "gornja-dubrava",
    description:
      "Prostrana istočna četvrt koja obuhvaća stambena naselja, obiteljske kuće i dijelove sjevernog podsljemenskog područja.",
    image: "/neighborhood-images/gornja-dubrava.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039555",
  },
  {
    id: 12,
    name: "Donja Dubrava",
    slug: "donja-dubrava",
    description:
      "Istočna gradska četvrt pretežno stambenog karaktera, s brojnim obiteljskim kućama, naseljima i lokalnim sadržajima.",
    image: "/neighborhood-images/donja-dubrava.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039553",
  },
  {
    id: 13,
    name: "Stenjevec",
    slug: "stenjevec",
    description:
      "Zapadna gradska četvrt s kombinacijom urbanih stambenih naselja, obiteljskih kuća i mirnijih rubnih područja.",
    image: "/neighborhood-images/stenjevec.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039568",
  },
  {
    id: 14,
    name: "Podsused - Vrapče",
    slug: "podsused-vrapce",
    description:
      "Zapadna četvrt uz obronke Medvednice, poznata po raznolikom krajoliku, obiteljskim naseljima i blizini prirode.",
    image: "/neighborhood-images/podsused-vrapce.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039565",
  },
  {
    id: 15,
    name: "Podsljeme",
    slug: "podsljeme",
    description:
      "Sjeverna gradska četvrt smještena uz Medvednicu, s mnogo zelenila, obiteljskih kuća i mirnijim načinom života.",
    image: "/neighborhood-images/podsljeme.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039564",
  },
  {
    id: 16,
    name: "Sesvete",
    slug: "sesvete",
    description:
      "Velika istočna gradska četvrt koja obuhvaća urbano središte Sesveta i brojna okolna naselja.",
    image: "/neighborhood-images/sesvete.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43039566",
  },
  {
    id: 17,
    name: "Brezovica",
    slug: "brezovica",
    description:
      "Južna gradska četvrt ruralnijeg karaktera, s brojnim manjim naseljima, obiteljskim kućama i velikim zelenim površinama.",
    image: "/neighborhood-images/brezovica.webp",
    imageCredit: "Autor: Tromber – Vlastito djelo postavljača, CC BY-SA 4.0",
    imageSourceUrl: "https://commons.wikimedia.org/w/index.php?curid=43036338",
  },
];
