import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Target, Zap, Shield, TrendingUp } from "lucide-react";

const services = [
  {
    icon: Target,
    title: "Strategic Planning",
    description:
      "Develop comprehensive strategies that align with your business goals and market opportunities.",
  },
  {
    icon: Zap,
    title: "Digital Innovation",
    description:
      "Leverage cutting-edge technology to streamline operations and enhance customer experiences.",
  },
  {
    icon: Shield,
    title: "Risk Management",
    description:
      "Protect your business with robust security measures and comprehensive risk assessment.",
  },
  {
    icon: TrendingUp,
    title: "Growth Solutions",
    description:
      "Scale your business with data-driven insights and proven growth strategies.",
  },
];

const Services = () => {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Services
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive solutions tailored to your business needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <Card
              key={index}
              className="hover:shadow-lg transition-all duration-300 hover:-translate-y-1 animate-slide-up border-border"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
