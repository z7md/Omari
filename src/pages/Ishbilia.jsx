import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

/** عدّل المسارات حسب صورك داخل /public/images */
const HERO_IMAGE = "/images/Ish-Home.png";
const ACCESS_IMAGE = "/images/roads.png";
const MASTERPLAN_IMAGE = "/images/structure.png";

const FACILITY_GALLERY = [
  {
    title: "مركز العمري الثقافي",
    images: ["/images/Ish-C1.png","/images/Ish-C2.png","/images/Ish-C3.png"],
  },
  {
    title: "جامع الشيخ ناصر بن سليمان العمري رحمه الله" ,
    images: ["/images/Ish-M1.png","/images/Ish-M2.png","/images/Ish-M3.png","/images/Ish-M4.png",],
  },
  {
    title: "بوليفارد",
    images: ["/images/Ish-B1.png","/images/Ish-B2.png",],
  },
  {
    title: "فلل ووحدات سكنية",
    images: ["/images/Ish-V1.png","/images/Ish-V2.png","/images/Ish-V3.png","/images/Ish-V4.png",],
  },
  {
    title: "حدائق" ,
    images: ["/images/Ish-P1.png","/images/Ish-P2.png","/images/Ish-P3.png","/images/Ish-P4.png","/images/Ish-P5.png",],
  },
];

const PHASES_GALLERY = [
  "/images/Ph1.png",
  "/images/Ph2.png",
  "/images/Ph3.png",
  "/images/Ph4.png",
  "/images/Ph5.png",
  "/images/Ph6.png",
  "/images/Ph7.png",
  "/images/Ph8.png",
  "/images/Ph9.png",
  "/images/Ph10.png",
  "/images/Ph11.png",
  "/images/Ph12.png",
  "/images/Ph13.png",
  "/images/Ph14.png",
  "/images/Ph15.png",

];

/* UI محلي */
const SectionTitle = ({ children }) => (
  <h2 className="text-2xl md:text-3xl font-bold mb-4 text-[#ab8e3a]">{children}</h2>
);
const Card = ({ children, className = "" }) => (
  <div className={`rounded-2xl border border-gray-200 bg-white shadow-sm ${className}`}>{children}</div>
);
const CardHeader = ({ children, className = "" }) => <div className={`p-4 border-b border-gray-100 ${className}`}>{children}</div>;
const CardTitle = ({ children, className = "" }) => <h3 className={`text-lg font-semibold ${className} text-[#ab8e3a]`}>{children}</h3>;
const CardContent = ({ children, className = "" }) => <div className={`p-4 ${className}`}>{children}</div>;

/* بطاقة مرفق + Swiper */
const FacilityCard = ({ title, images }) => (
  <Card className="overflow-hidden">
    <CardHeader>
      <CardTitle>{title}</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="rounded-2xl overflow-hidden">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3500, disableOnInteraction: false }}
          loop
          dir="rtl"
        >
          {images.map((src, i) => (
            <SwiperSlide key={i}>
              <img src={src} alt={`${title}-${i + 1}`} className="w-full h-[42vh] md:h-[50vh] object-cover" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </CardContent>
  </Card>
);

export default function Ishbilia() {
        {/* تلوين الأسهم */}

  const accessPoints = [
  `يبعـد مشـروع اشـبيليا عـن مخطـط الزيتونـة السـكني 500 متـر وهـو مـن اكبـر المخططـات السـكنية
  الواعـدة شـمال بريـدة `,
    `يقـع مشـروع اشـبيليا بالقـرب مـن المخططـات والاحيـاء السـكنية الجديـدة والنمـو العمرانـي الاكثـر نموا
    وجاذبيـة لمدينـة بريدة `,
    ` يبعد مشروع اشبيليا عن كوبري تقاطع طريق عمر بن الخطاب مع الدائري الشمالي 14 كم`,
    ` يبعد مشروع اشبيليا عن مطار القصيم وجامعة القصيم 20 كم`,
    `يبعد مشروع اشبيليا عن قلب مدينة بريدة « البرج والإمارة والأمانة « 20 كم`,
    `يبعد مشروع اشبيليا عن محافظة عنيزه 40 كم`,
    `يبعد مشروع اشبيليا عن محافظة البكيرية 40 كم`,
    `يبعد مشروع اشبيليا عن محافظتي رياض الخبراء والخبراء 50 كم`,
    `يبعد مشروع اشبيليا عن محافظة الرس 75 كم`,  

  ];

  return (
    <div className="min-h-screen w-full bg-white text-gray-800">
              <style>{`
        .swiper-button-next,
        .swiper-button-prev {
          color: #ab8e3a;
        }
        .swiper-pagination-bullet {
          background: #d1d5db;
          opacity: 1;
        }
        .swiper-pagination-bullet-active {
          background: #ab8e3a;
        }
      `}</style>
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[87vh] md:h-[87vh] mt-[90px]">
        <img src={HERO_IMAGE} alt="Project Hero" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 " />
        <div className="relative z-10 h-full flex items-center justify-center text-center text-white">
        </div>
      </section>



      <div className="container mx-auto px-4 mt-[90px]">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#ab8e3a] mb-6 tracking-tight">
                إشبيليا
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">

            مشروع تطوير عقاري ضخم عبارة عن ضاحية سكنية نموذجية متكاملة على مساحة تزيد عن 5 ملايين متر مربع تعود ملكيته لمجموعة ماجد العمري العقارية ويقع شمال مدينة بريدة بمنطقة القصيم

يتكون المشروع من حي سكني راقٍ ومتكامل يشتمل على فلل ووحدات سكنية متنوعة ومشاريع تعليمية نموذجية متكاملة تشمل كليات أهلية ومدارس نموذجية وعدد من الحدائق والمساجد وجامع وخدمات وأراضٍ تجارية وسكنية مطورة بخدمات متكاملة

ويشتمل المشروع أيضًا على جامع كبير وسط الحي ومركز ثقافي ومجمع للخدمات الإدارية ستطوره المجموعة كمشروع وقف باسم مركز العمري الثقافي

كما سيتم تطوير المشروع على مراحل بالتعاون مع الشركات المتخصصة محليًا وعالميًا وسيتم التعاون مع وزارة الإسكان وصندوق التنمية العقارية في السعودية لدعم المشروع وتقديم المنتجات السكنية المدعومة
              
            </p>
          </div>
          </div>

      <section dir="rtl" className="w-[92%] md:w-[86%] mx-auto py-10 md:py-16">
        {/* 1) موقع المشروع وسهولة الوصول والطرق المحيطة */}
        <SectionTitle>موقع المشروع والطرق المحيطة</SectionTitle>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
          <div>
            <ul className="list-disc pr-5 space-y-2 leading-7 text-gray-700">
              {accessPoints.map((pt, i) => (
                <li key={i}>{pt}</li>
              ))}
            </ul>
          </div>
          <div>
            <img src={ACCESS_IMAGE} alt="خريطة الوصول والطرق المحيطة" className=" border overflow-hidden max-h-[600px] w-fit rounded-xl" />
          </div>
        </div>

        {/* 2) مخططات الموقع العام و شبكة الطرق الداخلية والخارجية */}
        <div className="mt-12">
          <SectionTitle>مخططات الموقع العام و شبكة الطرق الداخلية والخارجية</SectionTitle>
          <div className="flex justify-center items-center">
            <img src={MASTERPLAN_IMAGE} alt="المخطط العام للموقع" className="border object-contain max-h-[600px] w-fit rounded-2xl" />
          </div>
        </div>

        {/* 3) مرافق المشروع */}
        <div className="mt-12">
          <SectionTitle className="text-[#ab8e3a]">مرافق المشروع</SectionTitle>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {FACILITY_GALLERY.map((f, i) => (
              <FacilityCard key={i} title={f.title} images={f.images} />
            ))}
          </div>
        </div>

        {/* 4) مراحل عمل المشروع */}
        <div className="mt-12">
          <SectionTitle>مراحل عمل المشروع</SectionTitle>
          <div className="rounded-2xl overflow-hidden border shadow-sm">
            <Swiper
              modules={[Navigation, Pagination, Autoplay]}
              navigation
              pagination={{ clickable: true }}
              loop
              dir="ltr"
              autoplay={{
                delay: 1500,           // التنقل كل 3 ثواني
                disableOnInteraction: false, // يستمر في العمل بعد السحب اليدوي
                pauseOnMouseEnter: true      // يوقف عند مرور الفأرة فوقه
              }}
              breakpoints={{
                320:  { slidesPerView: 1, },
                640:  { slidesPerView: 1 },
                1024: { slidesPerView: 2},
              }}
            >
              {PHASES_GALLERY.map((src, i) => (
                <SwiperSlide key={i}>
                  <img src={src} alt={`phase-${i + 1}`} className="w-full h-[42vh] md:h-[56vh] object-cover" />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
