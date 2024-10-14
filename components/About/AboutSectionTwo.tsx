import Image from "next/image";

const AboutSectionTwo = () => {
  return (
    <section className="py-16 md:py-20 lg:py-28">
      <div className="container">
        <div className="-mx-4 flex flex-wrap items-center">
          <div className="w-full px-4 lg:w-1/3">
            <div
              className="wow fadeInUp relative mx-auto mb-12 aspect-[25/24] max-w-[500px] text-center lg:m-0"
              data-wow-delay=".15s"
            >
              <Image
                src="/images/about/about-image-2.svg"
                alt="about image"
                fill
                className="drop-shadow-three dark:hidden dark:drop-shadow-none"
              />
              <Image
                src="/images/about/about-image-2-dark.svg"
                alt="about image"
                fill
                className="hidden drop-shadow-three dark:block dark:drop-shadow-none"
              />
            </div>
          </div>
          <div className="w-full px-4 lg:w-2/3">
            <div className="wow fadeInUp w-full" data-wow-delay=".2s">
              <div className="mb-9">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  İngilis Dili
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <span className="text-red-600">
                    Cambridge metodu ilə ingilis dili
                  </span>{" "}
                  dərsləri dil öyrənməni asan və effektiv edən beynəlxalq
                  səviyyədə tanınmış bir tədris metodudur. Bu metodun əsas
                  üstünlükləri aşağıdakılardır:
                  <br /> 1. Kommunikativ yanaşma: Dili gündəlik həyatda istifadə
                  etməyə imkan yaradan, praktik danışıq və dinləmə bacarıqlarını
                  inkişaf etdirən dərslərdir.
                  <br />
                  2. Səviyyələrə uyğun tədris: Dil biliklərinə uyğun olaraq
                  A1-dən C2-yə qədər səviyyələrdə dərslər keçir və hər səviyyədə
                  dil bacarıqları artırılır.
                  <br /> 3. İnteraktiv dərslər: Rollu oyunlar, qrup tapşırıqları
                  və dialoqlar tələbələrin danışıq qabiliyyətini inkişaf
                  etdirir.
                  <br /> 4. Cambridge imtahanlarına hazırlıq: KET, PET, FCE və
                  digər beynəlxalq sertifikatlar üçün xüsusi hazırlıq
                  proqramları təklif olunur.
                  <br /> 5. Texnologiya dəstəyi: Dərslər zamanı interaktiv
                  rəqəmsal platformalar və resurslar istifadə olunur. <br />
                  Cambridge metodu ilə dərslər, həm dili öyrənmək, həm də
                  beynəlxalq sertifikatlar almaq üçün ideal seçimdir.
                </p>
              </div>
              <div className="mb-9 w-full">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Alman Dili
                </h3>
                <p className="sm:text-md text-base font-medium leading-relaxed text-body-color sm:leading-relaxed">
                  <span className="text-red-600">
                    Alman dili tədrisi danışıq əsaslı yanaşma ilə
                  </span>{" "}
                  tələbələrin dili praktik olaraq mənimsəməsini təmin edir. Bu
                  metod dili öyrənməyi daha aktiv və maraqlı hala gətirir,
                  tələbələri dərhal ünsiyyət qurmağa həvəsləndirir.
                  <br /> 1. Danışıq əsaslı təlim: Tələbələr dilin qrammatik
                  qaydalarına fokuslanmaq əvəzinə, real həyatda rast gəlinən
                  situasiyalar üzərindən öyrənir. Dialoqlar və söhbətlər dərsin
                  əsasını təşkil edir. <br />
                  2. Kontekstual öyrənmə: Dili məhz kontekstdə öyrənərək
                  tələbələr qrammatikanı və yeni sözləri praktik şəkildə
                  mənimsəyirlər. Hər mövzu gündəlik həyatdan götürülən
                  nümunələrlə öyrədilir.
                  <br /> 3. Fərdi yanaşma: Hər tələbənin ehtiyaclarına uyğun
                  fərdi danışıq bacarıqları inkişaf etdirilir. Dərslər
                  tələbələrin zəif və güclü tərəflərini nəzərə alaraq
                  tənzimlənir.
                  <br /> 4. Simulyasiya və rollu oyunlar: Tələbələr müxtəlif
                  situasiyalarda danışıq simulyasiyaları edərək dili daha
                  dinamik və əyləncəli şəkildə öyrənirlər. Bu metod sayəsində
                  dil daha sürətlə mənimsənilir.
                  <br /> 5. Dinləmə və düzgün tələffüz: Dərslər zamanı səsli
                  materiallardan istifadə olunur ki, tələbələr alman dilinin
                  axıcılığını və tələffüzünü daha yaxşı qavraya bilsinlər.{" "}
                  <br />
                  Bu yanaşma, dili qrammatikadan daha çox gündəlik ünsiyyət
                  vasitəsi kimi öyrənmək istəyən tələbələr üçün ideal bir
                  seçimdir.
                </p>
              </div>
              <div className="mb-9 w-full">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Fransız Dili
                </h3>
                <p className="sm:text-md text-base font-medium leading-relaxed text-body-color sm:leading-relaxed">
                  <span className="text-red-600">
                    Fransız dili tədrisi danışıq əsaslı yanaşma ilə
                  </span>{" "}
                  dərslər dili gündəlik həyatda istifadə etməyi hədəfləyən bir
                  tədris üsuludur. Bu dərslər tələbələrin praktiki danışıq
                  bacarıqlarını inkişaf etdirməyə yönəldilib. <br /> 1. Danışıq
                  mərkəzli yanaşma: Dərslərdə əsas məqsəd tələbələrin fransız
                  dilində sərbəst danışmasını təmin etməkdir. Ünsiyyətə,
                  dialoqlara və real həyatda istifadə olunan ifadələrə diqqət
                  yetirilir. <br /> 2. Qrammatika kontekstdə öyrədilir:
                  Qrammatik qaydalar və struktur dərslərin əsas hissəsi deyil,
                  praktiki danışıq əsnasında təbii şəkildə öyrədilir. <br /> 3.
                  Səviyyə əsaslı dərslər: Danışıq əsaslı dərslər A1-dən C2-yə
                  qədər hər səviyyəyə uyğunlaşdırılır, tələbələrin dil bilikləri
                  inkişaf etdikcə danışıq mövzuları da çətinləşir. <br /> 4.
                  İnteraktiv metodlar: Rollu oyunlar, müzakirələr və qrup işləri
                  dərslərin əsasını təşkil edir, bu da tələbələrə danışıq
                  təcrübəsi qazandırır. <br /> 5. Dinləmə və tələffüz inkişafı:
                  Fransız dilinin təbii axıcılığına və düzgün tələffüzə xüsusi
                  diqqət yetirilir, bunun üçün səsli materiallar və danışıq
                  təlimləri istifadə olunur. <br /> Danışıq əsaslı fransız dili
                  dərsləri, dili effektiv öyrənmək və real həyatda ünsiyyət
                  qurmaq istəyənlər üçün ən uyğun tədris metodudur.
                </p>
              </div>
              <div className="mb-1">
                <h3 className="mb-4 text-xl font-bold text-black dark:text-white sm:text-2xl lg:text-xl xl:text-2xl">
                  Rus Dili
                </h3>
                <p className="text-base font-medium leading-relaxed text-body-color sm:text-lg sm:leading-relaxed">
                  <span className="text-red-600">
                    Red Kalinka metodu ilə rus dili
                  </span>{" "}
                  dərsləri sadə və sistemli yanaşması ilə rus dilini öyrənmək
                  istəyənlər üçün xüsusi olaraq hazırlanmış bir metoddur. Bu
                  metod tələbələrə dili asan və sürətli şəkildə mənimsəməyə
                  kömək edir.
                  <br />
                  1. Praktik yanaşma: Red Kalinka metodu dili real həyat
                  situasiyalarında istifadə etməyi öyrədir. Danışıq və dinləmə
                  bacarıqlarına xüsusi önəm verilir, tələbələr gündəlik həyatda
                  rahat ünsiyyət qurmağı öyrənirlər. <br /> 2. Səviyyələr üzrə
                  tədris: Dərslər A1-dən C2-yə qədər müxtəlif səviyyələr üzrə
                  təşkil olunur və hər səviyyədə şagirdlərin bacarıqları
                  mərhələli şəkildə inkişaf etdirilir.
                  <br /> 3. Addım-addım öyrənmə: Hər dərs bir-birinin üzərinə
                  qurulur, bu da tələbələrin yeni bilikləri rahatlıqla
                  mənimsəməsinə və daha möhkəm təməl qurmasına imkan verir.{" "}
                  <br /> 4. Audio və vizual materiallar: Dərslərdə səsli
                  materiallar və videolar istifadə olunur, bu da dil öyrənmə
                  prosesini daha maraqlı və interaktiv edir. <br /> 5.
                  İmtahanlara hazırlıq: Red Kalinka metodu, rus dili
                  sertifikatlarına (TRKI) hazırlaşan tələbələr üçün xüsusi
                  proqramlar təklif edir. <br /> Red Kalinka metodu ilə dərslər,
                  rus dilini öyrənmək üçün ideal seçimdir, çünki praktiki
                  yanaşma və geniş resurslar sayəsində tələbələr dili sürətli və
                  effektiv şəkildə mənimsəyirlər.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSectionTwo;
