import Layout from "@/components/layout/Layout";
import Hero from "@/components/sections/Hero";

const UeberUns = () => {
  const values = [
    {
      title: "Qualität",
      description: "Qualität ist unser oberstes Gebot. Deshalb investieren wir kontinuierlich in unser Team, unsere Arbeitsausstattung sowie Leistungen und bleiben am Puls der Zeit. Denn nur fachlich geschulte Mitarbeiter werden unserem hohen Qualitätsstandard gerecht.",
    },
    {
      title: "Zuverlässigkeit",
      description: "Zuverlässigkeit ist für uns Standard. Der Kunde steht bei uns im Mittelpunkt und genießt unsere qualitative Betreuung. Termintreu halten wir vorgegebene Fristen ein und geben alles für die Kundenzufriedenheit.",
    },
    {
      title: "Vertrauen",
      description: "Vertrauen ist der Grundstein einer erfolgreichen, fairen Partnerschaft. Dabei spielt die Kommunikation eine große Rolle. Egal ob firmenintern oder gegenüber unseren Kunden – wir gehen respektvoll miteinander um und pflegen eine offene Kommunikation.",
    },
  ];

  return (
    <Layout>
      <Hero
        title="Über uns"
        subtitle="Wir sind Experten für die Reinigung privat und gewerblich genutzter Immobilien in Süddeutschland. Mit unserem Standort in Singen können wir Sie zuverlässig und flexibel betreuen."
        backgroundImage="/images/team.jpg"
      />

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid md:grid-cols-2 gap-8 max-w-3xl mx-auto">
            <div className="text-center">
              <img
                src="/images/michael-bechler.jpg"
                alt="Michael Bechler"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Michael Bechler</h3>
              <p className="text-muted-foreground">Geschäftsführung</p>
            </div>
            
            <div className="text-center">
              <img
                src="/images/fabian-bechler.jpg"
                alt="Fabian Bechler"
                className="w-full max-w-xs mx-auto rounded-lg shadow-lg mb-4"
              />
              <h3 className="text-xl font-semibold">Fabian Bechler</h3>
              <p className="text-muted-foreground">Prokurist und technischer Leiter</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-custom">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">Was uns ausmacht</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="bg-white p-8 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold text-primary mb-4">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Motto Section */}
      <section className="section-padding">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold">
            Unser Motto: <span className="text-primary">Mit Betreuung und Qualität zum Glänzen!</span>
          </h2>
        </div>
      </section>
    </Layout>
  );
};

export default UeberUns;
