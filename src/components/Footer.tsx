
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Link to="/" className="flex items-center">
              <span className="text-2xl font-bold gradient-text">Identity Code</span>
            </Link>
            <p className="text-gray-600">
              เข้าใจตัวเอง เข้าใจเขา เข้าใจความสัมพันธ์
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-identity-blue">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-identity-purple">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-red-600">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-blue-400">
                <Twitter className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">แบบทดสอบ</h3>
            <ul className="space-y-2">
              <li><Link to="/assessments/self" className="text-gray-600 hover:text-identity-blue">แบบประเมินตนเอง</Link></li>
              <li><Link to="/assessments/dating" className="text-gray-600 hover:text-identity-blue">ตนเอง VS คนคุย</Link></li>
              <li><Link to="/assessments/couple" className="text-gray-600 hover:text-identity-blue">ตนเอง VS คู่รัก</Link></li>
              <li><Link to="/assessments/boss" className="text-gray-600 hover:text-identity-blue">ตนเอง VS หัวหน้า</Link></li>
              <li><Link to="/assessments/subordinate" className="text-gray-600 hover:text-identity-blue">ตนเอง VS ลูกน้อง</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">แบบทดสอบเพิ่มเติม</h3>
            <ul className="space-y-2">
              <li><Link to="/assessments/coworker" className="text-gray-600 hover:text-identity-blue">ตนเอง VS เพื่อนร่วมงาน</Link></li>
              <li><Link to="/assessments/family" className="text-gray-600 hover:text-identity-blue">พ่อแม่ VS ลูก</Link></li>
              <li><Link to="/assessments/business" className="text-gray-600 hover:text-identity-blue">ธุรกิจที่เหมาะกับคุณ</Link></li>
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold text-lg">เกี่ยวกับเรา</h3>
            <ul className="space-y-2">
              <li><Link to="/about-us" className="text-gray-600 hover:text-identity-blue">เกี่ยวกับเรา</Link></li>
              <li><Link to="/articles" className="text-gray-600 hover:text-identity-blue">บทความ</Link></li>
              <li><Link to="/testimonials" className="text-gray-600 hover:text-identity-blue">รีวิวจากลูกค้า</Link></li>
              <li><Link to="/faq" className="text-gray-600 hover:text-identity-blue">คำถามที่พบบ่อย</Link></li>
              <li><Link to="/affiliate" className="text-gray-600 hover:text-identity-blue">แนะนำเพื่อน</Link></li>
              <li><Link to="/contact" className="text-gray-600 hover:text-identity-blue">ติดต่อเรา</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-gray-200 text-center">
          <p className="text-gray-600">© {new Date().getFullYear()} Identity Code. All rights reserved.</p>
          <div className="mt-2 flex justify-center space-x-4">
            <Link to="/terms" className="text-gray-600 text-sm hover:text-identity-blue">เงื่อนไขการใช้งาน</Link>
            <Link to="/privacy" className="text-gray-600 text-sm hover:text-identity-blue">นโยบายความเป็นส่วนตัว</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
