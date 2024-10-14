import React from "react";
import Image from "next/image";

interface LanguageSection {
  title: string;
  subtitle: string;
  content: string[];
  imageSrc: string;
  imageAlt: string;
  reverse?: boolean;
}

const AboutSectionTwo: React.FC = () => {
  // Dil bilgilerini içeren dizi
  const languageSections: LanguageSection[] = [
    {
      title: "İngilis Dili",
      subtitle: "Cambridge metodu ilə ingilis dili",
      content: [
        "dərsləri dil öyrənməni asan və effektiv edən beynəlxalq səviyyədə tanınmış bir tədris metodudur. Bu metodun əsas üstünlükləri aşağıdakılardır:",
        "1. Kommunikativ yanaşma: Dili gündəlik həyatda istifadə etməyə imkan yaradan, praktik danışıq və dinləmə bacarıqlarını inkişaf etdirən dərslərdir.",
        "2. Səviyyələrə uyğun tədris: Dil biliklərinə uyğun olaraq A1-dən C2-yə qədər səviyyələrdə dərslər keçir və hər səviyyədə dil bacarıqları artırılır.",
        "3. İnteraktiv dərslər: Rollu oyunlar, qrup tapşırıqları və dialoqlar tələbələrin danışıq qabiliyyətini inkişaf etdirir.",
        "4. Cambridge imtahanlarına hazırlıq: KET, PET, FCE və digər beynəlxalq sertifikatlar üçün xüsusi hazırlıq proqramları təklif olunur.",
        "5. Texnologiya dəstəyi: Dərslər zamanı interaktiv rəqəmsal platformalar və resurslar istifadə olunur.",
        "Cambridge metodu ilə dərslər, həm dili öyrənmək, həm də beynəlxalq sertifikatlar almaq üçün ideal seçimdir.",
      ],
      imageSrc: "/images/about/ingilisce.jpg",
      imageAlt: "İngilis Dili",
      reverse: false,
    },
    {
      title: "Alman Dili",
      subtitle: "Alman dili tədrisi danışıq əsaslı yanaşma ilə",
      content: [
        "tələbələrin dili praktik olaraq mənimsəməsini təmin edir. Bu metod dili öyrənməyi daha aktiv və maraqlı hala gətirir, tələbələri dərhal ünsiyyət qurmağa həvəsləndirir.",
        "1. Danışıq əsaslı təlim: Tələbələr dilin qrammatik qaydalarına fokuslanmaq əvəzinə, real həyatda rast gəlinən situasiyalar üzərindən öyrənir. Dialoqlar və söhbətlər dərsin əsasını təşkil edir.",
        "2. Kontekstual öyrənmə: Dili məhz kontekstdə öyrənərək tələbələr qrammatikanı və yeni sözləri praktik şəkildə mənimsəyirlər. Hər mövzu gündəlik həyatdan götürülən nümunələrlə öyrədilir.",
        "3. Fərdi yanaşma: Hər tələbənin ehtiyaclarına uyğun fərdi danışıq bacarıqları inkişaf etdirilir. Dərslər tələbələrin zəif və güclü tərəflərini nəzərə alaraq tənzimlənir.",
        "4. Simulyasiya və rollu oyunlar: Tələbələr müxtəlif situasiyalarda danışıq simulyasiyaları edərək dili daha dinamik və əyləncəli şəkildə öyrənirlər. Bu metod sayəsində dil daha sürətlə mənimsənilir.",
        "5. Dinləmə və düzgün tələffüz: Dərslər zamanı səsli materiallardan istifadə olunur ki, tələbələr alman dilinin axıcılığını və tələffüzünü daha yaxşı qavraya bilsinlər.",
        "Bu yanaşma, dili qrammatikadan daha çox gündəlik ünsiyyət vasitəsi kimi öyrənmək istəyən tələbələr üçün ideal bir seçimdir.",
      ],
      imageSrc: "/images/about/almanca.png",
      imageAlt: "Alman Dili",
      reverse: true,
    },
    {
      title: "Fransız Dili",
      subtitle: "Fransız dili tədrisi danışıq əsaslı yanaşma ilə",
      content: [
        "dərslər dili gündəlik həyatda istifadə etməyi hədəfləyən bir tədris üsuludur. Bu dərslər tələbələrin praktiki danışıq bacarıqlarını inkişaf etdirməyə yönəldilib.",
        "1. Danışıq mərkəzli yanaşma: Dərslərdə əsas məqsəd tələbələrin fransız dilində sərbəst danışmasını təmin etməkdir. Ünsiyyətə, dialoqlara və real həyatda istifadə olunan ifadələrə diqqət yetirilir.",
        "2. Qrammatika kontekstdə öyrədilir: Qrammatik qaydalar və struktur dərslərin əsas hissəsi deyil, praktiki danışıq əsnasında təbii şəkildə öyrədilir.",
        "3. Səviyyə əsaslı dərslər: Danışıq əsaslı dərslər A1-dən C2-yə qədər hər səviyyəyə uyğunlaşdırılır, tələbələrin dil bilikləri inkişaf etdikcə danışıq mövzuları da çətinləşir.",
        "4. İnteraktiv metodlar: Rollu oyunlar, müzakirələr və qrup işləri dərslərin əsasını təşkil edir, bu da tələbələrə danışıq təcrübəsi qazandırır.",
        "5. Dinləmə və tələffüz inkişafı: Fransız dilinin təbii axıcılığına və düzgün tələffüzə xüsusi diqqət yetirilir, bunun üçün səsli materiallar və danışıq təlimləri istifadə olunur.",
        "Danışıq əsaslı fransız dili dərsləri, dili effektiv öyrənmək və real həyatda ünsiyyət qurmaq istəyənlər üçün ən uyğun tədris metodudur.",
      ],
      imageSrc: "/images/about/fransizca.jpg",
      imageAlt: "Fransız Dili",
      reverse: false,
    },
    {
      title: "Rus Dili",
      subtitle: "Red Kalinka metodu ilə rus dili",
      content: [
        "dərsləri sadə və sistemli yanaşması ilə rus dilini öyrənmək istəyənlər üçün xüsusi olaraq hazırlanmış bir metoddur. Bu metod tələbələrə dili asan və sürətli şəkildə mənimsəməyə kömək edir.",
        "1. Praktik yanaşma: Red Kalinka metodu dili real həyat situasiyalarında istifadə etməyi öyrədir. Danışıq və dinləmə bacarıqlarına xüsusi önəm verilir, tələbələr gündəlik həyatda rahat ünsiyyət qurmağı öyrənirlər.",
        "2. Səviyyələr üzrə tədris: Dərslər A1-dən C2-yə qədər müxtəlif səviyyələr üzrə təşkil olunur və hər səviyyədə şagirdlərin bacarıqları mərhələli şəkildə inkişaf etdirilir.",
        "3. Addım-addım öyrənmə: Hər dərs bir-birinin üzərinə qurulur, bu da tələbələrin yeni bilikləri rahatlıqla mənimsəməsinə və daha möhkəm təməl qurmasına imkan verir.",
        "4. Audio və vizual materiallar: Dərslərdə səsli materiallar və videolar istifadə olunur, bu da dil öyrənmə prosesini daha maraqlı və interaktiv edir.",
        "5. İmtahanlara hazırlıq: Red Kalinka metodu, rus dili sertifikatlarına (TRKI) hazırlaşan tələbələr üçün xüsusi proqramlar təklif edir.",
        "Red Kalinka metodu ilə dərslər, rus dilini öyrənmək üçün ideal seçimdir, çünki praktiki yanaşma və geniş resurslar sayəsində tələbələr dili sürətli və effektiv şəkildə mənimsəyirlər.",
      ],
      imageSrc: "/images/about/rusca.jpg",
      imageAlt: "Rus Dili",
      reverse: true,
    },
  ];

  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-full">
            <div className="wow fadeInUp w-full" data-wow-delay=".2s">
              {languageSections.map((section, index) => (
                <div
                  key={index}
                  className={`mb-9 flex flex-col items-center justify-center lg:flex-row lg:items-center ${
                    section.reverse ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div
                    className={`${
                      section.reverse ? "lg:w-5/6 lg:pl-4" : "lg:w-5/6 lg:pr-4"
                    }`}
                  >
                    <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                      {section.title}
                    </h3>
                    <div className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                      <p>
                        <span className="text-red-600">{section.subtitle}</span>
                      </p>
                      {section.content.map((paragraph, idx) => (
                        <p key={idx} className="mt-4">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  </div>
                  <div
                    className={`relative h-64 w-64 flex-shrink-0 ${
                      section.reverse ? "lg:mr-4" : "lg:ml-4"
                    }`}
                  >
                    <Image
                      src={section.imageSrc}
                      alt={section.imageAlt}
                      fill
                      className="rounded object-cover"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
