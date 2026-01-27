import { useState } from "react";
import { Phone, Mail, Check } from "lucide-react";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import { useToast } from "@/hooks/use-toast";

const Karriere = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    position: "",
    message: "",
    privacy: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Bewerbung gesendet",
      description: "Vielen Dank für Ihre Bewerbung. Wir melden uns schnellstmöglich bei Ihnen.",
    });
    setFormData({ name: "", email: "", position: "", message: "", privacy: false });
  };

  const benefits = [
    "attraktive Vergütung",
    "flexible Arbeitsmodelle",
    "familiärer Umgang - tolles Arbeitsklima",
    "Mitarbeit in abwechslungsreichen Projekten",
    "Möglichkeit auf Jobrad",
  ];

  const jobs = [
    { title: "Kaufmännische Fachkraft – Allroundtalent mit Schwerpunkt Personal (m/w/d)", type: "Teilzeit 50%", location: "Singen-Hegau, Deutschland" },
    { title: "Produktionshelfer in Gießereiumfeld (m/w/d)", type: "Vollzeit", location: "Singen-Hegau, Deutschland" },
    { title: "Hauptbeschäftigte (allgemein) zur Unterstützung (m/w/d)", type: "Vollzeit", location: "Singen-Hegau, Deutschland" },
    { title: "Staplerfahrer (m/w/d)", type: "Vollzeit", location: "Singen-Hegau, Deutschland" },
    { title: "Minijobber – Reinigungskraft im Gießereiumfeld (m/w/d)", type: "Teilzeit", location: "Singen-Hegau, Deutschland" },
    { title: "Minijobber (allgemein) zur Unterstützung (m/w/d)", type: "Teilzeit", location: "Singen-Hegau, Deutschland" },
    { title: "Staplerfahrer im Gießereiumfeld (m/w/d)", type: "Vollzeit", location: "Singen-Hegau, Deutschland" },
  ];

  return (
    <Layout>
      <Hero
        title="Karriere"
        subtitle="Wenn Du Lust hast in einem familiären Umfeld zu arbeiten, in dem Teamwork die tägliche Arbeit bestimmt, bist Du bei uns genau richtig."
        backgroundImage="/images/karriere.jpg"
      />

      {/* Why Apply Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Warum solltest Du dich bei GoldClean bewerben?</h2>

          <p className="text-muted-foreground mb-8 max-w-4xl">
            Zur Verstärkung unseres Teams suchen wir <strong>Fachkräfte</strong> zur Verstärkung <strong>im Bereich Reinigungsdienstleistung</strong> und <strong>Produktionsunterstützung (m/w/d)</strong>. Diese Stellen sind sowohl in Voll- / Teilzeit oder auf 520€ Basis verfügbar. Als Dienstleister für Reinigungsarbeiten und Produktionsunterstützung in Süddeutschland, erwartet Dich eine abwechslungsreiche Arbeit in spannenden Projekten. Bewirb Dich jetzt auf unsere Stellenangebote! Wir freuen uns Dich kennenzulernen.
          </p>

          {/* Benefits */}
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-12">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-2 text-sm">
                <Check className="h-5 w-5 text-primary flex-shrink-0" />
                <span>{benefit}</span>
              </div>
            ))}
          </div>

          {/* Job Listings */}
          <div className="space-y-4">
            {jobs.map((job, index) => (
              <div key={index} className="bg-secondary/30 p-6 rounded-lg">
                <h3 className="font-semibold text-lg mb-2">{job.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {job.type} &nbsp;|&nbsp; {job.location}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">Familiär. Fair. Regional. Abwechslungsreich.</h2>
            <h3 className="text-xl font-semibold text-primary text-center mb-8">Jetzt Bewerbung abschicken</h3>

            <div className="grid lg:grid-cols-2 gap-12">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Dein Name *"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Deine E-Mail-Adresse *"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  />
                </div>
                <div>
                  <select
                    value={formData.position}
                    onChange={(e) => setFormData({ ...formData, position: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
                  >
                    <option value="">– Bitte auswählen –</option>
                    {jobs.map((job, index) => (
                      <option key={index} value={job.title}>{job.title}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <textarea
                    placeholder="Deine Nachricht"
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
                <button type="submit" className="btn-primary w-full">
                  Bewerbung absenden
                </button>
              </form>

              <div>
                <h3 className="text-xl font-bold mb-6">…oder direkt Kontakt aufnehmen</h3>

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
        </div>
      </section>
    </Layout>
  );
};

export default Karriere;
