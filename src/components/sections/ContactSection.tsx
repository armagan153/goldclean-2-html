import { useState } from "react";
import { Phone, Mail } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface ContactSectionProps {
  title?: string;
  subtitle?: string;
}

const ContactSection = ({
  title = "Jetzt Angebot anfordern.",
  subtitle
}: ContactSectionProps) => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setFormData({ name: "", email: "", phone: "", message: "", privacy: false });
  };

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Form */}
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-8">{title}</h2>
            {subtitle && <p className="text-muted-foreground mb-6">{subtitle}</p>}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <input
                  type="text"
                  placeholder="Ihr Name *"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse *"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Ihre Telefonnummer"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                />
              </div>
              <div>
                <textarea
                  placeholder="Ihre Nachricht"
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                />
              </div>
              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="privacy"
                  required
                  checked={formData.privacy}
                  onChange={(e) => setFormData({ ...formData, privacy: e.target.checked })}
                  className="mt-1"
                />
                <label htmlFor="privacy" className="text-sm text-muted-foreground">
                  Hiermit stimme ich dem Datenschutz und der Verarbeitung meiner personenbezogenen Daten zu.
                </label>
              </div>
              <button type="submit" className="btn-primary w-full md:w-auto">
                Nachricht senden
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-2xl md:text-3xl font-bold mb-8">…oder direkt Kontakt aufnehmen</h3>

            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-primary mb-2">Telefon</h4>
                <a href="tel:+912345678" className="text-lg hover:text-primary transition-colors flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  +912345678
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2">E-Mail</h4>
                <a href="mailto:info@goldclean.de" className="text-lg hover:text-primary transition-colors flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  info@goldclean.de
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
