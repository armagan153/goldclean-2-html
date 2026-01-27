import { useState } from "react";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import { useToast } from "@/hooks/use-toast";

const Kontakt = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    inquiryType: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Nachricht gesendet",
      description: "Vielen Dank für Ihre Anfrage. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setFormData({ name: "", email: "", phone: "", inquiryType: "", message: "", privacy: false });
  };

  const officeHours = [
    { day: "Montag", hours: "8:00 – 17:00 Uhr" },
    { day: "Dienstag", hours: "8:00 – 17:00 Uhr" },
    { day: "Mittwoch", hours: "8:00 – 17:00 Uhr" },
    { day: "Donnerstag", hours: "8:00 – 17:00 Uhr" },
    { day: "Freitag", hours: "8:00 – 15:00 Uhr" },
  ];

  return (
    <Layout>
      <Hero
        title="Was können wir für Sie tun?"
        subtitle="Bei Fragen oder sonstigen Anliegen sind wir gerne für Sie da. Sie können uns jederzeit anrufen, eine Mail schreiben oder per Kontaktformular kontaktieren. In einem persönlichen Termin finden wir gemeinsam eine passende Lösung für Ihre Anforderungen und Bedürfnisse."
        backgroundImage="/images/technische-reinigung.jpg"
      />

      {/* Contact Info Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            {/* Contact Details */}
            <div className="space-y-8">
              <div>
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <MapPin className="h-5 w-5" />
                  Adresse
                </h4>
                <p className="text-muted-foreground">
                  Freibühlstraße 8,<br />
                  78224 Singen
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <Phone className="h-5 w-5" />
                  Telefon
                </h4>
                <a href="tel:07731 1673836" className="text-muted-foreground hover:text-primary transition-colors">
                  07731 1673836
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <Mail className="h-5 w-5" />
                  E-Mail
                </h4>
                <a href="mailto:info@bechler-servicesolutions.de" className="text-muted-foreground hover:text-primary transition-colors">
                  info@bechler-servicesolutions.de
                </a>
              </div>

              <div>
                <h4 className="font-semibold text-primary mb-2 flex items-center gap-2">
                  <Clock className="h-5 w-5" />
                  Bürozeiten
                </h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  {officeHours.map((item, index) => (
                    <div key={index} className="flex justify-between max-w-xs">
                      <span>{item.day}</span>
                      <span>{item.hours}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Wir freuen uns auf Ihre Anfrage</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
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
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
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
                    <select
                      value={formData.inquiryType}
                      onChange={(e) => setFormData({ ...formData, inquiryType: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                    >
                      <option value="">– Bitte auswählen –</option>
                      <option value="technische">Technische Reinigung</option>
                      <option value="unterhalts">Unterhaltsreinigung</option>
                      <option value="beratung">Beraten Sie mich</option>
                    </select>
                  </div>
                </div>
                
                <div>
                  <textarea
                    placeholder="Ihre Nachricht"
                    rows={6}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                  />
                </div>

                <p className="text-sm text-muted-foreground">
                  * Pflichtfelder<br />
                  Sämtliche Daten werden gemäß Datenschutzerklärung nur streng zweckgebunden zur Bearbeitung und Beantwortung Ihrer Anfrage benutzt.
                </p>
                
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
                    Ich habe die Datenschutzerklärung zur Kenntnis genommen und bin damit einverstanden, dass die von mir angegebenen Daten elektronisch erhoben und gespeichert werden. *
                  </label>
                </div>
                
                <button type="submit" className="btn-primary">
                  Nachricht senden
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="h-96 bg-secondary/50 flex items-center justify-center">
        <div className="text-center">
          <MapPin className="h-12 w-12 text-primary mx-auto mb-4" />
          <p className="text-muted-foreground">Google Maps<br />Freibühlstraße 8, 78224 Singen</p>
        </div>
      </section>
    </Layout>
  );
};

export default Kontakt;
