
import { Heart, Briefcase, Users, Home, Star } from "lucide-react";

const FeatureSection = () => {
  const features = [
    {
      icon: <Heart className="h-10 w-10 text-pink-500" />,
      title: "ความสัมพันธ์และความรัก",
      description: "เข้าใจรูปแบบความสัมพันธ์ของคุณและคู่รัก เพื่อลดความขัดแย้งและสร้างความเข้าใจที่ลึกซึ้ง"
    },
    {
      icon: <Briefcase className="h-10 w-10 text-blue-500" />,
      title: "การทำงานและอาชีพ",
      description: "ค้นพบวิธีการทำงานที่เหมาะกับคุณ และเรียนรู้วิธีร่วมงานกับผู้อื่นอย่างมีประสิทธิภาพ"
    },
    {
      icon: <Users className="h-10 w-10 text-purple-500" />,
      title: "มิตรภาพและความสัมพันธ์ทางสังคม",
      description: "พัฒนาความสัมพันธ์กับเพื่อนร่วมงานและคนรอบข้างด้วยความเข้าใจในตัวตนที่แตกต่าง"
    },
    {
      icon: <Home className="h-10 w-10 text-green-500" />,
      title: "ครอบครัวและการเลี้ยงดู",
      description: "สร้างความเข้าใจระหว่างพ่อแม่และลูก เพื่อความสัมพันธ์ที่แน่นแฟ้นและการเติบโตที่สมบูรณ์"
    },
    {
      icon: <Star className="h-10 w-10 text-yellow-500" />,
      title: "การพัฒนาตนเอง",
      description: "รู้จักจุดแข็ง จุดอ่อน และวิธีการพัฒนาตนเองเพื่อชีวิตที่สมดุลและมีความสุขมากขึ้น"
    }
  ];
  
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span className="gradient-text">ทำไมต้อง</span> Identity Code
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            แบบทดสอบที่ออกแบบโดยผู้เชี่ยวชาญด้านจิตวิทยาและพฤติกรรมศาสตร์ 
            เพื่อช่วยให้คุณเข้าใจตัวเองและคนรอบข้างได้อย่างลึกซึ้ง
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow duration-300">
              <div className="bg-gray-50 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeatureSection;
