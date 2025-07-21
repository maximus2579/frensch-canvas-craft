import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    service: "",
    message: ""
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Here you would typically send the form data to a server
    toast({
      title: "Offerte aanvraag verzonden!",
      description: "Wij nemen binnen 24 uur contact met u op.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      address: "",
      service: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: <Phone className="h-6 w-6" />,
      title: "Telefoon",
      info: "+31 (0)123 456 789",
      action: () => window.open("tel:+31123456789", "_self")
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "E-mail",
      info: "info@schildersbedrijf-frensch.nl",
      action: () => window.open("mailto:info@schildersbedrijf-frensch.nl", "_self")
    },
    {
      icon: <MapPin className="h-6 w-6" />,
      title: "Adres",
      info: "Hoofdstraat 123, 1234 AB Voorbeeld",
      action: () => window.open("https://maps.google.com/?q=Hoofdstraat+123+Voorbeeld", "_blank")
    },
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Openingstijden",
      info: "Ma-Vr: 8:00-17:00",
      action: null
    }
  ];

  return (
    <section id="contact" className="py-20 bg-section-gradient">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact & Offerte</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Vraag vrijblijvend een offerte aan of neem direct contact met ons op. 
            Wij helpen u graag verder met al uw schildervragen.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Form */}
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl">Offerte Aanvragen</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name">Naam *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      placeholder="Uw volledige naam"
                    />
                  </div>
                  <div>
                    <Label htmlFor="phone">Telefoon *</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      placeholder="Uw telefoonnummer"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="email">E-mail *</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    placeholder="uw.email@example.nl"
                  />
                </div>

                <div>
                  <Label htmlFor="address">Adres</Label>
                  <Input
                    id="address"
                    name="address"
                    value={formData.address}
                    onChange={handleInputChange}
                    placeholder="Straat + huisnummer, postcode, plaats"
                  />
                </div>

                <div>
                  <Label htmlFor="service">Type Werk</Label>
                  <select
                    id="service"
                    name="service"
                    value={formData.service}
                    onChange={handleInputChange}
                    className="w-full px-3 py-2 border border-input rounded-md bg-background"
                  >
                    <option value="">Selecteer type werk</option>
                    <option value="binnen">Binnenschilderwerk</option>
                    <option value="buiten">Buitenschilderwerk</option>
                    <option value="commercieel">Commercieel</option>
                    <option value="onderhoud">Onderhoud</option>
                    <option value="advies">Kleuradvies</option>
                  </select>
                </div>

                <div>
                  <Label htmlFor="message">Omschrijving *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    placeholder="Beschrijf uw project zo gedetailleerd mogelijk..."
                    rows={4}
                  />
                </div>

                <Button type="submit" size="lg" className="w-full">
                  Verstuur Aanvraag
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <div>
              <h3 className="text-2xl font-bold mb-6">Contactgegevens</h3>
              <div className="space-y-4">
                {contactInfo.map((item, index) => (
                  <Card 
                    key={index} 
                    className={`p-4 ${item.action ? 'cursor-pointer hover:shadow-md transition-shadow' : ''}`}
                    onClick={item.action || undefined}
                  >
                    <CardContent className="p-0">
                      <div className="flex items-center gap-4">
                        <div className="text-primary">
                          {item.icon}
                        </div>
                        <div>
                          <div className="font-semibold">{item.title}</div>
                          <div className="text-muted-foreground">{item.info}</div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <Card className="p-6 bg-primary text-primary-foreground">
              <CardContent className="p-0 text-center">
                <h4 className="text-xl font-bold mb-2">Gratis Offerte</h4>
                <p className="mb-4">
                  Binnen 24 uur een vrijblijvende offerte op maat, 
                  aangepast aan uw specifieke wensen en budget.
                </p>
                <div className="flex items-center justify-center gap-2 text-sm">
                  <CheckCircle className="h-4 w-4" />
                  <span>Geen verplichtingen</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

const CheckCircle = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export default Contact;