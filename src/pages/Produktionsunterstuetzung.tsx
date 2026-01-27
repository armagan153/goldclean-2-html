import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import ProcessSteps from "@/components/sections/ProcessSteps";

const Produktionsunterstuetzung = () => {
  const processSteps = [
    {
      number: "1.",
      title: "Kontaktaufnahme",
      description: "Bei Interesse können Sie uns gerne telefonisch oder per Mail kontaktieren. Wir freuen uns auf Ihre Anfrage.",
    },
    {
      number: "2.",
      title: "Termin vor Ort",
      description: "Nach erfolgreicher Kontaktaufnahme sehen wir uns Ihre Produktionstätigkeiten vor Ort an und verschaffen uns einen genauen Eindruck.",
    },
    {
      number: "3.",
      title: "Angebot + Planung",
      description: "Sie erhalten von uns ein individuelles und faires Angebot, das genau auf Ihre Einrichtung abgestimmt ist. Nach Beauftragung klären wir gemeinsam mit Ihnen die Rahmenbedingungen.",
    },
    {
      number: "4.",
      title: "Umsetzung",
      description: "Sie erhalten fachlich qualifiziertes Personal zur Unterstützung der vorgegebenen Produktionsschritte. Zuverlässig verstärken wir Ihre Produktion.",
    },
    {
      number: "5.",
      title: "Betreuung",
      description: "Nach dem ersten Auftrag bieten wir Ihnen eine Betreuung um die Qualität der Fertigung stabil zu halten und Engpässe zu überbrücken.",
    },
  ];

  const services = [
    { icon: "/images/icons/sortier.png", title: "Sortier-Tätigkeiten" },
    { icon: "/images/icons/kontroll.png", title: "Kontroll-Tätigkeiten" },
    { icon: "/images/icons/teilprozesse.png", title: "Teilprozesse übernehmen" },
  ];

  return (
    <Layout>
      <Hero
        title="Produktions-Unterstützung"
        subtitle="Produktionsspitzen und Personalausfälle kompensieren und Liefertermine einhalten, dank unseres fachlich geschulten Personals."
        backgroundImage="/images/produktionsunterstuetzung.jpg"
      />

      {/* Description Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Unser Rundum-sorglos-Service</h2>
              <p className="text-muted-foreground leading-relaxed">
                Der Fachkräftemangel macht sich bei mittelständischen Unternehmen immer mehr bemerkbar. Kurzfristige Personalausfälle und Produktionsspitzen bringen Produktionsstätten an ihre Grenzen. Mit unserem fachlich geschulten Personal bieten wir Ihnen eine Entlastung in der Produktion. Flexibel übernehmen unsere kurzfristig verfügbaren Mitarbeiter Teilaufgaben bis hin zur kompletten Fertigung Ihres Produkts. Durch unsere Produktionsunterstützung geben wir Ihnen die Sicherheit, Liefertermine einzuhalten und die Qualität der Fertigung aufrechtzuerhalten. Wir bieten Ihnen die Unterstützung, die Sie benötigen.
              </p>
            </div>
            
            <div className="bg-secondary/30 p-6 rounded-lg">
              <img
                src="/images/ansprechpartner.png"
                alt="Ansprechpartner"
                className="w-full mb-4"
              />
              <h4 className="font-semibold mb-2">Dürfen wir Ihnen weiterhelfen?</h4>
              <p className="text-sm text-muted-foreground mb-4">
                Michael Bechler und Fabian Bechler (v. l.) freuen sich auf Ihre Anfrage.
              </p>
              <Link to="/kontakt" className="btn-primary w-full">
                Kontakt aufnehmen
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Icons */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Diese Arbeiten erledigen wir für Sie</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="icon-box">
                <img src={service.icon} alt={service.title} className="w-24 h-24 mb-4" />
                <h3 className="font-semibold">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps
        title="Ablauf unserer Produktions-Unterstützung"
        steps={processSteps}
      />

      {/* CTA Section */}
      <CTASection
        title="Sie brauchen Unterstützung für Ihr Projekt?"
        subtitle="Sehen Sie sich gerne unsere Referenzen an."
        buttonText="Referenzen ansehen"
        buttonLink="/referenzen"
      />

      {/* Contact Section */}
      <ContactSection />
    </Layout>
  );
};

export default Produktionsunterstuetzung;
