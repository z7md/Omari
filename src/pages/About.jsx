// src/pages/About.jsx
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
import OmariLogo from "../../public/images/centerlogo.png";
import IshbiliaLogo from "../../public/images/ishlogo.png";
import MajidPhoto from "../../public/images/boss.png";

export const About = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // كشف الجوال لتعطيل حركات معينة
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // حساب تقدم التمرير للـ Progress Bar
  useEffect(() => {
    const onScroll = () => {
      const win = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress((win / docH) * 100);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds = [
    "about",
    "vision",
    "mission",
    "management",
    "projects",
    "contact",
  ];

  return (
    <>
      <Navbar />

      {/* عمود تقدم التمرير */}
      <div className="fixed top-0 right-0 w-1 h-full bg-gray-200 z-50">
        <div
          className="w-full bg-[#ab8e3a] transition-all"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>

      {/* نقاط التنقل الجانبية */}
      <div className="hidden md:flex fixed right-6 top-1/2 transform -translate-y-1/2 flex-col space-y-3 z-40">
        {sectionIds.map((id) => (
          <a key={id} href={`#${id}`}>
            <motion.span
              whileHover={{ scale: 1.3 }}
              className="block w-3 h-3 bg-gray-300 rounded-full hover:bg-[#ab8e3a] transition-colors"
            />
          </a>
        ))}
      </div>

      <motion.div
        dir="rtl"
        className="mx-auto w-[90%] px-4 py-16 mt-[100px] space-y-20"
        variants={staggerContainer(0.2, 0.2)}
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
      >
        {/* Section 1: نبذة عن المجموعة */}
        <motion.section
          id="about"
          variants={fadeIn("up", 0.3)}
          className="scroll-mt-[100px] bg-white text-gray-800 px-6 py-12 rounded-lg"
        >
          <div className="flex items-center mb-6">
            <motion.h2
              variants={textVariant(0.3)}
              className="relative inline-block text-[#ab8e3a] text-3xl sm:text-4xl md:text-5xl font-semibold ml-4"
            >
              نبذة عن المجموعة
              <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#ab8e3a] to-[#ccbb88]" />
            </motion.h2>
            <motion.div
              variants={fadeIn("right", 0.3)}
              className="border-t-2 border-[#ab8e3a] flex-grow ml-4"
            />
          </div>
          <motion.p
            variants={fadeIn("up", 0.4)}
            className="text-xl sm:text-2xl leading-relaxed mb-4"
          >
            شركة سعودية استثمارية عائلية تأسست عام 2002م من قبل ماجد بن ناصر
            الغمري مالك ورئيس المجموعة، وتعتبر امتداد لاستثمارات “الشيخ ناصر
            الغمري وإخوانه رحمهم الله” أحد رواد الاستثمار والعمل الاجتماعي
            والثقافي على مستوى المملكة ومدينة بريدة خصوصاً، تستثمر في عدد من
            الشركات السعودية المحلية، وتعمل في التطوير العقاري من خلال مشاريعها
            التجارية والإسكانية، وتركز استثماراتها على مدينة بريدة، وتتكامل في
            تقديم خدماتها ومشاريعها من خلال الشراكة مع عدد من كبرى الشركات
            المتخصصة، تنشط في خدمة المجتمع عبر “الغمري لخدمة المجتمع” ومؤسسة
            مبادرات اجتماعية تابعة للمجموعة، تنفذ العديد من المبادرات الهادفة
            لتنمية المجتمع ومدينة بريدة.
          </motion.p>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-xl sm:text-2xl leading-relaxed"
          >
            طورت المجموعة عدداً من المشاريع التجارية والسكنية المميزة مثل: مراكز
            تجارية، عمائر تجارية، فلل ووحدات سكنية، أراضي سكنية وتجارية، وذلك
            بجودة عالية واحترافية في التصاميم والتنفيذ واستقطاب العلامات
            التجارية المتميزة.
          </motion.p>
        </motion.section>

        {/* Section 2: رؤيتنا */}
        <motion.section
          id="vision"
          variants={fadeIn("up", 0.4)}
          className="scroll-mt-[100px] bg-[#ab8e3a] text-white px-6 py-12 rounded-lg"
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <motion.h2
              variants={textVariant(0.5)}
              className="relative inline-block text-white text-3xl sm:text-4xl md:text-5xl font-semibold ml-4"
            >
              رؤيتنا
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white" />
            </motion.h2>
            <motion.div
              variants={fadeIn("right", 0.5)}
              className="border-t-2 border-white flex-grow ml-4"
            />
          </div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-xl sm:text-2xl leading-relaxed"
          >
            أن نكون مجموعة عقارية استثمارية متميزة على مستوى المملكة، ذات
            استثمارات متعددة وأن تتميز قدراتنا على القيادة والمشاركة في تأسيس
            مشاريع وشركات بمنهجية علمية مدروسة وتمتلك وتدير حصصاً واستثمارات
            استراتيجية في كبرى الشركات المساهمة.
          </motion.p>
        </motion.section>

        {/* Section 3: رسالتنا */}
        <motion.section
          id="mission"
          variants={fadeIn("up", 0.1)}
          className="scroll-mt-[100px] bg-white text-gray-800 px-6 py-12 rounded-lg"
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <motion.h2
              variants={textVariant(0.4)}
              className="relative inline-block text-[#ab8e3a] text-3xl sm:text-4xl md:text-5xl font-semibold ml-4"
            >
              رسالتنا
              <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#ab8e3a] to-[#ccbb88]" />
            </motion.h2>
            <motion.div
              variants={fadeIn("right", 0.5)}
              className="border-t-2 border-[#ab8e3a] flex-grow ml-4"
            />
          </div>
          <motion.p
            variants={fadeIn("up", 0.5)}
            className="text-xl sm:text-2xl leading-relaxed"
          >
            تعمل مجموعتنا على تطوير المشاريع العقارية والاستثمارية بأعلى
            المعايير العالمية وتقديم أفضل خدمات البيع والتأجير وتسويق الأفكار
            التنموية المتميزة في جميع القطاعات الاقتصادية وتحويلها إلى مشاريع
            ذات أبعاد تنموية وعوائد مالية مجزية، وذلك من خلال الاستثمار المعارف
            والخبرات المتراكمة التي تميزت بها الريادة الاقتصادية لاستثمارات
            ومشاريع الشيخ ناصر بن سليمان العمري رحمه الله وأسرته العمري التجارية
            عبر عطائها للاقتصاد والوطن والاستثمار وتعزيزها بالمعارف والخبرات
            الحديثة والمتنوعة التي تمتلكها المجموعة ومؤسساتها وشركاتها التابعة
            والشقيقة.
          </motion.p>
        </motion.section>

        {/* Section 4: إدارة المجموعة */}
        <motion.section
          id="management"
          variants={fadeIn("up", 0.2)}
          className="scroll-mt-[100px] bg-[#ab8e3a] text-white px-6 py-12 rounded-lg"
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <motion.h2
              variants={textVariant(0.4)}
              className="relative inline-block text-white text-3xl sm:text-4xl md:text-5xl font-semibold ml-4"
            >
              إدارة المجموعة
              <span className="absolute bottom-0 left-0 h-1 w-full bg-white" />
            </motion.h2>
            <motion.div
              variants={fadeIn("right", 0.4)}
              className="border-t-2 border-white flex-grow ml-4"
            />
          </div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            className="flex flex-col md:flex-row-reverse items-start gap-8"
          >
            <motion.img
              src={MajidPhoto}
              alt="ماجد بن ناصر العمري"
              className="md:w-48 w-full h-auto rounded-lg shadow-xl"
              whileHover={!isMobile ? { rotate: [0, 3, -3, 0] } : {}}
            />
            <div className="md:flex-1 space-y-4 text-xl sm:text-2xl leading-relaxed">
              <p>
                يرأس ماجد بن ناصر العمري مجموعة العمري العقارية التي أسسها منذ
                العام 2002م والتي تعتبر امتدادًا لاستثمارات ومشاريع والده الشيخ
                ناصر بن سليمان العمري وعمامه رحمهما الله والذين كانت لهم أدوار
                رئيسية في تأسيس عدد من المشاريع الاقتصادية والتنموية ومنها دوره
                كرئيس في تأسيس شركة أسمنت القصيم وصحيفة القصيم ومطابع القصيم
                ودوره في تأسيس التعليم النظامي بالقصيم ومشاريع عقارية وزراعية
                رائدة.
              </p>
              <p>
                كما حققت مجموعة ماجد العمري منذ تأسيسها مشاريع عقارية كبرى
                وتجارية وسكنية ونقلة استثمارية في محافظة القصيم ويرأس المجموعة
                ماجد بن ناصر العمري الذي كانت له أدوار اقتصادية واجتماعية مهمة
                كذلك من خلال عضويته في عدد من الشركات والمؤسسات ومنها:
              </p>
              <div>
                <h3 className="font-semibold">عضويات سابقة:</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>عضو مجلس إدارة شركة أسمنت القصيم</li>
                  <li>
                    عضو مجلس إدارة الغرفة التجارية بالقصيم ورئيس لجنة شباب
                    الأعمال
                  </li>
                  <li>عضو المجلس البلدي بالقصيم ورئيس اللجنة الاقتصادية</li>
                  <li>عضو مجلس التنمية السياحية بالقصيم</li>
                  <li>عضو برنامج الأمير فيصل بن بندر للتنمية</li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold mt-4">
                  كما يشغل حاليًا عدداً من العضويات ومنها:
                </h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>رئيس مجموعة العمري العقارية</li>
                  <li>رئيس مؤسسة العمري لخدمة المجتمع</li>
                  <li>مؤسس صالون العمري الثقافي</li>
                  <li>عضو لجنة أهالي بريدة</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.section>

        {/* Section 5: من أبرز مشاريع المجموعة */}
        <motion.section
          id="projects"
          variants={fadeIn("up", 0.4)}
          className="scroll-mt-[100px] bg-white text-gray-800 px-6 py-12 rounded-lg"
                  initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
        >
          <div className="flex items-center mb-6">
            <motion.h2
              variants={textVariant(0.5)}
              className="relative inline-block text-[#ab8e3a] text-3xl sm:text-4xl md:text-5xl font-semibold ml-4"
            >
              من أبرز مشاريع المجموعة
              <span className="absolute bottom-0 left-0 h-1 w-full bg-gradient-to-r from-[#ab8e3a] to-[#ccbb88]" />
            </motion.h2>
            <motion.div
              variants={fadeIn("right", 0.5)}
              className="border-t-2 border-[#ab8e3a] flex-grow ml-4"
            />
          </div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            className="flex flex-col md:flex-row items-start gap-6 mb-6"
            
          >
            <div className="md:flex-1 space-y-3">
              <h3 className="text-[#ab8e3a] text-2xl font-semibold">
                العمري سنتر:
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed">
                مجمع تجاري ‘بلازا’ ، على مساحة 30 ألف متر شمال مدينة بريدة في
                موقع مميز على طريق ابي بكر الصديق يضم عدد من العلامات التجارية
                المميزة المحلية والعالمية بمساحة تأجيرية تتجاوز 15 ألف متر مربع.
              </p>
            </div>
            <motion.img
              src={OmariLogo}
              alt="العمري سنتر"
              className="md:w-48 w-full h-auto rounded-lg shadow-lg"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            />
          </motion.div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            className="flex flex-col md:flex-row items-start gap-6"
          >
            <div className="md:flex-1 space-y-3">
              <h3 className="text-[#ab8e3a] text-2xl font-semibold">
                مشروع ضاحية إشبيليا:
              </h3>
              <p className="text-xl sm:text-2xl leading-relaxed">
                إشبيليا مشروع تطوير عقاري ضخم عبارة عن ضاحية سكنية نموذجية
                متكاملة على مساحة تزيد عن 5 مليون متر مربع مملوكة لمجموعة ماجد
                الغمري العقارية بمنطقة القصيم يتكون من حي سكني راقي ومتكامل يشمل
                فلل ووحدات سكنية متنوعة ومشاريع تعليمية نموذجية متكاملة تشمل على
                كليات أهلية ومدارس نموذجية ومدارس علمية (انترناشونال) ونادي
                تربوي ورياضي، ومول تجاري وفلل فندقية ومجمع مطاعم وكافيهات،
                ومدينة طبية نموذجية بالتشارك مع عدد من كبرى الشركات المتخصصة
                المحلية والعالمية ومشروع بحيرة إشبيليا بارك، شارع ترفيهي
                ‘بوليفارد إشبيليا’، وعدد من الحدائق والمساجد وجامع وخدمات وأراضي
                سكنية وتجارية مطورة بخدمات متكاملة.
              </p>
              <p className="text-xl sm:text-2xl leading-relaxed">
                المشاريع الرئيسية ضمن مشروع إشبيليا عبارة عن ‘إشبيليا بارك’ ،
                حديقة نموذجية كبيرة وسط الحي بمساحة 100 ألف متر مربع ستكون متنفس
                للحي وسكانه، و‘بوليفارد إشبيليا’ شارع سياحي وترفيهي راقي سيكون
                الشارع الدولي بمدينة بريدة يتضمن أفخم وأكبر مول راقي وكبير بطول
                2 كيلو متر مربع، ومول ضخم ‘غرناطة أفنيوز’ عبارة عن مول راقي
                وكافيهات عالمية ومطاعم، ومسطحات خضراء ومرافق تسوق وترفيه مطورة
                بخدمات متكاملة. كما يضم مشروعات سكنية وإدارية ومستشفى أهلي كبير،
                ومشروع ‘مجمع العمري للتنمية’ سيضم مدينة طبية ومركز ثقافي وتعليمي
                بالتعاون مع جهات عالمية، وسيوفر فلل سكنية نموذجية، مع شركات
                تطوير عقاري محلية وعالمية، وسيتم الاستفادة من برامج الدعم السكني
                المقدمة من وزارة الإسكان وبرنامج البيع على الخارطة والشراكات مع
                البنوك المحلية لتمويل المشترين في المشروع.
              </p>
            </div>
            <motion.img
              src={IshbiliaLogo}
              alt="مشروع ضاحية إشبيليا"
              className="md:w-48 w-full h-auto rounded-lg shadow-lg"
              whileHover={!isMobile ? { scale: 1.05 } : {}}
            />
          </motion.div>
        </motion.section>

        {/* Section 6: تواصل معنا */}
        <motion.section
          id="contact"
          variants={fadeIn("up", 0.4)}
                            initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0.1 }}
          className="scroll-mt-[100px] bg-[#ab8e3a] text-white px-6 py-12 rounded-lg text-center"
        >
          <motion.h2
            variants={textVariant(0.6)}
            className="relative inline-block text-white text-3xl sm:text-4xl md:text-5xl font-semibold mx-auto mb-4"
          >
            تواصل معنا
            <span className="absolute bottom-0 left-0 h-1 w-full bg-white" />
          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.7)}
            className="text-xl sm:text-2xl mb-6"
          >
            لأي استفسار أو شراكة، يسعدنا تواصلكم عبر القنوات التالية:
          </motion.p>
          <motion.a
            href="/contact"
            variants={fadeIn("up", 0.7)}
            className="inline-block px-8 py-3 bg-white text-[#ab8e3a] font-semibold rounded-full shadow-xl hover:shadow-2xl transition-shadow"
          >
            ابدأ المحادثة الآن
          </motion.a>
        </motion.section>
      </motion.div>

      <Footer />
    </>
  );
};
