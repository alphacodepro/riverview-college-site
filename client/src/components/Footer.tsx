import { GraduationCap, MapPin, Phone, Mail, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-college-navy text-white py-12" data-testid="footer-main">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8">
          {/* College Info */}
          <div>
            <div className="flex items-center mb-4">
              <GraduationCap className="text-college-gold text-2xl mr-3" size={32} />
              <span className="font-serif font-semibold text-xl">Riverview College</span>
            </div>
            <p className="text-blue-100 mb-4">
              Shaping tomorrow's leaders through academic excellence, innovation, and community engagement.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-social-facebook">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-social-twitter">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-social-instagram">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-social-linkedin">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-footer-about">About Us</a></li>
              <li><a href="/academics" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-footer-academics">Academics</a></li>
              <li><a href="/admissions" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-footer-admissions">Admissions</a></li>
              <li><a href="#" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-footer-student-life">Student Life</a></li>
              <li><a href="#" className="text-blue-100 hover:text-college-gold transition-colors" data-testid="link-footer-alumni">Alumni</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Contact Info</h3>
            <div className="space-y-3">
              <div className="flex items-start">
                <MapPin className="text-college-gold mr-3 mt-1 flex-shrink-0" size={16} />
                <div>
                  <p className="text-blue-100">123 Riverside Drive</p>
                  <p className="text-blue-100">Riverside, CA 92501</p>
                </div>
              </div>
              <div className="flex items-center">
                <Phone className="text-college-gold mr-3 flex-shrink-0" size={16} />
                <p className="text-blue-100">(555) 123-4567</p>
              </div>
              <div className="flex items-center">
                <Mail className="text-college-gold mr-3 flex-shrink-0" size={16} />
                <p className="text-blue-100">info@riverview.edu</p>
              </div>
            </div>
          </div>

          {/* Campus Hours */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Campus Hours</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span className="text-blue-100">Monday - Friday</span>
                <span className="text-blue-100">8:00 AM - 10:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Saturday</span>
                <span className="text-blue-100">9:00 AM - 6:00 PM</span>
              </div>
              <div className="flex justify-between">
                <span className="text-blue-100">Sunday</span>
                <span className="text-blue-100">12:00 PM - 8:00 PM</span>
              </div>
            </div>
          </div>
        </div>
        
        <div className="border-t border-blue-800 mt-8 pt-8 text-center">
          <p className="text-blue-100">© 2024 Riverview College of Arts & Science. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
