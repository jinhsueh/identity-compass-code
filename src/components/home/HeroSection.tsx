
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden pt-12 md:pt-20 pb-16 md:pb-24">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float"></div>
        <div className="absolute top-1/3 -right-24 w-96 h-96 bg-purple-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-float" style={{ animationDelay: "1s" }}></div>
        <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-pink-100 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-float" style={{ animationDelay: "2s" }}></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 text-center lg:text-left mb-10 lg:mb-0">
            <h1 className="text-4xl md:text-5xl xl:text-6xl font-bold mb-6 leading-tight">
              <span>เข้าใจตัวเอง เข้าใจเขา</span> <br />
              <span className="gradient-text">เข้าใจความสัมพันธ์</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 max-w-xl mx-auto lg:mx-0">
              แบบทดสอบที่ช่วยให้คุณเข้าใจตัวเองและคนรอบข้างอย่างลึกซึ้ง 
              เพื่อพัฒนาความสัมพันธ์ในทุกมิติของชีวิตให้ดียิ่งขึ้น
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Link to="/assessments">
                <Button size="lg" className="gradient-bg text-lg">
                  เริ่มทำแบบทดสอบ
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link to="/testimonials">
                <Button size="lg" variant="outline" className="text-lg">
                  ดูรีวิวจากลูกค้า
                </Button>
              </Link>
            </div>
          </div>
          
          <div className="w-full lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-64 h-64 bg-purple-100 rounded-full filter blur-2xl opacity-70"></div>
              <div className="absolute -bottom-10 -right-10 w-72 h-72 bg-blue-100 rounded-full filter blur-2xl opacity-70"></div>
              
              <div className="relative bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100">
                <img 
                  src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&q=80" 
                  alt="คนกำลังทำแบบทดสอบ" 
                  className="w-full h-[400px] md:h-[500px] object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-6 text-white">
                  <p className="font-semibold text-lg">เข้าใจตัวเอง คือ จุดเริ่มต้นของทุกความสัมพันธ์ที่ดี</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
