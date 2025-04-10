
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Medal } from "lucide-react";

const Certifications = () => {
  const certifications = [
    {
      title: "Data Analytics using Power BI and Python",
      issuer: "TANSAM",
    },
    {
      title: "Python Course",
      issuer: "Dhaval Patel",
    },
    {
      title: "Generative AI for Everyone",
      issuer: "Coursera",
    },
  ];

  return (
    <section id="certifications">
      <div className="container mx-auto px-4">
        <h2 className="section-heading">Certifications</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
          {certifications.map((cert, index) => (
            <Card key={index} className="card-hover animate-fade-in" style={{animationDelay: `${index * 0.1}s`}}>
              <CardHeader className="text-center pb-2">
                <Medal className="h-10 w-10 text-portfolio-primary mx-auto mb-3" />
                <CardTitle className="text-lg text-portfolio-dark">
                  {cert.title}
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <p className="text-gray-600">{cert.issuer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
