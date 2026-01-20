import { CheckCircle, Truck, Shield, Headphones } from "lucide-react";

const features = [
  {
    icon: CheckCircle,
    title: "Calidad Garantizada",
    description: "Productos seleccionados con los más altos estándares de calidad",
  },
  {
    icon: Truck,
    title: "Envío a Todo el País",
    description: "Llegamos a cada rincón de Argentina con envíos seguros",
  },
  {
    icon: Shield,
    title: "Compra Segura",
    description: "Tus pagos están protegidos con la máxima seguridad",
  },
  {
    icon: Headphones,
    title: "Atención Personalizada",
    description: "Te asesoramos para que encuentres el producto ideal",
  },
];

const About = () => {
  return (
    <section id="nosotros" className="py-16 md:py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <span className="text-accent font-medium text-sm uppercase tracking-wider">
              Sobre Nosotros
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-6">
              Tradición que se comparte
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              En <strong className="text-foreground">Las Marianas</strong>, somos apasionados 
              por la cultura del mate. Desde hace años, nos dedicamos a ofrecer productos 
              artesanales de la más alta calidad para que cada momento de mate sea especial.
            </p>
            <p className="text-muted-foreground mb-8 leading-relaxed">
              Nuestra misión es llevar la tradición del mate a cada hogar, con artículos 
              que combinan la autenticidad artesanal con diseños modernos y funcionales.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <span className="text-3xl font-bold text-primary">500+</span>
                <p className="text-sm text-muted-foreground mt-1">Productos</p>
              </div>
              <div className="text-center p-4 bg-card rounded-lg border border-border">
                <span className="text-3xl font-bold text-primary">10K+</span>
                <p className="text-sm text-muted-foreground mt-1">Clientes felices</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="p-6 bg-card rounded-lg border border-border hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-accent" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
