import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Award, Users, Clock } from "lucide-react";

const About = () => {
  const features = [
    {
      icon: <Award className="h-8 w-8" />,
      title: "Gecertificeerd Vakmanschap",
      description: "Alle medewerkers zijn opgeleid en gecertificeerd volgens de laatste standaarden."
    },
    {
      icon: <Clock className="h-8 w-8" />,
      title: "Betrouwbaar & Punctueel", 
      description: "Wij respecteren afspraken en leveren altijd op tijd volgens planning."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Klanttevredenheid",
      description: "Meer dan 95% van onze klanten beveelt ons aan bij familie en vrienden."
    }
  ];

  const values = [
    "Gebruik van hoogwaardige materialen",
    "Eerlijke en transparante prijzen",
    "Gratis vrijblijvende offerte",
    "Garantie op al ons werk",
    "Opruimen en netjes achterlaten",
    "Persoonlijke begeleiding van A tot Z"
  ];

  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Meer dan 20 jaar
              <span className="block text-primary">uw schilderspecialist</span>
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Schildersbedrijf Frensch is al sinds 2003 actief in de regio en heeft zich 
              ontwikkeld tot een betrouwbare partner voor particulieren en bedrijven. 
              Met ons ervaren team zorgen wij voor vakkundig schilderwerk van de hoogste kwaliteit.
            </p>

            <div className="space-y-4 mb-8">
              {values.map((value, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{value}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <Card key={index} className="p-6 hover:shadow-md transition-shadow">
                <CardContent className="p-0">
                  <div className="flex items-start gap-4">
                    <div className="text-primary mt-1">
                      {feature.icon}
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                      <p className="text-muted-foreground">{feature.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">20+</div>
            <div className="text-muted-foreground">Jaar ervaring</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">500+</div>
            <div className="text-muted-foreground">Projecten voltooid</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">95%</div>
            <div className="text-muted-foreground">Klanten tevreden</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-primary mb-2">24/7</div>
            <div className="text-muted-foreground">Service beschikbaar</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;