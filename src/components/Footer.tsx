import { MapPin, Phone, Mail } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <img 
              src="/lovable-uploads/f06e2e26-2c42-4a80-ac39-5c21726b02c5.png" 
              alt="Schildersbedrijf Frensch Logo" 
              className="h-12 w-auto mb-4 brightness-0 invert"
            />
            <p className="text-primary-foreground/80 mb-4">
              Al meer dan 20 jaar uw betrouwbare partner voor professioneel 
              schilderwerk in de regio. Kwaliteit en vakmanschap staan centraal.
            </p>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center gap-3">
                <Phone className="h-4 w-4" />
                <span>+31 (0)123 456 789</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="h-4 w-4" />
                <span>info@schildersbedrijf-frensch.nl</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="h-4 w-4" />
                <span>Hoofdstraat 123<br />1234 AB Voorbeeld</span>
              </div>
            </div>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Diensten</h3>
            <ul className="space-y-2 text-primary-foreground/80">
              <li>Binnenschilderwerk</li>
              <li>Buitenschilderwerk</li>
              <li>Commercieel schilderwerk</li>
              <li>Kleuradvies</li>
              <li>Onderhoud & renovatie</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60">
            © {currentYear} Schildersbedrijf Frensch. Alle rechten voorbehouden.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;