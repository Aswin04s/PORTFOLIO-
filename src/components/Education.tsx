
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { GraduationCap, Award, FileText, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section id="education">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Education</h2>
        <div className="space-y-8 max-w-4xl mx-auto">
          {/* College Education */}
          <Card className="card-hover animate-fade-in">
            <CardHeader className="pb-2">
              <div className="flex items-start">
                <div className="mr-4">
                  <GraduationCap className="h-10 w-10 text-portfolio-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-portfolio-dark">
                    Panimalar Institute of Technology, Chennai
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    B.Tech in Artificial Intelligence and Data Science (2021 – 2025)
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="ml-14">
                <p className="text-gray-700 mb-2">GPA: 8.27/10 (till 6th semester)</p>
                <div className="mt-4 space-y-4">
                  <div className="flex items-start">
                    <FileText className="h-5 w-5 text-portfolio-secondary mr-2 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Thesis</h4>
                      <p className="text-gray-700">
                        Decentralizing AI Computing: A Study with IPFS and Public Peer-to-Peer
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start">
                    <BookOpen className="h-5 w-5 text-portfolio-secondary mr-2 mt-1" />
                    <div>
                      <h4 className="font-medium text-gray-800">Notable Course</h4>
                      <p className="text-gray-700">
                        Generative AI for Everyone (Coursera)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* High School Education */}
          <Card className="card-hover animate-fade-in" style={{animationDelay: "0.2s"}}>
            <CardHeader className="pb-2">
              <div className="flex items-start">
                <div className="mr-4">
                  <Award className="h-10 w-10 text-portfolio-primary" />
                </div>
                <div>
                  <CardTitle className="text-xl text-portfolio-dark">
                    Christ The King Matric Hr. Sec. School, Kumbakonam
                  </CardTitle>
                  <CardDescription className="text-gray-600">
                    Higher Secondary Education
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="ml-14 space-y-2">
                <p className="text-gray-700">HSE (2021): 89.2%</p>
                <p className="text-gray-700">SSLC (2019): 89.6%</p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Education;
