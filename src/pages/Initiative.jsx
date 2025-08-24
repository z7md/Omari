// src/pages/Initiative.jsx
import React, { useEffect, useState, useMemo } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { motion } from "framer-motion";
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";

/* =========================
   Variables (config + data)
   ========================= */
const theme = {
  primary: "#ab8e3a",
  pageBg: "#ffffff",
  sectionGold: "#ab8e3a",
  sectionWhite: "#ffffff",
  bullet: "#d1d5db",
  bulletActive: "#ab8e3a",
};

const pageTitle = "العمري لخدمة المجتمع";

const swiperOptions = {
  modules: [Pagination, Autoplay],
  spaceBetween: 16,
  slidesPerView: 1,
  loop: true,
  grabCursor: true,
  pagination: { clickable: true },
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  breakpoints: { 320: { slidesPerView: 1 } },
};

const initiatives = [
  {
    id: 1,
    title: "مبادرة تاجر التمور",
    images: ["/images/dates1.png", "/images/dates2.png", "/images/dates3.png"],
    article: `شكر صاحب السمو الأمير الدكتور فيصل بن مشعل بن سعود بن عبدالعزيز أمير منطقة القصيم رجل الأعمال ماجد بن ناصر العمري، نظير ما قدمته مبادرة "تاجر التمور" التي تضمنت عددا من الدورات التدريبية المهمة في دعم الشباب في تجارة التمور التي أقيمت على هامش فعاليات موسم التمور في بريدة. وقال الأمير فيصل في خطاب شكر بعث به إلى العمري:" اطلعنا على التقرير الختامي لمبادرة "تاجر التمور" إحدى مبادرات العمري لخدمة المجتمع ،
    والتي أقيمت تزامنا مع موسم التمور في بريدة وما تضمنه من دورات تدريبية مهمة في دعم الشباب في تجارة التمور ."واضاف سموه الكريم بالقول:" سرنا ما احتواه التقرير ونشكر لكم الجهود المبذولة والسلام عليكم"
    
    
يشار إلى أن مبادرة "تاجر التمور" تتضمن دورات تدريبية للشباب والفتيات، في مجالات تجارة وتسويق التمور، والتسويق إلالكتروني، والتغليف والتصنيع، وصناعة العلامة التجارية، وقد أقيمت في مقر غرفة القصيم بالتعاون مع الغرفة.. وتضمن التدريب لقاءات مع أصحاب تجارب ناجحة في تجارة التمور، كما قدمت مبادرة "تاجر التمور" دعما ماديا وتقنيا فنيا .لتأسيس متاجر إلكترونية، مع استمرار الدعم لمدة عام، متضمنة أيضا تصميم الهوية التجارية لكل مشروع يشار إلى أن مبادرة "تاجر التمور" تعد إحدى المبادرات التي طرحتها "العمري لخدمة المجتمع" التي أسسها ويرأسها رجال الأعمال ماجد بن ناصر العمري، وتقدم مبادرات تنموية لخدمة المجتمع، وتؤسس لمشروعات تتسم بالاستدامة لخدمة منطقة القصيم وأبنائها. وأكد ماجد العمري: أن هذه المبادرة وغيرها من المبادرات التي تشرف "العمري لخدمة المجتمع" بطرحها تعكس التزامنا في مجموعة العمري الاستثمارية، على رفد وتعضيد الجهود الحكومية الرامية إلى تنمية المجتمع، ورفع مساهمة القطاع غير الربحي في مكونات التنمية المختلفة، لافت ًا إلى المجموعة ماضية في تحقيق أهدافها من خلال "العمري لخدمة المجتمع"، لدعم الشباب، والتوسع في فرص التوطين، وتأسيس الأعمال.`},
  {
    id: 2,
    title: "تسليم أراضي لجمعية الإسكان الأهلية",
    images: ["/images/I2-1.png", "/images/I2-2.png", "/images/I2-3.png"],
    article:
    `أثنى صاحب السمو الأمير الدكتور فيصل بن مشعل بن سعود بن عبدالعزيز أمير منطقة القصيم على الدعم الذي قدمه رجل الأعمال ماجد بن ناصر العمري لجمعية الإسكان الأهلية ببريدة، التي يرأس سمو أمير القصيم مجلس إدارتها على تبرع العمري بأراضي لمشاريع جمعيةالإسكان الخيرية ببريدة لذوي الدخل المحدود بالتعاون مع برنامج جود الإسكان مقدما شكره وثناءه على ما يقدمه رجال الأعمال والموسرون من مبادرات اجتماعية وخيرية  من جهته، قال ماجد العمري: إن هذا التبرع يعكس حرصنا في مجموعة العمري على تعضيد ،الجهود الحكومية في عموم مكونات القطاع الخيري، ودعم الأسر المحتاجة للمساكن
    ورفع ماجد العمري في ختام تصريحه شكره لسمو أمير المنطقة .على السماح لنا بالمشاركة في مسيرة الأعمال الخيرية والتطوعية في منطقة القصيم`
  },
  {
    id: 3,
    title: "مبادرة الإبداع الإعلامي",
    images: ["/images/I3-1.png", "/images/I3-2.png", "/images/I3-3.png"],
    article:
    `كرم أمير منطقة القصيم الأمير الدكتور فيصل بن مشعل بن سعود
    الفائزين بجائزة الإبداع الإعلامي، المقامة ضمن فعاليات مهرجان تمور بريدة 39 للعام الماضي،  التي يدعمها رجل الأعمال ماجد بن ناصر العمري لتكون جائزة سنوية تقام مع المهرجان للتعريف به وبالتمور التي تنتجها المنطقة بصورة تتناسب مع حجم المهرجان
    ورحب أمير القصيم بالمكرمين متمنيا لهم التوفيق وأن تكون هذه الجائزة دافعا ومحفزا لهم في النجاح والتميز بالمجال الإعلامي الذي يخدم المنطقة ويبرز ما فيها من تطور ومهرجانات متنوعة، موصيا القائمين على الجائزة بالتوسع لتشمل جميع محافظات ومراكز المنطقة، وتنوعيها بحيث تتضمن فعاليات أكثر، وأن يراعى استمرار عملية تدريب وتأهيل الكادر القائم على الجائزة، بما يضمن رفع مستوى المهنية فيها وقيمتها الفنية التي يخرج بها المشاركون بالجائزة، والاستفادة من بعض هذه الأعمال المميزة لاستخدامها في التسويق والحملات الإعلانية .للمهرجان`
  },
  {
    id: 4,
    title: "برنامج مهارات",
    images: ["/images/I4-1.png", "/images/I4-2.png", "/images/I4-3.png"],
    article:
    `التقى صاحب السمو الملكي الأمير الدكتور فيصل بن مشعل بن سعود بن عبدالعزيز أمير منطقة القصيم, بديوان الإمارة بمدينة بريدة, بحضور الرئيس التنفيذي لمؤسسة »مجتمعي« إبراهيم الماجد, والأمين العام للغرفة التجارية بالمنطقة محمد الحنايا, يوم أمس الأول, رئيس مجموعة العمري لتنمية المجتمع ماجد بن ناصر العمري, وفريق عمل برنامج »مهارات« التدريبي )إحدى مبادرات مؤسسة العمري لخدمة المجتمع(, الذين قدموا للسلام على سموه، وتسليمه التقرير .الختامي للبرنامج المقام بالشراكة مع مؤسسة »مجتمعي«, وتكريم الرعاة ومسؤولي الجهات المشاركة واستمع سموه إلى فكرة المبادرة التي اشتملت على ثلاثة مجالات, وظيفي ومهني وريادي, واستفاد من خلالها 214 متدربا ومتدربة, وتستهدف الطلاب حديثي التخرج والموظفين الجدد لتأهيلهم للعمل، وتطوير قدراتهم، وتنمية قدرات أصحاب .المهن والمواهب والمهارات، ومساعدة رواد الأعمال لتحويل أفكارهم إلى مشاريع
      ورحب سموه بالجميع, مثمنا الجهود التي تبذلها مؤسسة العمري لتنمية المجتمع عبر تعزيز المبادرات الخادمة لأبناء المنطقة. مشيدا بمخرجات البرنامج عبر تدريبه 214 متدربا ومتدربة في المجال الوظيفي والمهني والريادي, ومشددا على أهمية مواصلة تنمية مهارات وقدرات الشباب والشابات، وتقديم خدمات الدعم على مستوى قطاع الأعمال, وتشجيع أبناءالمنطقةوبناتهاعلىالاستثمارفيالمشاريعالابتكارية,سائلاالمولى-عزوجل-أن يبارك بالجهود,وأن يوفق الجميع .لكل خير من جانبه، قدم ماجد العمري شكره وتقديره لسمو أمير منطقة القصيم على تحفيزه الدائم، وتشجيعه على مواصلة دعم .وتحفيز كل ما من شأنه خدمة أبناء المنطقة، وفي المجالات كافة وفي ختام اللقاء كرم سموه فريق عمل برنامج »مهارات« وشركاء النجاح`
    
  },
  {
    id: 5,
    title: "وقف الشيخ ناصر العمري للقرآن",
    images: ["/images/I5-1.png", "/images/I5-2.png", "/images/I5-3.png"],
    article:
    `استضافت ديوانية العمري في مزرعة الشيخ ناصر العمري
    رحمه الله بحضور رئيس مجلس إدارة جمعية تحفيظ القران الكريم ببريدة الشيخ علي اليحيى وعدد من المشائخ الفضلاء ومنسوبي الجمعية ومعهد الفتيات ببريدة حيث كان في استقبالهم رئيس مجلس إدارة مجموعة العمري الاستاذ
    ماجد بن ناصر العمري وأخوانه الذي رحب ببداية اللقاء بالضيوف الكرام في هذا اليوم المبارك والذي يحتفل به الجميع ببداية تنفيذ هذا الوقف الذي كان رغبة من والدهم يرحمه الله قبل وفاته وقاموا بدعم واهتمام والدتهم حفظها الله وأخوانه الكرام باستكمال اجراءات هذا المشروع لبداية التنفيذ ليكون وقف لخدمة كتاب الله .وثمن العمري الاهتمام والمتابعة من قبل منسوبي الجمعية ومعهد الفتيات في العمل على انهاء اجراءات هذا المشروع والذي سيكون باذن الله في خدمة كتابه الكريم وكانت بدايته رغبة من الوالد الشيخ ناصر ال ُعمري وحرصه على التعليم وخدمة القران أيضا ونحن الان نكمل هذه الرغبة لنحققها على ارض الواقع .
    ويتواجد المشروع في حي الصفراء وسط مدينة بريدة مما يجعله يكون خادما لشريحة كبيرة باذن الله من فتيات هذا البلد , حيث سيستوعب الوقف قرابة 500 طالبة بالاضافة إلى مسرح مجهز بالكامل ومكاتب إدارية نسائية ورجالية ومحلات تجارية . وقدم العمري شكره للشيخ علي اليحيى و كافة منسوبي المجلس الاشرافي وأعضاء مجلس الادارة على جهودهم نسأل الله أن يكون في ميزان حسناتهم .`
  },
  {
    id: 6,
    title: "مبادرة أمينة المشيقح للتميز النسائي",
    images: ["/images/I6-1.png", "/images/I6-2.png", "/images/I6-3.png"],
    article:
  `أطلقت مجموعة العمري ببريدة ممثلة بالعمري لخدمة المجتمع مساء الأثنين 10 رمضان 1438 هـ مبادرتها في تكريم النساء المتميزات في منطقة القصيم وذلك عبر
  ) جائزة أمينة بنت محمد المشيقح للتميز النسائي ( والتي تقام بشكل سنوي في شهر رمضان المبارك
  حيث تهدف الجائزة لتحفيز المتميزات من سيدات هذه المنطقة للرفع من العمل الاجتماعي والعلمي والخيري وتقديرا لجهودهن في هذه المجالات
  عبر التكريم بدروع تذكارية وشهادات ومبالغ نقدية . بحيث يتم الترشيح للمتميزات من قبل المجموعة بالتعاون مع عدد من المراكز والدور والجمعيات النسائية بالمنطقة .`
  },
  {
    id: 7,
    title: "حفل مرور ١٠ سنوات على المؤسسة",
    images: ["/images/I7-1.png", "/images/I7-2.png", "/images/I7-3.png"],
    article:
  `رعى صاحب السمو الملكي الأمير الدكتور فيصل بن مشعل بن سعود بن عبدالعزيز أمير منطقة القصيم, حفل مؤسسة العمري لخدمة وتنمية المجتمع بمناسبة مرور عشر سنوات على إنشائها؛
  وذلك في مدينة بريدة, بحضور وكيل إمارة المنطقة الدكتور عبدالرحمن الوزان, وعدد من المسؤولين في الجهات الحكومية والأهلية بالمنطقة. وأكد صاحب السمو الملكي أمير منطقة القصيم, عن فخره واعتزازه بمثل هذه الأعمال الخيرة الاجتماعية والتعليمية والتنموية والتي قدمتها المؤسسة,
  مبينا على أن العمري لخدمة المجتمع استشرقت المستقبل من خلال خدماتها المتن  وعة في القطاع التنموي والخيري, وترجمت فعليا مستهدفات رؤية المملكة 2030 من خلال تمكين القطاع الخاص والمشاركة الفعلية في التنمية الوطنية. وأشار الأمير فيصل بن مشعل على أهمية اتجاه المؤسسات والشركات في القطاع الخاص إلى هذا المنحنى المبارك من خلال تعزيز ودعم العمل الاجتماعي وتمكين الشباب والفتيات وتدريبهم, مؤكدا على أن هذا ما تطمح إليه الدولة بقيادة خادم الحرمين الشريفين الملك سلمان بن عبدالعزيز وسمو ولي عهده الأمين - حفظهما الله
  مباركا للأستاذ ماجد بن ناصر العمري مرور عشر سنوات على إنشاء العمري لخدمة المجتمع, مثنيا على جهود والده - رحمه الله - في العديد من المبادرات الخ  يرة التي قدمها, مبينا على أن ذلك ليس بغريب عليهم كونهم بصمة وطنية يفتخر ويعتز بها, سائلا المولى ع  ز وج  ل أن يبارك بالجهود, وأن يديم على هذه البلاد نعمة الأمن والأمان والنماء الدائم. وفي ختام الحفل كرم سموه مؤسسة "مجتمعي" لدورها الرائد في المبادرات الاجتماعية ومنها الشراكة في مبادرة "مهارات" لتدريب الشباب والفتيات تسلّمها مستشار سمو أمير المنطقة إبراهيم بن سعد الماجد`
  },

];

/* =============
   Helpers
   ============= */
const slugify = (s) =>
  "initiative-" +
  s
    .toString()
    .trim()
    .replace(/\s+/g, "-")
    .replace(/[^\u0600-\u06FF\w-]/g, "")
    .toLowerCase();

/* =================
   Page Component
   ================= */
export const Initiative = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  // Match the About-page behavior
  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const onScroll = () => {
      const win = window.scrollY;
      const docH = document.documentElement.scrollHeight - window.innerHeight;
      setScrollProgress(docH > 0 ? (win / docH) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const sectionIds = useMemo(
    () => initiatives.map((i) => slugify(i.title)),
    []
  );

  return (
    <div className="">
      <Navbar />
      <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#ab8e3a] flex justify-center items-center mt-[130px]">العمري لخدمة المجتمع</h2>
      <motion.p
        variants={fadeIn("up", 0.4)}
        className="text-lg sm:text-xl text-center mb-6 flex justify-center items-center"
      >
مؤسسة مبادرات اجتماعية تابعة للمجموعة، تتبنى العديد من المبادرات الهادفة إلى تنمية المجتمع ومدينة بريدة.
      </motion.p>
      {/* عمود تقدم التمرير */}
      <div className="fixed top-0 right-0 w-1 h-full bg-gray-200 z-50">
        <div
          className="w-full transition-all"
          style={{ height: `${scrollProgress}%`, backgroundColor: theme.primary }}
        />
      </div>

      {/* Swiper bullets style */}
      <style>{`
        .swiper-pagination-bullet { background: ${theme.bullet}; opacity: 1; }
        .swiper-pagination-bullet-active { background: ${theme.bulletActive}; }
      `}</style>

      {/* المحتوى */}
      <motion.div
        dir="rtl"
        className="mx-auto w-[90%] px-4 py-12  space-y-20"
        variants={staggerContainer(0.2, 0.2)}
        initial={isMobile ? "show" : "hidden"}
        whileInView="show"
        viewport={{ once: true, amount: 0.1 }}
        style={{ backgroundColor: theme.pageBg }}
      >
        {/* عنوان رئيسي للصفحة (بنفس روحية قسم "نبذة") */}
        {/* <motion.section
          variants={fadeIn("up", 0.2)}
          className="scroll-mt-[100px] bg-white text-gray-800 px-6 py-12 rounded-lg"
        >
          <div className="flex items-center mb-6">
            <motion.h2
              variants={textVariant(0.3)}
              className="relative inline-block"
              style={{
                color: theme.primary,
                fontSize: "clamp(1.75rem, 2.5vw, 3rem)",
                fontWeight: 600,
                marginLeft: "1rem",
              }}
            >
              {pageTitle}
            </motion.h2>
            <motion.div
              variants={fadeIn("right", 0.3)}
              className="border-t-2 flex-grow ml-4"
              style={{ borderColor: theme.primary }}
            />
          </div>
          <motion.p variants={fadeIn("up", 0.35)} className="text-xl leading-relaxed">
            مبادرات تنموية مستدامة تعكس التزام مجموعة العمري بخدمة المجتمع في منطقة القصيم.
          </motion.p>
        </motion.section> */}

        {/* تكرار الأقسام: (عنوان → سوايبر → مقال) مع تصميم متناوب */}
        {initiatives.map((item, idx) => {
          const isGold = idx % 2 === 1; // تناوب الخلفية: أبيض / ذهبي
          const sectionBg = isGold ? theme.sectionGold : theme.sectionWhite;
          const headingColor = isGold ? "#ffffff" : theme.primary;
          const dividerColor = isGold ? "#ffffff" : theme.primary;

          return (
            <motion.section
              key={item.id}
              id={slugify(item.title)}
              variants={fadeIn("up", 0.1)}
              className={`scroll-mt-[100px] px-6 py-12 rounded-lg mb-[30px] ${
                isGold ? "text-white" : "text-gray-800"
              }`}
              style={{ backgroundColor: sectionBg }}
              initial={isMobile ? "show" : "hidden"}
              whileInView="show"
              viewport={{ once: true, amount: 0.12 }}
            >
              {/* العنوان + الخط */}
              <div className="flex items-center mb-6">
                <motion.h2
                  variants={textVariant(0.4)}
                  className="relative inline-block font-semibold ml-4"
                  style={{
                    color: headingColor,
                    fontSize: "clamp(1.5rem, 2.2vw, 2.5rem)",
                  }}
                >
                  {item.title}
                </motion.h2>
                <motion.div
                  variants={fadeIn("right", 0.4)}
                  className="border-t-2 flex-grow ml-4"
                  style={{ borderColor: dividerColor }}
                />
              </div>

              {/* Swiper داخل كارد أبيض مع بوردر ذهبي */}
              <motion.div variants={fadeIn("up", 0.5)} className="mb-6">
                <div
                  className="rounded-lg border-2 p-2 bg-white"
                  style={{ borderColor: theme.primary }}
                >
                  <Swiper {...swiperOptions} className="rounded-lg">
                    {item.images.map((img, i) => (
                      <SwiperSlide key={i}>
                        <div className="flex items-center justify-center h-full p-2 mt-4">
                          <img
                            src={img}
                            alt={`صورة ${i + 1} للمبادرة ${item.title}`}
                            className="w-full sm:h-64 h-[340px] object-contain rounded-lg"
                          />
                        </div>
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
              </motion.div>

              {/* مقال داخل كارد أبيض مع بوردر ذهبي */}
              <motion.div
                variants={fadeIn("up", 0.6)}
                className="prose prose-sm sm:prose-lg max-w-none bg-white p-6 rounded-lg border"
                style={{ borderColor: theme.primary, color: "#1f2937" }}
              >
                <p style={{ whiteSpace: "pre-line", fontSize: "1.125rem", lineHeight: 1.9 }}>
                  {item.article}
                </p>
              </motion.div>
            </motion.section>
          );
        })}

        {/* تواصل معنا (بنفس روح التصميم) */}
        <motion.section
          id="contact"
          variants={fadeIn("up", 0.4)}
          initial={isMobile ? "show" : "hidden"}
          whileInView="show"
          viewport={{ once: true, amount: 0.1 }}
          className="scroll-mt-[100px] text-white px-6 py-12 rounded-lg text-center"
          style={{ backgroundColor: theme.sectionGold }}
        >
          <motion.h2
            variants={textVariant(0.6)}
            className="relative inline-block font-semibold mx-auto mb-4"
            style={{ color: "#fff", fontSize: "clamp(1.75rem, 2.5vw, 3rem)" }}
          >
            تواصل معنا
          </motion.h2>
          <motion.p variants={fadeIn("up", 0.7)} className="text-xl mb-6">
            لأي استفسار أو شراكة، يسعدنا تواصلكم عبر صفحة التواصل.
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
    </div>
  );
};

export default Initiative;
