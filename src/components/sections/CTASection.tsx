import { Link } from "react-router-dom";

interface CTASectionProps {
  title: string;
  subtitle?: string;
  buttonText: string;
  buttonLink: string;
}

const CTASection = ({ title, subtitle, buttonText, buttonLink }: CTASectionProps) => {
  return (
    <section className="cta-section">
      <div className="container-custom text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-2">{title}</h2>
        {subtitle && <p className="text-xl mb-6 opacity-90">{subtitle}</p>}
        <Link to={buttonLink} className="btn-white">
          {buttonText}
        </Link>
      </div>
    </section>
  );
};

export default CTASection;
