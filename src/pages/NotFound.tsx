
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-grow flex items-center justify-center">
        <div className="text-center px-4 py-20">
          <h1 className="text-6xl md:text-8xl font-bold mb-4 gradient-text">404</h1>
          <p className="text-2xl md:text-3xl text-gray-700 mb-6">ไม่พบหน้าที่คุณกำลังค้นหา</p>
          <p className="text-gray-600 mb-8 max-w-md mx-auto">หน้าที่คุณพยายามเข้าถึงอาจถูกย้าย ถูกลบ หรือไม่เคยมีอยู่</p>
          <Button asChild className="gradient-bg">
            <a href="/">กลับไปหน้าแรก</a>
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default NotFound;
