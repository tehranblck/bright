interface Testimonial {
  id: number;
  name: string;
  content: string;
  image: string;
  star: number;
}

export const testimonialData: Testimonial[] = [
  {
    id: 1,
    name: "Kenan Türkiyeemlak",
    content:
      "Başta çok emin değildim ama sonuçlar inanılmaz oldu! Video çekimleri sayesinde sosyal medya hesaplarımız canlandı, etkileşimler arttı. Ekibe tekrar teşekkür ederim.",
    image: "/images/testimonials/auth-10.png",
    star: 5,
  },
  {
    id: 2,
    name: "Kenan Türkiyeemlak",
    content:
      "Produck ekibi harika bir iş çıkardı! Sosyal medya hesaplarımızdaki etkileşimin ciddi oranı arttı. İhtiyacımız olan her şeyi sağladılar. Tavsiye ederim!",
    image: "/images/testimonials/auth-11.png",
    star: 5,
  },
  {
    id: 3,
    name: "Kenan Türkiyeemlak",
    content:
      "Ürünlerimizin tanıtım videoları ve fotoğrafları o kadar profesyonel oldu ki, sosyal medya hesaplarımızda iletişim adeta patladı. Tüm süreci sürekli olarak bilgilendirdiler, ihtiyaçlarımızı hızlı bir şekilde değiştirdiler ve her aşamada çözüm odaklı çalıştılar. Eğer içerik üretimi konusunda güvenilir ve yaratıcı bir ekip arıyorsanız Produck doğru bir seçim.",
    image: "/images/testimonials/auth-12.png",
    star: 5,
  },
  {
    id: 4,
    name: "Kenan Türkiyeemlak",
    content:
      "Projelendirmenin her ayrıntıyı gözden geçirip ele almaları, her aşamada yanımızda bulunmaları işimizi çok kolaylaştırdı. Sosyal medya performansımızda gözle görülür bir artış sağladık, müşterilerden çok olumlu geri dönüşler aldık. Kısacası, kaliteli içerik arayan herkese şiddetle tavsiye ederim.",
    image: "/images/testimonials/auth-13.png",
    star: 5,
  },
  {
    id: 5,
    name: "Kenan Türkiyeemlak",
    content:
      "Kişisel markam için video çekimlerine ihtiyacım vardı ama karşı taraf beni doğru anlar mı, istediğim sonuç çıkar mı diye tereddütteydim. Neyse ki, Kenan Bey ile tanıştık ve tüm korkularım ortadan kalktı. Kendi işi gibi ilgilendiği ve efor sarfettiği için çok teşekkür ederim.",
    image: "/images/testimonials/auth-14.png",
    star: 5,
  },
];

export default testimonialData;
