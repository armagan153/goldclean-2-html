import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";
import ContactSection from "@/components/sections/ContactSection";

const Referenzen = () => {
  return (
    <Layout>
      <Hero
        title="Referenzen"
        subtitle="Die Basis unseres Erfolgs bildet die Kundenzufriedenheit – denn zufriedene Kunden sind die beste Referenz! Sehen Sie sich gern einen Auszug an Unternehmen an, mit die denen wir partnerschaftlich zusammenarbeiten."
        backgroundImage="/images/technische-reinigung.jpg"
      />

      {/* References Section */}
      <section className="section-padding">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Unsere Referenzen sind gerade im Aufbau.</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((index) => (
              <div key={index} className="bg-secondary/30 p-8 rounded-lg text-center">
                <p className="font-semibold text-lg">Constellium Singen</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <ContactSection 
        title="Haben Sie sich von unseren Referenzen überzeugt?"
        subtitle="Jetzt Angebot anfordern."
      />
    </Layout>
  );
};

export default Referenzen;
