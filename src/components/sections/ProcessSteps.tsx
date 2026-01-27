interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  title: string;
  steps: Step[];
}

const ProcessSteps = ({ title, steps }: ProcessStepsProps) => {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">{title}</h2>
        
        <div className="grid md:grid-cols-5 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="process-step">
              <div className="process-number">{step.number}</div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-sm text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSteps;
