
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import AssessmentCategoriesSection from "@/components/home/AssessmentCategoriesSection";

const AssessmentsPage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow">
        <div className="py-16 bg-gradient-to-r from-identity-blue to-identity-purple text-white">
          <div className="container mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-center">แบบทดสอบ</h1>
            <p className="text-xl max-w-3xl mx-auto text-center">
              เลือกแบบทดสอบที่ตรงกับความต้องการของคุณ เพื่อพัฒนาความสัมพันธ์ในทุกมิติของชีวิต
            </p>
          </div>
        </div>
        <AssessmentCategoriesSection />
      </main>
      <Footer />
    </div>
  );
};

export default AssessmentsPage;
