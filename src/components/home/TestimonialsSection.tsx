
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { 
  Card, 
  CardContent
} from "@/components/ui/card";
import { 
  ChevronLeft, 
  ChevronRight, 
  Quote 
} from "lucide-react";

const testimonials = [
  {
    name: "ธนกร สุขสว่าง",
    avatar: "T",
    role: "นักธุรกิจ",
    type: "ตนเอง VS คู่รัก",
    testimonial: "ผมไม่เคยเข้าใจว่าทำไมผมกับแฟนถึงทะเลาะกันบ่อย จนได้ทำแบบทดสอบนี้ ทำให้ผมเข้าใจความแตกต่างและรู้วิธีสื่อสารที่ดีขึ้น ตอนนี้ความสัมพันธ์เราดีขึ้นมาก"
  },
  {
    name: "นภัสสร เจริญวงศ์",
    avatar: "น",
    role: "พนักงานบริษัท",
    type: "ตนเอง VS หัวหน้า",
    testimonial: "หลังจากทำแบบทดสอบ ทำให้ดิฉันเข้าใจว่าทำไมถึงรู้สึกอึดอัดเวลาต้องทำงานกับหัวหน้า แบบทดสอบช่วยให้เราเข้าใจกันมากขึ้น การทำงานก็ราบรื่นขึ้นด้วยค่ะ"
  },
  {
    name: "สมชาย ใจดี",
    avatar: "ส",
    role: "ผู้จัดการฝ่ายขาย",
    type: "ตนเอง VS ลูกน้อง",
    testimonial: "ตอนแรกผมคิดว่าปัญหาอยู่ที่ลูกน้อง แต่พอได้ทำแบบทดสอบ กลับทำให้ผมเห็นว่าแท้จริงแล้วเป็นเพราะวิธีสื่อสารของผมเองที่ไม่เหมาะกับพวกเขา ขอบคุณ Identity Code มาก"
  },
  {
    name: "ปิยะดา ศรีวิไล",
    avatar: "ป",
    role: "แม่บ้าน",
    type: "พ่อแม่ VS ลูก",
    testimonial: "ตอนแรกคิดว่าลูกวัยรุ่นไม่เข้าใจ แต่พอได้ทำแบบทดสอบร่วมกัน ทำให้เข้าใจว่าเราแค่มีมุมมองต่างกัน แบบทดสอบนี้ช่วยให้ครอบครัวเราใกล้ชิดกันมากขึ้น"
  },
  {
    name: "วิชัย นวลจันทร์",
    avatar: "ว",
    role: "เจ้าของธุรกิจ",
    type: "ธุรกิจที่เหมาะกับคุณ",
    testimonial: "ก่อนเริ่มธุรกิจใหม่ ผมได้ลองทำแบบทดสอบนี้ ทำให้ค้นพบว่าอะไรเหมาะกับตัวเอง แทนที่จะไปลงทุนในสิ่งที่ไม่ถนัด ตอนนี้ธุรกิจกำลังไปได้ดี"
  },
  {
    name: "กนกวรรณ ศิริวรรณ",
    avatar: "ก",
    role: "นักศึกษา",
    type: "ตนเอง VS คนคุย",
    testimonial: "ไม่คิดว่าการทำแบบทดสอบ 15 นาที จะช่วยให้เข้าใจตัวเองและคนที่กำลังคุยอยู่มากขึ้นขนาดนี้ ขอบคุณ Identity Code ที่ช่วยให้เราเข้าใจกันมากขึ้นค่ะ"
  }
];

const TestimonialsSection = () => {
  const [currentIdx, setCurrentIdx] = useState(0);
  const displayCount = testimonials.length >= 3 ? 3 : testimonials.length;
  
  const next = () => {
    setCurrentIdx((prev) => 
      prev + displayCount >= testimonials.length 
        ? 0 
        : prev + 1
    );
  };
  
  const prev = () => {
    setCurrentIdx((prev) => 
      prev === 0 
        ? Math.max(0, testimonials.length - displayCount) 
        : prev - 1
    );
  };
  
  const visibleTestimonials = testimonials.slice(currentIdx, currentIdx + displayCount);
  
  // Pad with testimonials from the beginning if needed
  if (visibleTestimonials.length < displayCount) {
    visibleTestimonials.push(...testimonials.slice(0, displayCount - visibleTestimonials.length));
  }
  
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            <span>เสียงจาก</span>{" "}
            <span className="gradient-text">ลูกค้าของเรา</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            ดูว่าผู้ใช้ Identity Code พูดถึงเราอย่างไร และการทำแบบทดสอบช่วยพัฒนาความสัมพันธ์ของพวกเขาได้อย่างไร
          </p>
        </div>
        
        <div className="relative">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {visibleTestimonials.map((testimonial, idx) => (
              <Card key={idx} className="h-full">
                <CardContent className="p-6 h-full flex flex-col">
                  <Quote className="h-8 w-8 text-identity-purple opacity-20 mb-4" />
                  <p className="text-gray-600 flex-grow">
                    "{testimonial.testimonial}"
                  </p>
                  
                  <div className="mt-6 flex items-center">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-r from-identity-blue to-identity-purple flex items-center justify-center text-white font-semibold">
                      {testimonial.avatar}
                    </div>
                    <div className="ml-3">
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-gray-500">{testimonial.role} - {testimonial.type}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="flex justify-center gap-4 mt-8">
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={prev}
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>
            <Button 
              variant="outline" 
              size="icon" 
              className="rounded-full"
              onClick={next}
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>
        
        <div className="text-center mt-8">
          <Button asChild className="gradient-bg">
            <a href="/testimonials">ดูรีวิวทั้งหมด</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
