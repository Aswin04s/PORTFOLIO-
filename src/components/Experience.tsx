
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CalendarDays, MapPin } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Experience</h2>
        <div className="max-w-3xl mx-auto">
          <Card className="card-hover animate-fade-in">
            <CardHeader className="pb-2">
              <div className="flex flex-col md:flex-row justify-between md:items-center">
                <CardTitle className="text-xl text-portfolio-dark">
                  Data Analyst Intern | TANSAM
                </CardTitle>
                <div className="flex items-center space-x-4 mt-2 md:mt-0 text-gray-600">
                  <div className="flex items-center">
                    <CalendarDays className="h-4 w-4 mr-1" />
                    <span className="text-sm">March 2024 – April 2024</span>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    <span className="text-sm">Chennai, Tamil Nadu</span>
                  </div>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <ul className="list-disc list-inside space-y-2 text-gray-700">
                <li>
                  Analyzed Twitter data using Python, Power BI, and SQL to identify trends.
                </li>
                <li>
                  Created interactive dashboards and reports.
                </li>
                <li>
                  Collaborated with cross-functional teams for data-driven decisions.
                </li>
                <li>
                  Participated in team meetings to ensure project accuracy.
                </li>
              </ul>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Experience;
