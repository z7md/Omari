// src/pages/Initiative.jsx
import React, { useState, useEffect } from 'react';
import { HiChevronDown, HiChevronUp } from 'react-icons/hi';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

export const Initiative = () => {
  // Sample initiatives data
  const initiatives = [
    {
      id: 1,
      title: "مبادرة تاجر التمور",
      images: [
        "/images/dates1.png",
        "/images/dates2.png",
        "/images/dates3.png",
        // "/images/B-IT.png"
      ],
      article: `شكر صاحب السمو األمير الدكتور فيصل بن مشعل بن سعود بن عبدالعزيز أمير منطقة القصيم
رجل األعمال ماجد بن ناصر الُعمري، نظير ما قدمته مبادرة "تاجر التمور" التي تضمنت عددًا من الدورات التدريبية المهمة
في دعم الشباب في تجارة التمور التي أقيمت على هامش فعاليات موسم التمور في بريدة. وقال األمير فيصل في
خطاب شكر بعث به الى الُعمري:" اطلعنا على التقرير الختامي لمبادرة "تاجر التمور" إحدى مبادرات الُعمري لخدمة المجتمع
،"والتي أقيمت تزامنًا مع موسم التمور في بريدة وما تضمنه من دورات تدريبية مهمة في دعم الشباب في تجارة التمور
."واضاف سموه الكريم بالقول:" سرنا ما احتواه التقرير ونشكر لكم الجهود المبذولة والسالم عليكم
يشار إىل أن مبادرة "تاجر التمور" تتضمن دورات تدريبية للشباب والفتيات، في مجاالت تجارة وتسويق التمور، والتسويق
إاللكتروني، والتغليف والتصنيع، وصناعة العالمة التجارية، وقد أقيمت في مقر غرفة القصيم بالتعاون مع الغرفة..
وتضمن التدريب لقاءات مع أصحاب تجارب ناجحة في تجارة التمور، كما قدمت مبادرة "تاجر التمور" دعمًا ماديًا وتقنيًا فنيًا
تصميم الهوية التجارية لكل مشروع
.لتأسيس متاجر إلكترونية، مع استمرار الدعم لمدة عام، متضمنة أيضًا
يشار الى أن مبادرة "تاجر التمور" تعد إحدى المبادرات التي طرحتها "الُعمري لخدمة المجتمع" التي أسسها ويرأسها رجال
األعمال ماجد بن ناصر الُعمري، وتقدم مبادرات تنموية لخدمة المجتمع، وتؤسس لمشروعات تتسم باالستدامة لخدمة
منطقة القصيم وأبنائها. وأكد ماجد الُعمري: أن هذه المبادرة وغيرها من المبادرات التي تشرف "الُعمري لخدمة
المجتمع" بطرحها تعكس التزامنا في مجموعة الُعمري االستثمارية، عىل رفد وتعضيد الجهود الحكومية الرامية إىل تنمية
الى المجموعة ماضية في تحقيق
المجتمع، ورفع مساهمة القطاع غير الربحي في مكونات التنمية المختلفة، الفتًا
أهدافها من خالل "الُعمري لخدمة المجتمع"، لدعم الشباب، والتوسع في فرص التوطين، وتأسيس األعمال`
    },
    {
      id: 2,
      title: "المبادرة الثانية",
      images: [
        "https://via.placeholder.com/800x600?text=صورة+5",
        "https://via.placeholder.com/800x600?text=صورة+6",
        "https://via.placeholder.com/800x600?text=صورة+7"
      ],
      article: "هذا نص المقالة للمبادرة الثانية. يمكن أن يحتوي على تفاصيل حول أهداف المبادرة والإنجازات التي حققتها والجهات المشاركة فيها. النص هنا كمثال فقط وسيتم استبداله بالنص الفعلي للمبادرة."
    },
    {
      id: 3,
      title: "المبادرة الثالثة",
      images: [
        "https://via.placeholder.com/800x600?text=صورة+8",
        "https://via.placeholder.com/800x600?text=صورة+9",
        "https://via.placeholder.com/800x600?text=صورة+10",
        "https://via.placeholder.com/800x600?text=صورة+11",
        "https://via.placeholder.com/800x600?text=صورة+12"
      ],
      article: "هذا نص المقالة للمبادرة الثالثة. يمكن أن يحتوي على تفاصيل حول أهداف المبادرة والإنجازات التي حققتها والجهات المشاركة فيها. النص هنا كمثال فقط وسيتم استبداله بالنص الفعلي للمبادرة."
    }
  ];

  // State to track which initiative is expanded
  const [expandedInitiative, setExpandedInitiative] = useState(1);

  // Toggle initiative expansion
  const toggleInitiative = (id) => {
    setExpandedInitiative(prev => (prev === id ? null : id));
  };

  // On mount, scroll into view the first initiative container
  useEffect(() => {
    const firstEl = document.getElementById('initiative-1');
    if (firstEl) {
      firstEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, []);

  return (
    <>
      <Navbar/>
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
      <div className="min-h-screen bg-white py-8 px-4 sm:px-6 lg:px-8 mt-[70px] md:mt-[100px]">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-2xl sm:text-3xl font-bold text-center text-[#ab8e3a] mb-8 sm:mb-12">
            العمري لخدمة المجتمع
          </h1>
          <div className="space-y-4">
            {initiatives.map((initiative) => (
              <div
                key={initiative.id}
                id={`initiative-${initiative.id}`}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-[#ab8e3a]"
              >
                {/* Initiative Header */}
                <button
                  onClick={() => toggleInitiative(initiative.id)}
                  className={`w-full flex justify-between items-center p-4 sm:p-6 text-right focus:outline-none transition-colors ${
                    expandedInitiative === initiative.id
                      ? 'bg-white text-[#ab8e3a] hover:text-[#ab8e3a]'
                      : 'bg-[#ab8e3a] text-white'
                  }`}
                >
                  <h2 className="text-lg sm:text-xl font-semibold">
                    {initiative.title}
                  </h2>
                  {expandedInitiative === initiative.id ? (
                    <HiChevronUp className="h-5 w-5 sm:h-6 sm:w-6" />
                  ) : (
                    <HiChevronDown className="h-5 w-5 sm:h-6 sm:w-6" />
                  )}
                </button>

                {/* Initiative Content */}
                {expandedInitiative === initiative.id && (
                  <div className="px-4 sm:px-6 pb-4 sm:pb-6 bg-[#ab8e3a]">
                    {/* Images Gallery with Swiper */}
                    <div className="mb-4 sm:mb-6">
                      <Swiper
                        modules={[Navigation, Pagination, Autoplay]}
                        spaceBetween={16}
                        slidesPerView={1}
                        navigation
                        pagination={{ clickable: true }}
                        loop
                        grabCursor
                        autoplay={{
                          delay: 3000,
                          disableOnInteraction: false,
                          pauseOnMouseEnter: true
                        }}
                        breakpoints={{ 320: { slidesPerView: 1 } }}
                        className="rounded-lg border-2 border-[#ab8e3a] p-1 sm:p-2 bg-white"
                      >
                        {initiative.images.map((image, idx) => (
                          <SwiperSlide key={idx}>
                            <div className="flex items-center justify-center h-full p-1 sm:p-2 mt-4 sm:mt-6">
                              <img
                                src={image}
                                alt={`صورة ${idx + 1} للمبادرة ${initiative.title}`}
                                className="w-full sm:h-64 rounded-lg h-[400px] object-contain"
                              />
                            </div>
                          </SwiperSlide>
                        ))}
                      </Swiper>
                    </div>
                    {/* Article */}
                    <div className="prose prose-sm sm:prose-lg text-lg text-gray-800 max-w-none bg-white p-4 sm:p-6 rounded-lg border border-[#ab8e3a]">
                      <p>{initiative.article}</p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Initiative;
