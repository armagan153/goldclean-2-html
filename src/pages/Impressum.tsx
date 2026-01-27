import { Link } from "react-router-dom";
import Layout from "@/components/layout/Layout";

const Impressum = () => {
  return (
    <Layout>
      <section className="section-padding">
        <div className="container-custom max-w-4xl">
          <h1 className="text-3xl md:text-4xl font-bold mb-8">Impressum</h1>

          <div className="prose max-w-none">
            <h3 className="text-xl font-semibold mt-8 mb-4">Angaben gemäß § 5 TMG</h3>
            <p className="mb-4">
              GoldClean<br />
            </p>
            <p className="mb-4">
              Handelsregister: HRB 726019<br />
              Registergericht: Freiburg
            </p>
            <p className="mb-4">
              <strong>Vertreten durch:</strong><br />
              Geschäftsführung
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Kontakt</h3>
            <p className="mb-4">
              Telefon: +912345678<br />
              E-Mail: info@goldclean.de
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Umsatzsteuer-ID</h3>
            <p className="mb-4">
              Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz:<br />
              DE350381084
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Redaktionell verantwortlich</h3>
            <p className="mb-4">GoldClean Redaktion</p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Konzeption, Design & Entwicklung</h3>
            <p className="mb-4">
              Made with ❤ from TM-Solution<br />
              <a href="https://www.tm-solution.de/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                www.tm-solution.de
              </a>
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">EU-Streitschlichtung</h3>
            <p className="mb-4">
              Die Europäische Kommission stellt eine Plattform zur Online-Streitbeilegung (OS) bereit:{" "}
              <a href="https://ec.europa.eu/consumers/odr/" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                https://ec.europa.eu/consumers/odr/
              </a>
              <br />
              Unsere E-Mail-Adresse finden Sie oben im Impressum.
            </p>

            <h3 className="text-xl font-semibold mt-8 mb-4">Verbraucherstreitbeilegung/Universalschlichtungsstelle</h3>
            <p className="mb-4">
              Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren vor einer Verbraucherschlichtungsstelle teilzunehmen.
            </p>

            <h4 className="text-lg font-semibold mt-8 mb-4">Haftung für Inhalte</h4>
            <p className="mb-4 text-muted-foreground">
              Als Diensteanbieter sind wir gemäß § 7 Abs.1 TMG für eigene Inhalte auf diesen Seiten nach den allgemeinen Gesetzen verantwortlich. Nach §§ 8 bis 10 TMG sind wir als Diensteanbieter jedoch nicht verpflichtet, übermittelte oder gespeicherte fremde Informationen zu überwachen oder nach Umständen zu forschen, die auf eine rechtswidrige Tätigkeit hinweisen.
            </p>
            <p className="mb-4 text-muted-foreground">
              Verpflichtungen zur Entfernung oder Sperrung der Nutzung von Informationen nach den allgemeinen Gesetzen bleiben hiervon unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich. Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden wir diese Inhalte umgehend entfernen.
            </p>

            <h4 className="text-lg font-semibold mt-8 mb-4">Haftung für Links</h4>
            <p className="mb-4 text-muted-foreground">
              Unser Angebot enthält Links zu externen Websites Dritter, auf deren Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte waren zum Zeitpunkt der Verlinkung nicht erkennbar.
            </p>
            <p className="mb-4 text-muted-foreground">
              Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
            </p>

            <h4 className="text-lg font-semibold mt-8 mb-4">Urheberrecht</h4>
            <p className="mb-4 text-muted-foreground">
              Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung, Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
            </p>
            <p className="text-muted-foreground">
              Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden, werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine Urheberrechtsverletzung aufmerksam werden, bitten wir um einen entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden wir derartige Inhalte umgehend entfernen.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Impressum;
