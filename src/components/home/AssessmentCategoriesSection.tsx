
import { Link } from "react-router-dom";
import {
  Heart,
  Briefcase,
  Users,
  Home,
  Building,
  UserCheck,
  UserPlus,
  User
} from "lucide-react";
import { Button } from "@/components/ui/button";

const categories = [
  {
    icon: <User className="h-10 w-10 text-blue-500" />,
    title: "แบบประเมินตนเอง",
    description: "เข้าใจตัวตน จุดแข็ง จุดอ่อน และสิ่งที่เหมาะกับคุณ",
    link: "/assessments/self",
    color: "from-blue-500 to-blue-700"
  },
  {
    icon: <UserCheck className="h-10 w-10 text-purple-500" />,
    title: "ตนเอง VS คนคุย",
    description: "ประเมินความเข้ากันได้กับคนที่คุณกำลังคุยอยู่",
    link: "/assessments/dating",
    color: "from-purple-500 to-purple-700"
  },
  {
    icon: <Heart className="h-10 w-10 text-pink-500" />,
    title: "ตนเอง VS คู่รัก",
    description: "พัฒนาความสัมพันธ์กับคนรักให้เข้าใจกันมากขึ้น",
    link: "/assessments/couple",
    color: "from-pink-500 to-pink-700"
  },
  {
    icon: <Briefcase className="h-10 w-10 text-teal-500" />,
    title: "ตนเอง VS หัวหน้า",
    description: "ทำงานร่วมกับหัวหน้าอย่างมีประสิทธิภาพมากขึ้น",
    link: "/assessments/boss",
    color: "from-teal-500 to-teal-700"
  },
  {
    icon: <UserPlus className="h-10 w-10 text-amber-500" />,
    title: "ตนเอง VS ลูกน้อง",
    description: "เป็นผู้นำที่ดีและเข้าใจความต้องการของทีม",
    link: "/assessments/subordinate",
    color: "from-amber-500 to-amber-700"
  },
  {
    icon: <Users className="h-10 w-10 text-indigo-500" />,
    title: "ตนเอง VS เพื่อนร่วมงาน",
    description: "สร้างความสัมพันธ์ที่ดีในที่ทำงาน ลดความขัดแย้ง",
    link: "/assessments/coworker",
    color: "from-indigo-500 to-indigo-700"
  },
  {
    icon: <Home className="h-10 w-10 text-green-500" />,
    title: "พ่อแม่ VS ลูก",
    description: "เสริมสร้างความเข้าใจระหว่างผู้ปกครองและเด็ก",
    link: "/assessments/family",
    color: "from-green-500 to-green-700"
  },
  {
    icon: <Building className="h-10 w-10 text-orange-500" />,
    title: "ธุรกิจที่เหมาะกับคุณ",
    description: "ค้นพบแนวทางธุรกิจที่เหมาะกับบุคลิกภาพของคุณ",
    link: "/assessments/business",
    color: "from-orange-500 to-orange-700"
  }
];

const AssessmentCategoriesSection = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">แบบทดสอบ</span> ที่เหมาะกับคุณ
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            เลือกแบบทดสอบที่ตรงกับความต้องการของคุณ เพื่อพัฒนาความสัมพันธ์ในแต่ละด้านของชีวิต
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <Link 
              key={index} 
              to={category.link}
              className="group"
            >
              <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 h-full flex flex-col hover:shadow-md transition-shadow duration-300">
                <div className={`w-16 h-16 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mb-4 text-white`}>
                  {category.icon}
                </div>
                <h3 className="text-xl font-semibold mb-2 group-hover:text-identity-blue transition-colors">{category.title}</h3>
                <p className="text-gray-600 mb-4 flex-grow">{category.description}</p>
                <Button 
                  variant="outline" 
                  size="sm" 
                  className="w-full justify-center mt-auto group-hover:border-identity-blue group-hover:text-identity-blue transition-colors"
                >
                  รายละเอียดเพิ่มเติม
                </Button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AssessmentCategoriesSection;
