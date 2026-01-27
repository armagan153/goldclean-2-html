import { Link } from "react-router-dom";

interface HeroProps {
  title: string;
  subtitle?: string;
  showButtons?: boolean;
  backgroundImage?: string;
}

const Hero = ({ title, subtitle, showButtons = false, backgroundImage }: HeroProps) => {
  return (
    <section
      className="hero-section min-h-[400px] md:min-h-[500px]"
      style={{
        backgroundImage: backgroundImage ? `url(${backgroundImage})` : undefined,
      }}
    >
      <div className="hero-overlay" />
      <div className="container-custom relative z-10 text-white py-16">
        <div className="max-w-3xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 leading-tight">
            {title}
          </h1>
          {subtitle && (
            <p className="text-lg md:text-xl opacity-90 mb-8 max-w-2xl">
              {subtitle}
            </p>
          )}
          {showButtons && (
            <div className="flex flex-wrap gap-4">
              <Link to="/technische-reinigung" className="btn-white">
                Mehr erfahren
              </Link>
              <Link to="/kontakt" className="btn-secondary border-white text-white hover:bg-white hover:text-primary">
                Kontakt
              </Link>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Hero;
