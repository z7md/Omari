import React from 'react';
import { Card, CardContent } from './ui/Card';
import { Button } from './ui/Button';
import { Badge } from './ui/Badge';
import { Link } from 'react-router-dom';
import { HiLocationMarker, HiArrowLeft } from 'react-icons/hi';
import { GiPositionMarker } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import project1 from "../../public/images/ishbilia.png";
import project2 from "../../public/images/omaryCenter.png";
import project3 from "../../public/images/social.png";
import project4 from "../../public/images/derah1.png";

const ProjectsSection = () => {
  const projects = [
    {
      id: 1,
      href:"/projects/ishbilia",
      title: 'مخطط اشبيليا',
      location: 'شمال بريدة',
      type: 'سكني',
      status: 'قيد الانشاء',
      image: project1,
      description: 'مجمع سكني فاخر يحتوي على 200 وحدة سكنية متنوعة مع جميع الخدمات والمرافق الحديثة',
      features: ['مساحات خضراء', 'نادي رياضي', 'أمن 24 ساعة', 'مواقف كافية']
    },
    {
      id: 2,
      href:"/projects/omarycenter",
      title: 'العمري سنتر',
      location: 'طريق أبو بكر الصديق',
      type: 'تجاري',
      status: '',
      image: project2,
      description: 'برج تجاري متطور يضم مكاتب ومحلات تجارية ومطاعم بتصميم عصري وموقع استراتيجي',
      features: ['30 طابق', 'مكاتب ذكية', 'مركز تسوق', 'مواقف متعددة الطوابق']
    },
    {
      id: 3,
      href:"/projects/initiative",
      title: 'العمري لخدمة المجتمع',
      location: 'بريدة',
      type: 'أنساني',
      status: '',
      image: project3,
      description: "مؤسسة غير ربحية",
      features: ['مبادرات']
    },
    {
      id: 4,
      href:"/projects/derahcenter",
      title: 'مركز الديرة',
      location: 'جنوب بريدة',
      type: 'تجاري',
      status: '',
      image: project4,
      description: 'مشروع مختلط يجمع بين الوحدات السكنية والتجارية والترفيهية في تصميم واحد متكامل',
      features: ['استخدام مختلط', 'تقنيات ذكية', 'صديق للبيئة', 'مرافق متكاملة']
    }
  ];



  const getStatusColor = (status: string) => {
    switch (status) {
      case 'مكتمل':
        return 'bg-green-500';
      case 'قيد الإنشاء':
        return 'bg-blue-500';
      case 'متاح للحجز':
        return 'bg-[#ab8e3a]';
      case 'قريباً':
        return 'bg-gray-400';
        case '':
          return 'hidden';
      default:
        return 'bg-gray-400';
    }
  };

  return (
    <section className="py-20" dir="rtl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-[#ab8e3a] mb-6">
            مشاريعنا
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {projects.map((project) => (
            <Card
              key={project.id}
              className="group overflow-hidden shadow-lg hover:shadow-[#ab8e3a]/30 transition-shadow duration-300"
            >
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4">
                  <Badge className={`${getStatusColor(project.status)} text-white`}>
                    {project.status}
                  </Badge>
                </div>
                <div className="absolute top-4 left-4">
                  <Badge variant="secondary" className="bg-white/90 text-[#ab8e3a] border-[#ab8e3a]">
                    {project.type}
                  </Badge>
                </div>
              </div>
              
              <CardContent className="p-6">
                {/* Location with icon */}
                <div className="flex items-center space-x-1 space-x-reverse mb-2 text-gray-600 text-sm">
                  <FaMapMarkerAlt className="h-4 w-4 text-[#ab8e3a] ml-2" />
                  <span>{project.location}</span>
                </div>
                
                <h3 className="text-2xl  text-gray-900 mb-3 group-hover:text-[#ab8e3a] transition-colors">
                  {project.title}
                </h3>
                
                {/* <p className="text-gray-700 mb-4 leading-relaxed">
                  {project.description}
                </p> */}
                
                {/* <div className="flex flex-wrap gap-2 mb-6">
                  {project.features.map((feature, idx) => (
                    <Badge
                      key={idx}
                      variant="outline"
                      className="text-xs border-[#ab8e3a] text-[#ab8e3a]"
                    >
                      {feature}
                    </Badge>
                  ))}
                </div> */}
                
                {/* Details Button with left arrow */}
                <Button 
                  asChild
                  className="w-full bg-[#ab8e3a] hover:bg-[#ab8e3a]/90 text-white flex items-center justify-center"
                >
                  <Link to={`${project.href}`} className="flex items-center">

                    عرض التفاصيل
                                        <HiArrowLeft className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
{/* 
        <div className="text-center">
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="border-[#ab8e3a] text-[#ab8e3a] hover:bg-[#ab8e3a] hover:text-white px-8 py-6 text-lg flex items-center justify-center"
          >
            <Link to="/projects" className="flex items-center">
              <HiArrowLeft className="ml-2 h-5 w-5" />
              عرض جميع المشاريع
            </Link>
          </Button>
        </div> */}
      </div>
    </section>
  );
};

export default ProjectsSection;
