
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, MapPin } from "lucide-react";

const Hero = () => {
  return (
    <section id="home" className="pt-32 pb-16 md:pt-40 md:pb-20">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between">
          <div className="md:w-3/5 mb-10 md:mb-0 animate-fade-in">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-portfolio-dark mb-4">
              Hello, I'm <span className="text-portfolio-primary">Aswin S</span>
            </h1>
            <h2 className="text-xl md:text-2xl font-medium text-gray-600 mb-6">
              Aspiring Specialist Programmer
            </h2>
            <p className="text-gray-700 mb-8 max-w-2xl">
              Aspiring Specialist Programmer with a strong foundation in computer science 
              and hands-on experience in software development. Proficient in Python 
              and SQL, and committed to continuous learning and delivering high-quality solutions.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button asChild className="bg-portfolio-primary hover:bg-portfolio-accent">
                <a href="#contact">Contact Me</a>
              </Button>
              <Button asChild variant="outline">
                <a href="#projects">View Projects</a>
              </Button>
            </div>
          </div>
          <div className="md:w-2/5 animate-fade-in" style={{animationDelay: "0.2s"}}>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-4 text-portfolio-dark">
                Contact Details
              </h3>
              <div className="space-y-4">
                <div className="flex items-center">
                  <Mail className="h-5 w-5 text-portfolio-primary mr-3" />
                  <a href="mailto:sundarajuaswintdr@gmail.com" className="text-gray-700 hover:text-portfolio-primary">
                    sundarajuaswintdr@gmail.com
                  </a>
                </div>
                <div className="flex items-center">
                  <Phone className="h-5 w-5 text-portfolio-primary mr-3" />
                  <a href="tel:+918940409409" className="text-gray-700 hover:text-portfolio-primary">
                    +91 8940409409
                  </a>
                </div>
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 text-portfolio-primary mr-3" />
                  <span className="text-gray-700">
                    Kumbakonam, Tanjore (Dt), Tamil Nadu
                  </span>
                </div>
                <div className="flex items-center">
                  <Github className="h-5 w-5 text-portfolio-primary mr-3" />
                  <a href="https://github.com/Aswin04s" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary">
                    github.com/Aswin04s
                  </a>
                </div>
                <div className="flex items-center">
                  <Linkedin className="h-5 w-5 text-portfolio-primary mr-3" />
                  <a href="https://linkedin.com/in/aswin-sundararaju-79403a259" target="_blank" rel="noopener noreferrer" className="text-gray-700 hover:text-portfolio-primary">
                    linkedin.com/in/aswin-sundararaju-79403a259
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
