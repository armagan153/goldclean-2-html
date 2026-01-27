import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";
import CTASection from "@/components/sections/CTASection";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <Hero
        title="Mit Betreuung und Qualität zum Glänzen"
        subtitle="Wir verhelfen Ihrer privat oder gewerblich genutzter Einrichtung zuverlässig und flexibel zu neuem Glanz."
        showButtons
        backgroundImage="/images/technische-reinigung.jpg"
      />

      {/* Intro Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Ihr Reinigungsdienstleister</h2>
              <h3 className="text-xl md:text-2xl text-primary font-bold mb-6">– in Süddeutschland</h3>

              <p className="text-muted-foreground mb-4">
                Als Dienstleister für Reinigungsarbeiten und Produktionsunterstützung sind wir Ihr zuverlässiger Partner für privat und gewerblich genutzte Immobilien in Süddeutschland. Unser Leistungsspektrum reicht dabei von der klassischen Unterhaltsreinigung wie die Gebäude- und Bodenreinigung über die technische Reinigung von Anlagen und Maschinen bis hin zur Produktionsunterstützung.
              </p>

              <p className="text-muted-foreground">
                Mit unseren rund 80 Mitarbeitern entlasten wir Sie bei täglich anfallenden Aufgaben und garantieren Ihnen höchste Qualität bei der Ausführung der Arbeiten. Die zuverlässige Betreuung und qualitative Arbeitsausführung bringt Ihr Unternehmen und Ihren Haushalt zum Glänzen. Alles aus einer Hand!
              </p>
            </div>

            <div className="flex justify-center">
              <img
                src="/images/about-image.png"
                alt="GoldClean Team"
                className="max-w-full h-auto"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Unser Rund-um-sorglos-Service</h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Technische Reinigung */}
            <Link to="/technische-reinigung" className="service-card group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/technische-reinigung.jpg"
                  alt="Technische Reinigung"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Technische-Reinigung</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Mehr Sicherheit in der Produktion und ein sauberes Arbeitsumfeld durch die qualitative Ausführung unserer technischen Reinigung.
                </p>
                <span className="text-primary font-medium">Mehr erfahren →</span>
              </div>
            </Link>

            {/* Unterhaltsreinigung */}
            <Link to="/unterhaltsreinigung" className="service-card group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/unterhaltsreinigung.jpg"
                  alt="Unterhaltsreinigung"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Unterhalts-Reinigung</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Unsere Reinigungs- und Pflegearbeiten sorgen für ein optimales Erscheinungsbild und den langfristigen Werterhalt Ihrer Einrichtung.
                </p>
                <span className="text-primary font-medium">Mehr erfahren →</span>
              </div>
            </Link>

            {/* Produktionsunterstützung */}
            <Link to="/produktionsunterstuetzung" className="service-card group">
              <div className="relative overflow-hidden">
                <img
                  src="/images/produktionsunterstuetzung.jpg"
                  alt="Produktionsunterstützung"
                  className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">Produktions-Unterstützung</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  Produktionsspitzen und Personalausfälle kompensieren und Liefertermine einhalten, dank unseres fachlich geschulten Personals.
                </p>
                <span className="text-primary font-medium">Mehr erfahren →</span>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Über uns</h2>
              <h3 className="text-xl md:text-2xl text-primary font-bold mb-6">– unsere Werte</h3>

              <p className="text-muted-foreground mb-6">
                Wir sind Experten für die Reinigung privat und gewerblich genutzter Immobilien in Süddeutschland. Mit unseren Standorten in Singen können wir Sie zuverlässig und flexibel betreuen. Bei unserer Arbeit bleiben wir unseren Werten Qualität, Zuverlässigkeit und Vertrauen stets treu, um Sie mit unserem professionellen Reinigungsservice zu entlasten. Erfahren Sie mehr über uns und unsere Werte.
              </p>

              <Link to="/ueber-uns" className="btn-primary">
                Mehr erfahren
              </Link>
            </div>

            <div>
              <img
                src="/images/team.jpg"
                alt="GoldClean Team"
                className="rounded-lg shadow-lg w-full"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Career Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <img
                src="/images/karriere.jpg"
                alt="Karriere bei GoldClean"
                className="rounded-lg shadow-lg w-full"
              />
            </div>

            <div className="order-1 lg:order-2">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">Karriere</h2>
              <h3 className="text-xl md:text-2xl text-primary font-bold mb-6">– in einem familiären Umfeld</h3>

              <p className="text-muted-foreground mb-6">
                Wir sind auf der Suche nach tatkräftiger Unterstützung zur Erweiterung unseres Teams. Als Dienstleister für Reinigungsarbeiten und Produktionsunterstützung erwartet Sie bei uns eine abwechslungsreiche Arbeit in einem familiären Umfeld. In unserem Familienunternehmen bieten wir Ihnen zahlreiche Jobs in Voll-/Teilzeit oder auf 520€ Basis. Sehen Sie sich gerne unsere Stellen an.
              </p>

              <Link to="/karriere" className="btn-primary">
                Mehr erfahren
              </Link>
            </div>
          </div>
        </div>
      </section>

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

export default Index;
