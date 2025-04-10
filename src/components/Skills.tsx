
import { Card, CardContent } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const Skills = () => {
  const technicalSkills = [
    { name: "Python", percentage: 85 },
    { name: "SQL", percentage: 80 },
    { name: "Power BI", percentage: 75 },
    { name: "Excel", percentage: 85 },
    { name: "Django", percentage: 70 },
  ];

  const softSkills = [
    { name: "Communication & Collaboration", percentage: 90 },
    { name: "Adaptability", percentage: 85 },
    { name: "Continuous Learning", percentage: 95 },
    { name: "Problem Solving", percentage: 85 },
  ];

  return (
    <section id="skills" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="animate-fade-in">
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">
              Technical Skills
            </h3>
            <div className="space-y-6">
              {technicalSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
          <div className="animate-fade-in" style={{animationDelay: "0.2s"}}>
            <h3 className="text-xl font-semibold mb-6 text-portfolio-dark">
              Soft Skills
            </h3>
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex justify-between">
                    <span className="font-medium text-gray-700">{skill.name}</span>
                    <span className="text-gray-500">{skill.percentage}%</span>
                  </div>
                  <Progress value={skill.percentage} className="h-2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
