
import { Card, CardContent } from "@/components/ui/card";
import { UserRound, Code, Database, BarChart } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">About Me</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <p className="text-gray-700 mb-6">
              I am an aspiring Specialist Programmer with a passion for technology and 
              innovation. Currently pursuing my B.Tech in Artificial Intelligence and 
              Data Science, I've developed a strong foundation in programming, data analysis, 
              and software development.
            </p>
            <p className="text-gray-700 mb-6">
              My academic journey has equipped me with the technical skills needed in the industry,
              while my internship experience has provided practical exposure to real-world data
              analysis challenges. I am particularly interested in building software solutions that
              harness the power of data to drive insights and innovation.
            </p>
            <p className="text-gray-700">
              I am constantly seeking to expand my knowledge and skills through courses,
              projects, and hands-on experience. My goal is to contribute to the tech
              industry by developing innovative solutions that address complex challenges.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Card className="card-hover animate-fade-in" style={{animationDelay: "0.1s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <UserRound className="h-12 w-12 text-portfolio-primary mb-4" />
                <h3 className="font-semibold text-portfolio-dark mb-2">Software Development</h3>
                <p className="text-gray-600 text-sm">Building efficient and scalable applications</p>
              </CardContent>
            </Card>
            <Card className="card-hover animate-fade-in" style={{animationDelay: "0.2s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Database className="h-12 w-12 text-portfolio-primary mb-4" />
                <h3 className="font-semibold text-portfolio-dark mb-2">Data Analysis</h3>
                <p className="text-gray-600 text-sm">Extracting insights from complex datasets</p>
              </CardContent>
            </Card>
            <Card className="card-hover animate-fade-in" style={{animationDelay: "0.3s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <BarChart className="h-12 w-12 text-portfolio-primary mb-4" />
                <h3 className="font-semibold text-portfolio-dark mb-2">Data Visualization</h3>
                <p className="text-gray-600 text-sm">Creating insightful dashboards and reports</p>
              </CardContent>
            </Card>
            <Card className="card-hover animate-fade-in" style={{animationDelay: "0.4s"}}>
              <CardContent className="p-6 flex flex-col items-center text-center">
                <Code className="h-12 w-12 text-portfolio-primary mb-4" />
                <h3 className="font-semibold text-portfolio-dark mb-2">Web Development</h3>
                <p className="text-gray-600 text-sm">Developing web applications with Django</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
