import React from "react";
import { MapPin, Ruler, Building2, FileDown, Phone } from "lucide-react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

// ⚠️ ضع الصور في مجلد /public ثم حدّث المسارات أدناه
const HERO_IMAGE = "/images/derah1.png"; // صورة الواجهة (تأخذ كامل الصفحة)
const PLAN_IMAGE = "/images/Derah2.png"; // صورة هيكل/مخطط المشروع

// مكوّن Button بسيط
function Button({ children, variant = "solid", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center px-4 py-2 text-sm font-medium rounded-lg transition-colors";
  const solid = "bg-[#ab8e3a] text-white hover:bg-[#8f752f]";
  const outline = "border border-gray-300 text-gray-800 hover:bg-gray-100";

  const styles =
    variant === "outline" ? `${base} ${outline} ${className}` : `${base} ${solid} ${className}`;

  return (
    <button className={styles} {...props}>
      {children}
    </button>
  );
}

// مكوّن Card بسيط
function Card({ children, className = "" }) {
  return <div className={`bg-white border rounded-xl shadow ${className}`}>{children}</div>;
}

function CardHeader({ children, className = "" }) {
  return <div className={`p-4 border-b ${className}`}>{children}</div>;
}

function CardTitle({ children, className = "" }) {
  return <h3 className={`font-semibold ${className}`}>{children}</h3>;
}

function CardContent({ children, className = "" }) {
  return <div className={`p-4 ${className}`}>{children}</div>;
}

export default function ProjectAldeerahPage() {
  const facts = [
    {
      icon: <MapPin className="w-5 h-5" />,
      title: "الموقع",
      value:
        "القصيم – بريدة، طريق الملك عبدالعزيز، واجهة الشارع التجاري، مقابل بلدية الديرة",
    },
    {
      icon: <Ruler className="w-5 h-5" />,
      title: "المساحة الإجمالية للأرض",
      value: "7326 متر مربع ",
    },
    {
      icon: <Building2 className="w-5 h-5" />,
      title: "المساحة الإجمالية للصالات",
      value: "4160 متر مربع ",
    },
  ];

  const halls = [
    { no: 1, area: "242 متر مربع" },
    { no: 2, area: "1501 متر مربع" },
    { no: 3, area: "205 متر مربع"  },
    { no: 4, area: "738 متر مربع" },
    { no: 5, area: "1423 متر مربع"  },
  ];

  return (
    <div className="min-h-screen w-full bg-white text-gray-800">
      <Navbar />

      {/* HERO */}
      <section className="relative w-full h-[70vh] md:h-[82vh]">
        <img
          src={HERO_IMAGE}
          alt="Aldeerah Center — B-IT Fitness Facade"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
        <div className="relative z-10 h-full flex items-end md:items-center justify-center">
        </div>
      </section>

      {/* CONTENT */}
      <section dir="rtl" className="w-[92%] md:w-[86%] mx-auto py-10 md:py-16">
        {/* معلومات سريعة */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {facts.map((f, i) => (
            <Card key={i} className="rounded-2xl">
              <CardHeader className=" bg-[#ab8e3a] text-white overflow-hidden z-10 rounded-t-xl border-black ">
                <CardTitle className="text-base flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-9 h-9 rounded-xl bg-white text-black">
                    {f.icon}
                  </span>
                  {f.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="pt-0 text-gray-700 leading-relaxed">
                {f.value}
              </CardContent>
            </Card>
          ))}
        </div>

        {/* وصف عام */}
        <div className="mt-8 md:mt-12 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3 text-[#ab8e3a]">نبذة عن المشروع</h2>
            <p className="text-gray-700 leading-8">
              مشروع <span className="font-semibold">مركز الديرة</span> ضمن مجموعة العمري
              يوفر واجهة تجارية متميزة مع إمكانية تقسيم المساحات إلى أكثر من قاعة
              تشغيل، إضافةً إلى مواقف واسعة أمامية وخلفية، وواجهة زجاجية بارتفاعٍ كبير
              تمنح حضورًا بصريًا قويًا للعلامة. الموقع استراتيجي على محور رئيسي في
              بريدة، ما يعزز الوصول والحركة التجارية.
            </p>

            <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="text-sm text-gray-600">واجهة الشارع</div>
                  <div className="text-lg font-semibold">25 متر</div>
                </CardContent>
              </Card>
              <Card className="rounded-2xl">
                <CardContent className="p-4">
                  <div className="text-sm text-gray-600">شارع جانبي</div>
                  <div className="text-lg font-semibold">10 متر</div>
                </CardContent>
              </Card>
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-2 text-[#ab8e3a]">تقسيمات الصالات</h3>
              <div className="overflow-hidden rounded-2xl border">
                <table className="w-full text-sm">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="p-3 text-right">الصالة</th>
                      <th className="p-3 text-right">المساحة</th>
                    </tr>
                  </thead>
                  <tbody>
                    {halls.map((h) => (
                      <tr key={h.no} className="odd:bg-white even:bg-gray-50">
                        <td className="p-3">رقم {h.no}</td>
                        <td className="p-3 font-medium">{h.area}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {/* مخطط المشروع */}
          <div>
            <div className="rounded-2xl overflow-hidden shadow-md border">
              <img
                src={PLAN_IMAGE}
                alt="مخطط/هيكل المشروع — مركز الديرة"
                className="w-full h-auto object-contain"
              />
            </div>
          </div>
        </div>

      </section>

      <Footer />
    </div>
  );
}
