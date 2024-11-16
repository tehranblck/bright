// featuresData.ts
const featuresData = [
  {
    id: 1,
    title: 'Sosyal Medya Paketi',
    discountPrice: "15000",
    originalPrice: "12000",
    discountRate: "20%",
    imageUrl: "/feed.png",
    className: 'w-full absolute -z-10 h-full !bottom-0 object-cover',
    buttonText: 'text-red-500 font-semibold hover:underline'
  },
  {
    id: 2,
    title: 'Reels  Çekimi',
    discountPrice: "3000",
    originalPrice: "4000",
    discountRate: "25%",
    imageUrl: "/instagram.png",
    className: ' absolute  bottom-0  h-full object-cover',
    buttonText: 'text-red-500 font-semibold hover:underline'

  },
  {
    id: 3,
    title: 'Reklam  Yönetimi',
    discountPrice: "6400",
    originalPrice: "8000",
    discountRate: "20%",
    imageUrl: "/reklam.png",
    className: "absolute !bottom-0 top-2",
    buttonText: 'text-red-500 font-semibold hover:underline'

  },
  {
    id: 4,
    title: 'Reklam/Klip Çekimi',
    // discountPrice: "2000",
    // originalPrice: "3000",
    // discountRate: "33%",
    imageUrl: "/film.png",
    className: " absolute -z-10 h-full !bottom-0 object-cover",
    buttonText: 'text-red-500 text-2xl font-semibold hover:underline'

  },
];

export default featuresData;
