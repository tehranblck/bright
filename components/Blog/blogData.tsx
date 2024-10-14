import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Yeni Bir Dil Öyrənməyin 5 Faydası və Həyatınıza Təsirləri",
    paragraph:
      "Yeni bir dil öyrənmək həyatınızda müxtəlif müsbət təsirlər yarada bilər. Öyrəndiyiniz dil nə olursa olsun, dil biliklərinin artırılması sizi həm şəxsi, həm də peşəkar həyatda irəli aparacaq.",
    content: [
      {
        type: "paragraph",
        text: "Dil öyrənmək, hər kəsin həyatında böyük təsir yarada biləcək güclü bir bacarıqdır. Yeni bir dil öyrənməyin faydaları sadəcə iş imkanları ilə məhdudlaşmır, eyni zamanda beynin inkişafı, mədəniyyətləri daha yaxından tanıma, sosial həyat və fərdi inkişafa da təsir edir.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Beyin Sağlamlığını Gücləndirir",
      },
      {
        type: "paragraph",
        text: "Bir neçə dili eyni anda öyrənmək beyini daim aktiv saxlayır və yaddaşı gücləndirir. Beyin üçün yeni sözlər öyrənmək, fərqli dillərdə danışmaq və düşünmək əla bir məşqdir.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Yeni İş İmkanları Yaratmaq",
      },
      {
        type: "paragraph",
        text: "Dil bilikləri çoxdilli bir iş mühitində üstünlük verir. Bu, sizi rəqiblərdən bir addım irəli aparır və karyeranızda yeni üfüqlər açır.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Özünə İnamı Artırmaq",
      },
      {
        type: "paragraph",
        text: "Yeni bir dili öyrəndikcə, özünüzə daha çox güvənirsiniz. Yeni insanlarla ünsiyyət qurmaq, səyahət etmək və fərqli mədəniyyətləri başa düşmək daha asanlaşır.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Fərqli Mədəniyyətləri Tanımaq",
      },
      {
        type: "paragraph",
        text: "Dil öyrənmək, həmin dilin mənsublarının mədəniyyətinə də yaxınlaşmaq deməkdir. Kitablar, filmlər və musiqilər vasitəsilə o mədəniyyəti daha yaxşı tanımaq mümkündür.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. Zehni Sərhədləri Genişləndirmək",
      },
      {
        type: "paragraph",
        text: "Yeni dillər öyrənmək beyninizi elastik saxlayır və müxtəlif problemlərin öhdəsindən daha yaxşı gəlməyə kömək edir.",
      },
    ],
    image: "/images/blog/learn_lang.jpg",
    author: {
      name: "Elvira Ocaqquliyeva",
      image: "/images/blog/author-01.png",
      designation: "Rus dili təlimçisi",
    },
    tags: ["Xarici dil", "Dil öyrənmə", "Peşəkar inkişaf"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Effektiv Dil Öyrənmə Metodları: 7 Təcrübə ilə Təhsilinizə Dəstək",
    paragraph:
      "Dil öyrənmək hər kəs üçün fərqli təcrübədir və hər kəsin öyrənmə tərzi müxtəlifdir. Lakin, dil öyrənmə prosesini asanlaşdıran bir neçə effektiv üsul var.",
    content: [
      {
        type: "paragraph",
        text: "Dil öyrənməyin müxtəlif yolları var və hər bir insanın öyrənmə tərzi fərqlidir. Ancaq bəzi effektiv üsullar bu prosesi asanlaşdırır və daha məhsuldar edir. Bu yazıda öyrənmə prosesinizə dəstək olacaq 7 metodu təqdim edirik.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Müntəzəm Təkrarlar ilə yaddaşı gücləndirin",
      },
      {
        type: "paragraph",
        text: "Hər gün öyrəndiyiniz sözləri təkrar etmək, yaddaşınızı gücləndirir. Dil tətbiqləri və kartlar vasitəsilə öyrəndiyiniz sözləri təkrarlayın.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Mobil Tətbiqlərdən Yararlanın",
      },
      {
        type: "paragraph",
        text: "Duolingo, Memrise kimi tətbiqlər vasitəsilə öyrənmə prosesini əyləncəli hala gətirin. Bu tətbiqlər hər zaman əlinizin altında ola bilər.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Filmlər və Musiqilərlə Dili Gündəlik Həyatınıza Daxil Edin",
      },
      {
        type: "paragraph",
        text: "Sevdiyiniz filmləri və mahnıları yeni dildə izləyərək öyrənmə prosesini sürətləndirə bilərsiniz. Bununla yanaşı, dili gündəlik həyatda istifadə etmə şansını da artırırsınız.",
      },
      {
        type: "heading",
        level: 3,
        text: "4. Dostlarla və ya Dil Partnyorları ilə Öyrənmə",
      },
      {
        type: "paragraph",
        text: "Birlikdə öyrənmək motivasiyanı artırır. Təcrübənizi zənginləşdirmək üçün dil mübadiləsi partnyorları ilə öyrənmə əladır.",
      },
      {
        type: "heading",
        level: 3,
        text: "5. Danışığa Fokuslanın",
      },
      {
        type: "paragraph",
        text: "Hədəf dilinizi daha yaxşı danışa bilmək üçün mümkün qədər çox praktik edin. Real həyatda istifadə etdikcə dil qabiliyyətiniz də artacaq.",
      },
      {
        type: "heading",
        level: 3,
        text: "6. Kiçik Hədəflərlə Başlayın",
      },
      {
        type: "paragraph",
        text: "Hər gün üçün kiçik və konkret hədəflər qoymaq dil öyrənmənin asanlaşdırılmasına kömək edir. Məsələn, hər gün 5 yeni söz öyrənmək.",
      },
      {
        type: "heading",
        level: 3,
        text: "7. Tədris Materiallarından Yararlanın",
      },
      {
        type: "paragraph",
        text: "Yüksək keyfiyyətli tədris materialları seçərək dil öyrənmə prosesini daha effektiv edə bilərsiniz. Kitablar, iş vərəqləri və onlayn dərsliklər bu işdə faydalıdır.",
      },
    ],
    image: "/images/blog/blog-02.jpg",
    author: {
      name: "Aysel Həsənova",
      image: "/images/blog/author-04.png",
      designation: "Dil Mütəxəssisi",
    },
    tags: ["Təhsil", "Öyrənmə metodları", "Dil öyrənmə"],
    publishDate: "2025",
  },
  {
    id: 3,
    title: "React ilə Web Tətbiqi Yaratma: Addım-addım Bələdçi",
    paragraph:
      "Bu bələdçi ilə React kitabxanası istifadə edərək öz web tətbiqinizi yaratmağı öyrənəcəksiniz.",
    content: [
      {
        type: "paragraph",
        text: "React, Facebook tərəfindən yaradılmış, müasir web tətbiqləri üçün populyar bir JavaScript kitabxanasıdır. Bu bələdçi ilə React istifadə edərək öz web tətbiqinizi necə yaratmağı öyrənəcəksiniz.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Layihənin Yaradılması",
      },
      {
        type: "paragraph",
        text: "React layihəsi yaratmaq üçün create-react-app alətindən istifadə edə bilərsiniz. Komanda xəttında aşağıdakı əmri icra edin:",
      },
      {
        type: "code",
        text: "npx create-react-app my-app",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Tətbiq Strukturu",
      },
      {
        type: "paragraph",
        text: "Yaradılan layihə içində src qovluğunda, komponentlərinizi təşkil edə bilərsiniz. Hər bir komponent üçün ayrıca bir fayl yaradın.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. İlk Komponentinizi Yaradın",
      },
      {
        type: "paragraph",
        text: "İlk komponentinizi yaratmaq üçün src/App.js faylını açın və aşağıdakı kodu əlavə edin:",
      },
      {
        type: "code",
        text: "function App() { return <h1>Hello, World!</h1>; }",
      },
    ],
    image: "/images/blog/react.webp",
    author: {
      name: "Səid Müstəqil",
      image: "/images/blog/author-02.png",
      designation: "Front-End Developer",
    },
    tags: ["React", "Web Tətbiqi", "Front-End"],
    publishDate: "2025",
  },
  {
    id: 4,
    title: "JavaScript və DOM: İnteraktiv Web Tətbiqləri Yaratma",
    paragraph:
      "JavaScript, web səhifələrinin dinamik və interaktiv olmasına imkan tanıyır. Bu yazıda DOM ilə necə işləyəcəyinizi öyrənəcəksiniz.",
    content: [
      {
        type: "paragraph",
        text: "JavaScript, web səhifələrinin dinamik və interaktiv olmasına imkan tanıyır. Document Object Model (DOM), HTML və XML sənədlərinin strukturunu təsvir edir.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. DOM Nedir?",
      },
      {
        type: "paragraph",
        text: "DOM, web səhifələrinin strukturunu proqramlaşdırma vasitəsilə idarə etməyə imkan tanıyır. JavaScript ilə DOM elementlərini seçə, əlavə edə və ya silə bilərsiniz.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. DOM İlə İşləmək",
      },
      {
        type: "paragraph",
        text: "DOM elementlərinə erişmek üçün document.getElementById və ya document.querySelector metodlarından istifadə edə bilərsiniz.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Elementləri Manipulyasiya Etmək",
      },
      {
        type: "paragraph",
        text: "DOM elementlərini manipulyasiya etmək üçün, məsələn, aşağıdakı kimi bir koddan istifadə edə bilərsiniz:",
      },
      {
        type: "code",
        text: "document.getElementById('myElement').innerHTML = 'Yeni Məzmun';",
      },
    ],
    image: "/images/blog/js_dom.jpg",
    author: {
      name: "Nigar Həsənova",
      image: "/images/blog/author-03.png",
      designation: "JavaScript Mütəxəssisi",
    },
    tags: ["JavaScript", "DOM", "Web Tətbiqi"],
    publishDate: "2025",
  },
  {
    id: 5,
    title: "CSS Flexbox: Mükəmməl Layoutlar Yaratmağın Yolu",
    paragraph:
      "Flexbox, CSS ilə daha müasir və çevik layoutlar yaratmaq üçün ideal bir üsuldur. Bu yazıda Flexbox-un əsaslarını öyrənəcəksiniz.",
    content: [
      {
        type: "paragraph",
        text: "Flexbox, CSS ilə daha müasir və çevik layoutlar yaratmaq üçün ideal bir üsuldur. Flexbox, elementlərinizi bir sətirdə və ya sütunda düzəltmək üçün istifadə edilir.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Flexbox Nedir?",
      },
      {
        type: "paragraph",
        text: "Flexbox, container (konteyner) içindeki elementlərin yerleşimini daha asanlaşdırmaq üçün bir metodudur.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Flexbox-u Necə İstifadə Edə Bilərsiniz?",
      },
      {
        type: "paragraph",
        text: "Konteynerinizə display: flex; tərifini əlavə edərək Flexbox-u aktivləşdirə bilərsiniz.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Flexbox İle Layout Yaratmaq",
      },
      {
        type: "paragraph",
        text: "Flexbox ilə layout yaratmaq üçün aşağıdakı kodu istifadə edə bilərsiniz:",
      },
      {
        type: "code",
        text: "const container = document.getElementById('container'); container.style.display = 'flex';",
      },
    ],
    image: "/images/blog/css_flexbox.avif",
    author: {
      name: "Rüfət Əliyev",
      image: "/images/blog/author-05.png",
      designation: "UI/UX Designer",
    },
    tags: ["CSS", "Flexbox", "Web Tətbiqi"],
    publishDate: "2025",
  },
  {
    id: 6,
    title: "TypeScript ilə Tətbiq İnkişafı: Nəyə Göre İstifadə Etməlisiniz?",
    paragraph:
      "TypeScript, JavaScript-in genişlənmiş bir versiyasıdır. Bu yazıda TypeScript-in nə olduğunu və niyə istifadə etməyinizi öyrənəcəksiniz.",
    content: [
      {
        type: "paragraph",
        text: "TypeScript, JavaScript-in üstündə tip təhlükəsizliyi təmin edən bir dildir. Bu, daha etibarlı və səhv az olan kod yazmağa imkan tanıyır.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Nəyə Göre TypeScript?",
      },
      {
        type: "paragraph",
        text: "TypeScript, JavaScript kodunu daha strukturlaşdırılmış və oxunaqlı etməyə kömək edir. Tip sisteminin olması, inkişaf müddətində səhvlərin aşkarlanmasına kömək edir.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. TypeScript Quraşdırılması",
      },
      {
        type: "paragraph",
        text: "TypeScript-i layihənizə əlavə etmək üçün aşağıdakı əmri istifadə edin:",
      },
      {
        type: "code",
        text: "npm install --save-dev typescript",
      },
    ],
    image: "/images/blog/ts.jpg",
    author: {
      name: "Faiq Kərimov",
      image: "/images/blog/author-06.png",
      designation: "Software Engineer",
    },
    tags: ["TypeScript", "JavaScript", "Web Tətbiqi"],
    publishDate: "2025",
  },
  {
    id: 7,
    title: "Git və Versiya İdarəsi: Tətbiq İnkişafında Əhəmiyyəti",
    paragraph:
      "Git, layihələrinizi idarə etməyə kömək edən bir versiya idarəetmə sistemidir. Bu yazıda Git-in əsaslarını öyrənəcəksiniz.",
    content: [
      {
        type: "paragraph",
        text: "Git, kodunuzun tarixini izləməyə və versiyalarını idarə etməyə imkan tanıyan bir alətdir. Bu, bir komanda ilə işləyərkən mükəmməl bir vasitədir.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Git-in Quraşdırılması",
      },
      {
        type: "paragraph",
        text: "Git-i sisteminizdə quraşdırmaq üçün aşağıdakı linkə baxın: ",
      },
      {
        type: "link",
        text: "Git Rəsmi Saytı",
        url: "https://git-scm.com/",
      },
      {
        type: "heading",
        level: 3,
        text: "2. İlk Repo Yaradılması",
      },
      {
        type: "paragraph",
        text: "Yeni bir Git reposu yaratmaq üçün aşağıdakı əmri istifadə edin:",
      },
      {
        type: "code",
        text: "git init my-repo",
      },
    ],
    image: "/images/blog/git.png",
    author: {
      name: "Zeynal Həsənov",
      image: "/images/blog/author-07.png",
      designation: "DevOps Engineer",
    },
    tags: ["Git", "Versiya İdarəsi", "Web Tətbiqi"],
    publishDate: "2025",
  },
  {
    id: 8,
    title: "API Nədir? Web Tətbiqlərində İstifadəsi",
    paragraph:
      "API-lar, müxtəlif sistemlər arasında əlaqəni təmin edən vasitələrdir. Bu yazıda API-ların nə olduğunu və necə istifadə edildiyini öyrənəcəksiniz.",
    content: [
      {
        type: "paragraph",
        text: "API (Application Programming Interface), proqramların bir-biri ilə əlaqə qurmasına imkan tanıyan bir interfeysdir. API-lar, web tətbiqlərində məlumat mübadiləsini asanlaşdırır.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. API-ların Növləri",
      },
      {
        type: "paragraph",
        text: "RESTful API-lar və GraphQL API-lar, müasir web tətbiqlərində ən çox istifadə olunan növlərdir.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. API-ların İstifadəsi",
      },
      {
        type: "paragraph",
        text: "API-lardan istifadə edərək, müxtəlif məlumat mənbələrinə daxil ola və bu məlumatları tətbiqinizdə istifadə edə bilərsiniz.",
      },
    ],
    image: "/images/blog/api.avif",
    author: {
      name: "Elvin Həsənov",
      image: "/images/blog/author-08.png",
      designation: "Backend Developer",
    },
    tags: ["API", "Web Tətbiqi", "Backend"],
    publishDate: "2025",
  },
  {
    id: 9,
    title: "Web Tətbiqlərində Performans Optimizasiyası",
    paragraph:
      "Web tətbiqlərinin performansını artırmaq üçün bir neçə üsul mövcuddur. Bu yazıda optimizasiya metodlarını öyrənəcəksiniz.",
    content: [
      {
        type: "paragraph",
        text: "Web tətbiqlərinin performansını artırmaq, istifadəçi təcrübəsini yaxşılaşdırmaq üçün vacibdir. Bunun üçün bir neçə üsul mövcuddur.",
      },
      {
        type: "heading",
        level: 3,
        text: "1. Yükleme Vaxtını Azaltmaq",
      },
      {
        type: "paragraph",
        text: "Yükləmə vaxtını azaltmaq üçün şəkil ölçülərini optimallaşdırın və CSS/JavaScript fayllarını sıxışdırın.",
      },
      {
        type: "heading",
        level: 3,
        text: "2. Cache İstifadəsi",
      },
      {
        type: "paragraph",
        text: "Cache istifadə edərək, istifadəçilərin daha sürətli məlumat əldə etməsini təmin edə bilərsiniz.",
      },
      {
        type: "heading",
        level: 3,
        text: "3. Asinxron Yükləmə",
      },
      {
        type: "paragraph",
        text: "JavaScript fayllarını asinxron yükləməklə, səhifə yükləmə müddətini azalda bilərsiniz.",
      },
    ],
    image: "/images/blog/optimization.jpg",
    author: {
      name: "Kamran Abbasov",
      image: "/images/blog/author-09.png",
      designation: "Full-Stack Developer",
    },
    tags: ["Performans", "Web Tətbiqi", "Optimizasiya"],
    publishDate: "2025",
  },
];

export default blogData;
