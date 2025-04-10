
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-bold mb-4 text-portfolio-primary">Aswin S</h3>
            <p className="mb-4">
              Aspiring Specialist Programmer with a passion for technology and innovation.
            </p>
            <p className="text-gray-400 italic">
              "Driven by data. Powered by code."
            </p>
          </div>

          <div className="animate-fade-in" style={{animationDelay: "0.1s"}}>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-portfolio-primary mr-3" />
                <a href="mailto:sundarajuaswintdr@gmail.com" className="text-gray-300 hover:text-white">
                  sundarajuaswintdr@gmail.com
                </a>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-portfolio-primary mr-3" />
                <a href="tel:+918940409409" className="text-gray-300 hover:text-white">
                  +91 8940409409
                </a>
              </div>
              <div className="flex items-center">
                <MapPin className="h-5 w-5 text-portfolio-primary mr-3" />
                <span className="text-gray-300">
                  Kumbakonam, Tanjore (Dt), Tamil Nadu
                </span>
              </div>
            </div>
          </div>

          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#home" className="text-gray-300 hover:text-white">Home</a>
              </li>
              <li>
                <a href="#about" className="text-gray-300 hover:text-white">About</a>
              </li>
              <li>
                <a href="#experience" className="text-gray-300 hover:text-white">Experience</a>
              </li>
              <li>
                <a href="#skills" className="text-gray-300 hover:text-white">Skills</a>
              </li>
              <li>
                <a href="#projects" className="text-gray-300 hover:text-white">Projects</a>
              </li>
            </ul>
          </div>

          <div className="animate-fade-in" style={{animationDelay: "0.3s"}}>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-3 mb-6">
              <Button asChild size="icon" variant="ghost" className="text-white hover:text-portfolio-primary hover:bg-gray-800">
                <a href="https://github.com/Aswin04s" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-white hover:text-portfolio-primary hover:bg-gray-800">
                <a href="https://linkedin.com/in/aswin-sundararaju-79403a259" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5" />
                </a>
              </Button>
              <Button asChild size="icon" variant="ghost" className="text-white hover:text-portfolio-primary hover:bg-gray-800">
                <a href="mailto:sundarajuaswintdr@gmail.com">
                  <Mail className="h-5 w-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            &copy; {new Date().getFullYear()} Aswin S. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
