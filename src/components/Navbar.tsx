
import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X, ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-sm border-b">
      <div className="container flex items-center justify-between h-16 mx-auto">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold gradient-text">Identity Code</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <DropdownMenu>
            <DropdownMenuTrigger className="flex items-center gap-1 text-gray-700 hover:text-identity-blue transition-colors">
              แบบทดสอบ <ChevronDown className="h-4 w-4" />
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56">
              <Link to="/assessments/self">
                <DropdownMenuItem>แบบประเมินตนเอง</DropdownMenuItem>
              </Link>
              <Link to="/assessments/dating">
                <DropdownMenuItem>ตนเอง VS คนคุย</DropdownMenuItem>
              </Link>
              <Link to="/assessments/couple">
                <DropdownMenuItem>ตนเอง VS คู่รัก</DropdownMenuItem>
              </Link>
              <Link to="/assessments/boss">
                <DropdownMenuItem>ตนเอง VS หัวหน้า</DropdownMenuItem>
              </Link>
              <Link to="/assessments/subordinate">
                <DropdownMenuItem>ตนเอง VS ลูกน้อง</DropdownMenuItem>
              </Link>
              <Link to="/assessments/coworker">
                <DropdownMenuItem>ตนเอง VS เพื่อนร่วมงาน</DropdownMenuItem>
              </Link>
              <Link to="/assessments/family">
                <DropdownMenuItem>พ่อแม่ VS ลูก</DropdownMenuItem>
              </Link>
              <Link to="/assessments/business">
                <DropdownMenuItem>ธุรกิจที่เหมาะกับคุณ</DropdownMenuItem>
              </Link>
            </DropdownMenuContent>
          </DropdownMenu>

          <Link to="/about-us" className="text-gray-700 hover:text-identity-blue transition-colors">
            เกี่ยวกับเรา
          </Link>
          <Link to="/articles" className="text-gray-700 hover:text-identity-blue transition-colors">
            บทความ
          </Link>
          <Link to="/testimonials" className="text-gray-700 hover:text-identity-blue transition-colors">
            รีวิวจากลูกค้า
          </Link>
          <Link to="/faq" className="text-gray-700 hover:text-identity-blue transition-colors">
            คำถามที่พบบ่อย
          </Link>
          <Link to="/affiliate" className="text-gray-700 hover:text-identity-blue transition-colors">
            แนะนำเพื่อน
          </Link>
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <Link to="/login">
            <Button variant="outline">เข้าสู่ระบบ</Button>
          </Link>
          <Link to="/assessments">
            <Button className="gradient-bg">เริ่มทำแบบทดสอบ</Button>
          </Link>
        </div>

        {/* Mobile Navigation Toggle */}
        <button 
          className="md:hidden p-2 text-gray-700"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Mobile Navigation Menu */}
      {isMenuOpen && (
        <div className="md:hidden w-full py-4 px-6 bg-white border-b animate-fade-in">
          <nav className="flex flex-col space-y-4">
            <Link 
              to="/assessments"
              className="flex items-center justify-between text-gray-700 hover:text-identity-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              แบบทดสอบ <ChevronDown className="h-4 w-4" />
            </Link>
            <div className="pl-4 flex flex-col space-y-2">
              <Link 
                to="/assessments/self" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                แบบประเมินตนเอง
              </Link>
              <Link 
                to="/assessments/dating" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                ตนเอง VS คนคุย
              </Link>
              <Link 
                to="/assessments/couple" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                ตนเอง VS คู่รัก
              </Link>
              <Link 
                to="/assessments/boss" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                ตนเอง VS หัวหน้า
              </Link>
              <Link 
                to="/assessments/subordinate" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                ตนเอง VS ลูกน้อง
              </Link>
              <Link 
                to="/assessments/coworker" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                ตนเอง VS เพื่อนร่วมงาน
              </Link>
              <Link 
                to="/assessments/family" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                พ่อแม่ VS ลูก
              </Link>
              <Link 
                to="/assessments/business" 
                className="text-sm text-gray-600"
                onClick={() => setIsMenuOpen(false)}
              >
                ธุรกิจที่เหมาะกับคุณ
              </Link>
            </div>
            
            <Link 
              to="/about-us" 
              className="text-gray-700 hover:text-identity-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              เกี่ยวกับเรา
            </Link>
            <Link 
              to="/articles" 
              className="text-gray-700 hover:text-identity-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              บทความ
            </Link>
            <Link 
              to="/testimonials" 
              className="text-gray-700 hover:text-identity-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              รีวิวจากลูกค้า
            </Link>
            <Link 
              to="/faq" 
              className="text-gray-700 hover:text-identity-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              คำถามที่พบบ่อย
            </Link>
            <Link 
              to="/affiliate" 
              className="text-gray-700 hover:text-identity-blue"
              onClick={() => setIsMenuOpen(false)}
            >
              แนะนำเพื่อน
            </Link>

            <div className="flex flex-col gap-2 pt-2">
              <Link 
                to="/login"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button variant="outline" className="w-full">เข้าสู่ระบบ</Button>
              </Link>
              <Link 
                to="/assessments"
                onClick={() => setIsMenuOpen(false)}
              >
                <Button className="w-full gradient-bg">เริ่มทำแบบทดสอบ</Button>
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;
