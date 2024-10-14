import { Blog } from "@/types/blog";

const blogData: Blog[] = [
  {
    id: 1,
    title: "Yeni Bir Dil Öyrənməyin 5 Faydası və Həyatınıza Təsirləri",
    paragraph:
      "Yeni bir dil öyrənmək həyatınızda müxtəlif müsbət təsirlər yarada bilər. Öyrəndiyiniz dil nə olursa olsun, dil biliklərinin artırılması sizi həm şəxsi, həm də peşəkar həyatda irəli aparacaq.",
    content: `
      <p>Dil öyrənmək, hər kəsin həyatında böyük təsir yarada biləcək güclü bir bacarıqdır. Yeni bir dil öyrənməyin faydaları sadəcə iş imkanları ilə məhdudlaşmır, eyni zamanda beynin inkişafı, mədəniyyətləri daha yaxından tanıma, sosial həyat və fərdi inkişafa da təsir edir.</p>
      <h3 class='tagh3'>1. Beyin Sağlamlığını Gücləndirir</h3>
      <p>Bir neçə dili eyni anda öyrənmək beyini daim aktiv saxlayır və yaddaşı gücləndirir. Beyin üçün yeni sözlər öyrənmək, fərqli dillərdə danışmaq və düşünmək əla bir məşqdir.</p>
      <h3>2. Yeni İş İmkanları Yaratmaq</h3>
      <p>Dil bilikləri çoxdilli bir iş mühitində üstünlük verir. Bu, sizi rəqiblərdən bir addım irəli aparır və karyeranızda yeni üfüqlər açır.</p>
      <h3>3. Özünə İnamı Artırmaq</h3>
      <p>Yeni bir dili öyrəndikcə, özünüzə daha çox güvənirsiniz. Yeni insanlarla ünsiyyət qurmaq, səyahət etmək və fərqli mədəniyyətləri başa düşmək daha asanlaşır.</p>
      <h3>4. Fərqli Mədəniyyətləri Tanımaq</h3>
      <p>Dil öyrənmək, həmin dilin mənsublarının mədəniyyətinə də yaxınlaşmaq deməkdir. Kitablar, filmlər və musiqilər vasitəsilə o mədəniyyəti daha yaxşı tanımaq mümkündür.</p>
      <h3>5. Zehni Sərhədləri Genişləndirmək</h3>
      <p>Yeni dillər öyrənmək beyninizi elastik saxlayır və müxtəlif problemlərin öhdəsindən daha yaxşı gəlməyə kömək edir.</p>
    `,
    image: "/images/blog/blog-01.jpg",
    author: {
      name: "Elxan Elatli",
      image: "/images/blog/author-01.png",
      designation: "Muellim",
    },
    tags: ["Xarici dil", "Dil öyrənmə", "Peşəkar inkişaf"],
    publishDate: "2025",
  },
  {
    id: 2,
    title: "Effektiv Dil Öyrənmə Metodları: 7 Təcrübə ilə Təhsilinizə Dəstək",
    paragraph: `Dil öyrənmək hər kəs üçün fərqli təcrübədir və hər kəsin öyrənmə tərzi müxtəlifdir. Lakin, dil öyrənmə prosesini asanlaşdıran bir neçə effektiv üsul var.`,
    content: `
      <p>Dil öyrənməyin müxtəlif yolları var və hər bir insanın öyrənmə tərzi fərqlidir. Ancaq bəzi effektiv üsullar bu prosesi asanlaşdırır və daha məhsuldar edir. Bu yazıda öyrənmə prosesinizə dəstək olacaq 7 metodu təqdim edirik.</p>
      <h3>1. Müntəzəm Təkrarlar ilə yaddaşı gücləndirin</h3>
      <p>Hər gün öyrəndiyiniz sözləri təkrar etmək, yaddaşınızı gücləndirir. Dil tətbiqləri və kartlar vasitəsilə öyrəndiyiniz sözləri təkrarlayın.</p>
      <h3>2. Mobil Tətbiqlərdən Yararlanın</h3>
      <p>Duolingo, Memrise kimi tətbiqlər vasitəsilə öyrənmə prosesini əyləncəli hala gətirin. Bu tətbiqlər hər zaman əlinizin altında ola bilər.</p>
      <h3>3. Filmlər və Musiqilərlə Dili Gündəlik Həyatınıza Daxil Edin</h3>
      <p>Sevdiyiniz filmləri və mahnıları yeni dildə izləyərək öyrənmə prosesini sürətləndirə bilərsiniz. Bununla yanaşı, dili gündəlik həyatda istifadə etmə şansını da artırırsınız.</p>
      <h3>4. Dostlarla və ya Dil Partnyorları ilə Öyrənmə</h3>
      <p>Birlikdə öyrənmək motivasiyanı artırır. Təcrübənizi zənginləşdirmək üçün dil mübadiləsi partnyorları ilə öyrənmə əladır.</p>
      <h3>5. Danışığa Fokuslanın</h3>
      <p>Hədəf dilinizi daha yaxşı danışa bilmək üçün mümkün qədər çox praktik edin. Real həyatda istifadə etdikcə dil qabiliyyətiniz də artacaq.</p>
      <h3>6. Kiçik Hədəflərlə Başlayın</h3>
      <p>Hər gün üçün kiçik və konkret hədəflər qoymaq dil öyrənmənin asanlaşdırılmasına kömək edir. Məsələn, hər gün 5 yeni söz öyrənmək.</p>
      <h3>7. Tədris Materiallarından Yararlanın</h3>
      <p>Yüksək keyfiyyətli tədris materialları seçərək dil öyrənmə prosesini daha effektiv edə bilərsiniz. Kitablar, iş vərəqləri və onlayn dərsliklər bu işdə faydalıdır.</p>
    `,
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
    paragraph: `Bu bələdçi ilə React kitabxanası istifadə edərək öz web tətbiqinizi yaratmağı öyrənəcəksiniz.`,
    content: `
      <p>React, Facebook tərəfindən yaradılmış, müasir web tətbiqləri üçün populyar bir JavaScript kitabxanasıdır. Bu bələdçi ilə React istifadə edərək öz web tətbiqinizi necə yaratmağı öyrənəcəksiniz.</p>
      <h3>1. Layihənin Yaradılması</h3>
      <p>React layihəsi yaratmaq üçün <code>create-react-app</code> alətindən istifadə edə bilərsiniz. Komanda xəttında aşağıdakı əmri icra edin:</p>
      <pre><code>npx create-react-app my-app</code></pre>
      <h3>2. Tətbiq Strukturu</h3>
      <p>Yaradılan layihə içində <code>src</code> qovluğunda, komponentlərinizi təşkil edə bilərsiniz. Hər bir komponent üçün ayrıca bir fayl yaradın.</p>
      <h3>3. İlk Komponentinizi Yaradın</h3>
      <p>İlk komponentinizi yaratmaq üçün <code>src/App.js</code> faylını açın və aşağıdakı kodu əlavə edin:</p>
      <pre><code>function App() { return <h1>Hello, World!</h1>; }</code></pre>
    `,
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
    paragraph: `JavaScript, web səhifələrinin dinamik və interaktiv olmasına imkan tanıyır. Bu yazıda DOM ilə necə işləyəcəyinizi öyrənəcəksiniz.`,
    content: `
      <p>JavaScript, web səhifələrinin dinamik və interaktiv olmasına imkan tanıyır. Document Object Model (DOM), HTML və XML sənədlərinin strukturunu təsvir edir.</p>
      <h3>1. DOM Nedir?</h3>
      <p>DOM, web səhifələrinin strukturunu proqramlaşdırma vasitəsilə idarə etməyə imkan tanıyır. JavaScript ilə DOM elementlərini seçə, əlavə edə və ya silə bilərsiniz.</p>
      <h3>2. DOM İlə İşləmək</h3>
      <p>DOM elementlərinə erişmek üçün <code>document.getElementById</code> və ya <code>document.querySelector</code> metodlarından istifadə edə bilərsiniz.</p>
      <h3>3. Elementləri Manipulyasiya Etmək</h3>
      <p>DOM elementlərini manipulyasiya etmək üçün, məsələn, aşağıdakı kimi bir koddan istifadə edə bilərsiniz:</p>
      <pre><code>document.getElementById('myElement').innerHTML = 'Yeni Məzmun';</code></pre>
    `,
    image: "/images/blog/javascript-dom.jpg",
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
    paragraph: `Flexbox, CSS ilə daha müasir və çevik layoutlar yaratmaq üçün ideal bir üsuldur. Bu yazıda Flexbox-un əsaslarını öyrənəcəksiniz.`,
    content: `
      <p>Flexbox, CSS ilə daha müasir və çevik layoutlar yaratmaq üçün ideal bir üsuldur. Flexbox, elementlərinizi bir sətirdə və ya sütunda düzəltmək üçün istifadə edilir.</p>
      <h3>1. Flexbox Nedir?</h3>
      <p>Flexbox, container (konteyner) içindeki elementlərin yerleşimini daha asanlaşdırmaq üçün bir metodudur.</p>
      <h3>2. Flexbox-u Necə İstifadə Edə Bilərsiniz?</h3>
      <p>Konteynerinizə <code>display: flex;</code> tərifini əlavə edərək Flexbox-u aktivləşdirə bilərsiniz.</p>
      <h3>3. Flexbox İle Layout Yaratmaq</h3>
      <p>Flexbox ilə layout yaratmaq üçün aşağıdakı kodu istifadə edə bilərsiniz:</p>
      <pre><code>const container = document.getElementById('container'); container.style.display = 'flex';</code></pre>
    `,
    image: "/images/blog/css-flexbox.jpg",
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
    paragraph: `TypeScript, JavaScript-in genişlənmiş bir versiyasıdır. Bu yazıda TypeScript-in nə olduğunu və niyə istifadə etməyinizi öyrənəcəksiniz.`,
    content: `
      <p>TypeScript, JavaScript-in üstündə tip təhlükəsizliyi təmin edən bir dildir. Bu, daha etibarlı və səhv az olan kod yazmağa imkan tanıyır.</p>
      <h3>1. Nəyə Göre TypeScript?</h3>
      <p>TypeScript, JavaScript kodunu daha strukturlaşdırılmış və oxunaqlı etməyə kömək edir. Tip sisteminin olması, inkişaf müddətində səhvlərin aşkarlanmasına kömək edir.</p>
      <h3>2. TypeScript Quraşdırılması</h3>
      <p>TypeScript-i layihənizə əlavə etmək üçün aşağıdakı əmri istifadə edin:</p>
      <pre><code>npm install --save-dev typescript</code></pre>
    `,
    image: "/images/blog/typescript.jpg",
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
    paragraph: `Git, layihələrinizi idarə etməyə kömək edən bir versiya idarəetmə sistemidir. Bu yazıda Git-in əsaslarını öyrənəcəksiniz.`,
    content: `
      <p>Git, kodunuzun tarixini izləməyə və versiyalarını idarə etməyə imkan tanıyan bir alətdir. Bu, bir komanda ilə işləyərkən mükəmməl bir vasitədir.</p>
      <h3>1. Git-in Quraşdırılması</h3>
      <p>Git-i sisteminizdə quraşdırmaq üçün aşağıdakı linkə baxın: <a href="https://git-scm.com/">Git Rəsmi Saytı</a></p>
      <h3>2. İlk Repo Yaradılması</h3>
      <p>Yeni bir Git reposu yaratmaq üçün aşağıdakı əmri istifadə edin:</p>
      <pre><code>git init my-repo</code></pre>
    `,
    image: "/images/blog/git.jpg",
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
    paragraph: `API-lar, müxtəlif sistemlər arasında əlaqəni təmin edən vasitələrdir. Bu yazıda API-ların nə olduğunu və necə istifadə edildiyini öyrənəcəksiniz.`,
    content: `
      <p>API (Application Programming Interface), proqramların bir-biri ilə əlaqə qurmasına imkan tanıyan bir interfeysdir. API-lar, web tətbiqlərində məlumat mübadiləsini asanlaşdırır.</p>
      <h3>1. API-ların Növləri</h3>
      <p>RESTful API-lar və GraphQL API-lar, müasir web tətbiqlərində ən çox istifadə olunan növlərdir.</p>
      <h3>2. API-ların İstifadəsi</h3>
      <p>API-lardan istifadə edərək, müxtəlif məlumat mənbələrinə daxil ola və bu məlumatları tətbiqinizdə istifadə edə bilərsiniz.</p>
    `,
    image: "/images/blog/api.jpg",
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
    paragraph: `Web tətbiqlərinin performansını artırmaq üçün bir neçə üsul mövcuddur. Bu yazıda optimizasiya metodlarını öyrənəcəksiniz.`,
    content: `
      <p>Web tətbiqlərinin performansını artırmaq, istifadəçi təcrübəsini yaxşılaşdırmaq üçün vacibdir. Bunun üçün bir neçə üsul mövcuddur.</p>
      <h3>1. Yükleme Vaxtını Azaltmaq</h3>
      <p>Yükləmə vaxtını azaltmaq üçün şəkil ölçülərini optimallaşdırın və CSS/JavaScript fayllarını sıxışdırın.</p>
      <h3>2. Cache İstifadəsi</h3>
      <p>Cache istifadə edərək, istifadəçilərin daha sürətli məlumat əldə etməsini təmin edə bilərsiniz.</p>
      <h3>3. Asinxron Yükləmə</h3>
      <p>JavaScript fayllarını asinxron yükləməklə, səhifə yükləmə müddətini azalda bilərsiniz.</p>
    `,
    image: "/images/blog/performance.jpg",
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
