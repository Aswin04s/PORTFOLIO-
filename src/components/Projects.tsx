
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Twitter, Activity, Stethoscope, FileSpreadsheet } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      title: "Twitter Data Analysis",
      description: "Analyzed Twitter data to identify trends and patterns using advanced data analysis techniques.",
      icon: Twitter,
      technologies: ["Python", "SQL", "Data Analysis"],
    },
    {
      title: "Hospitality Domain Data Analysis",
      description: "Performed comprehensive data analysis for the hospitality sector to drive business insights.",
      icon: Activity,
      technologies: ["Power BI", "Python", "Excel"],
    },
    {
      title: "Medical Data Extraction",
      description: "Developed a system to extract and process medical data from various sources.",
      icon: Stethoscope,
      technologies: ["Python", "Data Processing"],
    },
    {
      title: "Python Automation for Spreadsheet Processing",
      description: "Created automated solutions for processing and analyzing spreadsheet data.",
      icon: FileSpreadsheet,
      technologies: ["Python", "Excel", "Automation"],
    },
  ];

  return (
    <section id="projects" className="bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="pb-2">
                <div className="flex items-center mb-3">
                  <project.icon className="h-8 w-8 text-portfolio-primary mr-3" />
                  <CardTitle className="text-xl text-portfolio-dark">
                    {project.title}
                  </CardTitle>
                </div>
                <CardDescription className="text-gray-700">
                  {project.description}
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge key={techIndex} variant="secondary">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
