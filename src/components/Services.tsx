import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Home, Building2, Paintbrush, Palette } from "lucide-react";
import interiorImage from "@/assets/interior-painting.jpg";
import exteriorImage from "@/assets/exterior-painting.jpg";
import commercialImage from "@/assets/commercial-painting.jpg";

const Services = () => {
  const services = [
    {
      title: "Binnenschilderwerk",
      description: "Professioneel schilderen van wanden, plafonds en houtwerk in uw woning of kantoor.",
      icon: <Home className="h-8 w-8" />,
      image: interiorImage,
      features: ["Muurverf", "Latex spuiten", "Houtwerk", "Behang verwijderen"]
    },
    {
      title: "Buitenschilderwerk", 
      description: "Bescherming en verfraaiing van uw gevel, kozijnen en buitenhoutwerk.",
      icon: <Building2 className="h-8 w-8" />,
      image: exteriorImage,
      features: ["Gevelreiniging", "Kozijnen", "Dakgoten", "Weersbestendig"]
    },
    {
      title: "Commercieel Schilderwerk",
      description: "Groot- en kleinschalige schilderprojecten voor bedrijven en instellingen.",
      icon: <Paintbrush className="h-8 w-8" />,
      image: commercialImage,
      features: ["Kantoorgebouwen", "Winkels", "Scholen", "Ziekenhuizen"]
    },
    {
      title: "Kleuradvies",
      description: "Deskundig advies bij het kiezen van de juiste kleuren en materialen.",
      icon: <Palette className="h-8 w-8" />,
      image: null,
      features: ["Kleurenschema's", "Materiaaladvies", "Trendinzicht", "3D Visualisatie"]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="services" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Onze Diensten</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Van klein onderhoudswerk tot grote renovatieprojecten. 
            Wij verzorgen al uw schilderwerk met vakmanschap en oog voor detail.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="overflow-hidden hover:shadow-lg transition-shadow group">
              {service.image && (
                <div className="h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              )}
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="text-primary">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
                <CardDescription className="text-base">
                  {service.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 mb-4">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-muted-foreground">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Button size="lg" onClick={scrollToContact} className="px-8 py-6 text-lg">
            Vraag Uw Offerte Aan
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;