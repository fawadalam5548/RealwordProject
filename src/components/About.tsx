import { CheckCircle2 } from "lucide-react";

const features = [
  "15+ years of industry experience",
  "500+ successful projects delivered",
  "Award-winning team of experts",
  "24/7 dedicated support",
];

const About = () => {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              About Our Company
            </h2>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              We're a team of passionate professionals dedicated to helping businesses
              thrive in the digital age. With years of experience and a commitment to
              excellence, we deliver solutions that make a real difference.
            </p>
            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our approach combines innovation with practicality, ensuring that every
              solution we provide is not only cutting-edge but also perfectly suited to
              your unique needs.
            </p>

            <div className="space-y-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative animate-slide-up">
            <div className="aspect-square rounded-2xl bg-hero-gradient p-8 flex items-center justify-center shadow-xl">
              <div className="text-center">
                <div className="text-6xl font-bold text-primary-foreground mb-4">
                  500+
                </div>
                <div className="text-xl text-primary-foreground/90">
                  Projects Completed
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
