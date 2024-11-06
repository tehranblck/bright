import { Feature } from "@/types/feature";
import { FaVideo, FaEdit, FaShareAlt, FaPaintBrush, FaBullhorn, FaFileAlt, FaPenFancy } from "react-icons/fa";

const featuresData: Feature[] = [
  {
    id: 1,
    icon: <FaVideo size={40} className="text-primary" />, // Video Prodüksiyon simgesi
    title: "Video Prodüksiyon",
    paragraph: "Çekimden mekana, ekipten iş teslimine tüm süreci biz yönetiyoruz.",
  },
  {
    id: 2,
    icon: <FaEdit size={40} className="text-primary" />, // Post Prodüksiyon simgesi
    title: "Post Prodüksiyon",
    paragraph: "İyi içerik iyi kurgu ister, iyi kurgu iyi ses efektleri ve müzik ister. Hepsi bir arada.",
  },
  {
    id: 3,
    icon: <FaShareAlt size={40} className="text-primary" />, // Sosyal Medya simgesi
    title: "Sosyal Medya",
    paragraph: "Müşterilerinize vermek istediğiniz mesaj, sayfanıza girdikleri anda hedefine ulaşacak.",
  },
  {
    id: 4,
    icon: <FaPaintBrush size={40} className="text-primary" />, // Grafik Tasarım simgesi
    title: "Grafik Tasarım",
    paragraph: "Profesyonel grafik tasarım uzmanlarımız ürün ve hizmetlerinizi görsel olarak en cazip haline ulaştırıyor.",
  },
  {
    id: 5,
    icon: <FaBullhorn size={40} className="text-primary" />, // Reklam simgesi
    title: "Reklam",
    paragraph: "Doğru reklam kreatifleri ve hedef kitle belirlemesi ile reklam bütçenizden maksimum verim alın!",
  },
  {
    id: 6,
    icon: <FaPenFancy size={40} className='text-primary' />, // Pre-prodüksiyon simgesi
    title: "Metin Yazarlığı",
    paragraph: "İçerikleriniz için ihtiyacınız olan en önemli başlangıç noktası, projelendirme ve senaryolaştırma.",
  },
];

export default featuresData;
