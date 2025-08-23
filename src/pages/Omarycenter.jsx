import React from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Footer from "../components/Footer";
import { Card, CardContent } from '../components/ui/Card';
import { Button } from '../components/ui/Button';
import { staggerContainer, textVariant, fadeIn } from "../utils/motion";
import { motion } from "framer-motion";
import { Badge } from '../components/ui/Badge';
import {
  Building2,
  MapPin,
  Calendar,
  DollarSign,
  Users,
  Home,
  Store,
  Car,
  TreePine,
  Phone,
  Mail,
  ArrowLeft,
  Star
} from "lucide-react";
import projectHero from "../../public/images/omaryCenter.png";
import patternBg from "../../public/images/omaryCenter.png";
import { Link } from "react-router-dom";

const Omarycenter = () => {
  const features = [
    { icon: Store, title: "مناطق تجارية", description: "محلات ومطاعم وكافيهات متنوعة" },
    { icon: Car, title: "مواقف سيارات", description: "مواقف واسعة ومريحة" },
    { icon: Star, title: "مسجد", description: "مسجد مجهز بالكامل" },
    { icon: Users, title: "خدمات متكاملة", description: "دعم تقني وحضوري" }
  ];

  const phases = [
    {
      title: "المرحلة الأولى",
      year: "2015",
      description: "افتتاح المشروع بحضور الأمير فيصل بن مشعل",
      status: "مكتمل"
    },
    {
      title: "المرحلة الثانية",
      year: "2016+",
      description: "التوسعة لتلبية الطلب المتزايد من الشركات",
      status: "مكتمل"
    }
  ];


  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <Navbar />
      <Hero video="OmaryCenter" />

      {/* Overview */}
      <section className="py-16 bg-cream/50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-extrabold text-[#ab8e3a] mb-6 tracking-tight">
              لمحة عامة عن المشروع
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed font-medium">
              مشروع تطويري بارز يهدف إلى دعم قطاع الأعمال المحلي وخلق فرص استثمارية متميزة في منطقة القصيم
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="group shadow-[#ab8e3a] transition-all duration-300 bg-gradient-card   border-[#ab8e3a]/20">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 mx-auto mb-6 bg-[#ab8e3a] rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <feature.icon className="w-8 h-8 text-navy text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-navy mb-3 text-[#ab8e3a]">{feature.title}</h3>
                  <p className="text-muted-foreground leading-relaxed font-medium">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Project Phases */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className=" text-navy text-center text-4xl font-extrabold text-[#ab8e3a] mb-6 tracking-tight">
            مراحل إنجاز المشروع
          </h2>

          <div className="max-w-4xl mx-auto">
            {phases.map((phase, index) => (
              <div key={index} className="relative mb-8 last:mb-0">
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0 w-4 h-4 bg-[#ab8e3a] rounded-full mt-2 relative">
                    {index < phases.length - 1 && (
                      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-0.5 h-16 bg-[#ab8e3a]/30"></div>
                    )}
                  </div>
                  <Card className="flex-1 bg-gradient-card border-[#ab8e3a]/20 hover:shadow-[#ab8e3a] transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center justify-between mb-4">
                        <h3 className="text-2xl font-bold text-navy text-[#ab8e3a]">{phase.title}</h3>
                        <div className="flex items-center gap-4">
                          <Badge variant="outline" className="border-[#ab8e3a] text-[#ab8e3a] font-medium text-md">
                            {phase.year}
                          </Badge>
                          <Badge className="bg-[#ab8e3a] text-navy font-medium text-md text-white">
                            {phase.status}
                          </Badge>
                        </div>
                      </div>
                      <p className="text-muted-foreground leading-relaxed font-medium text-[#ab8e3a] text-md">{phase.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* Contact Section */}
      <div className="flex justify-center items-center">
        <motion.section
          id="contact"
          variants={fadeIn("up", 0.4)}
          initial={"hidden"}
          whileInView="show"
          viewport={{ once: false, amount: 0.1 }}
          className="scroll-mt-[100px] bg-[#ab8e3a] text-white px-6 py-12 rounded-lg text-center w-5xl m-12"
        >
          <motion.h2
            variants={textVariant(0.6)}
            className="relative inline-block text-white text-3xl sm:text-4xl md:text-5xl font-semibold mx-auto mb-4"
          >
            تواصل معنا

          </motion.h2>
          <motion.p
            variants={fadeIn("up", 0.7)}
            className="text-xl sm:text-2xl mb-6"
          >
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
      </div>

      <Footer />
    </div>
  );
};

export default Omarycenter;