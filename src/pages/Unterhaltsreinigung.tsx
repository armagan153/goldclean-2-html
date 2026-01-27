import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";
import ProcessSteps from "@/components/sections/ProcessSteps";

const Unterhaltsreinigung = () => {
  const processSteps = [
    {
      number: "1.",
      title: "Kontaktaufnahme",
      description: "Bei Interesse können Sie uns gerne telefonisch oder per Mail kontaktieren. Wir freuen uns auf Ihre Anfrage.",
    },
    {
      number: "2.",
      title: "Termin vor Ort",
      description: "Nach erfolgreicher Kontaktaufnahme besichtigen wir Ihre Einrichtung vor Ort und verschaffen uns einen genauen Eindruck.",
    },
    {
      number: "3.",
      title: "Angebot + Planung",
      description: "Sie erhalten von uns ein individuelles und faires Angebot, das genau auf Ihre Einrichtung abgestimmt ist. Nach Beauftragung klären wir gemeinsam mit Ihnen die Rahmenbedingungen.",
    },
    {
      number: "4.",
      title: "Umsetzung",
      description: "Wir stellen die benötigte Arbeitsausstattung und unser Fachpersonal bereit, um den Auftrag zuverlässig und termintreu umzusetzen. Dabei bekommen Sie stets eine individuelle Abnahme.",
    },
    {
      number: "5.",
      title: "Betreuung",
      description: "Nach dem ersten Auftrag bieten wir Ihnen eine Betreuung an, um für ein optimales Erscheinungsbild und den langfristigen Werterhalt Ihrer Einrichtung zu sorgen.",
    },
  ];

  const services = [
    { icon: "/images/icons/gebaudereinigung.png", title: "Gebäudereinigung" },
    { icon: "/images/icons/bodenreinigung.png", title: "Bodenreinigung" },
    { icon: "/images/icons/bodengrundreinigung.png", title: "Bodengrundreinigung - Pflege und Beschichtung" },
    { icon: "/images/icons/teppichreinigung.png", title: "Teppichreinigung" },
    { icon: "/images/icons/bauendreinigung.png", title: "Bauendreinigung" },
  ];

  return (
    <Layout>
      <Hero
        title="Unterhaltsreinigung"
        subtitle="Unsere Reinigungs- und Pflegearbeiten sorgen für ein optimales Erscheinungsbild und den langfristigen Werterhalt Ihrer Einrichtung."
        backgroundImage="/images/unterhaltsreinigung.jpg"
      />

      {/* Description Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-6">Unser Rundum-sorglos-Service</h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Eine regelmäßig durchgeführte Unterhaltsreinigung ist essenziell für den Erhalt der Immobilie, egal ob bei privater oder gewerblicher Benutzung. Mit unserem breiten Leistungsspektrum an Reinigungs- und Pflegearbeiten bringen wir Büros, Produktionshallen und Haushalte in Süddeutschland durch unsere professionelle und gründliche Arbeit zum Glänzen. Unter Einhaltung aktueller Hygienevorschriften profitieren Sie von einem sauberen Arbeitsumfeld und erhöhter Sicherheit am Arbeitsplatz.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Verlassen Sie sich auf fachlich geschultes Personal, kontinuierliche Reinigungsqualität und ein rundum-sorglos Service.
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
                Das GoldClean Team freut sich auf Ihre Anfrage.
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

          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            {services.map((service, index) => (
              <div key={index} className="icon-box">
                <img src={service.icon} alt={service.title} className="w-20 h-20 mb-4" />
                <h3 className="font-medium text-sm text-center">{service.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <ProcessSteps
        title="Ablauf unserer Unterhalts-Reinigung"
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

export default Unterhaltsreinigung;
