import { Button } from "@/components/ui/button.tsx";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6 leading-tight">
            Bienvenido a Las Marianas
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
            Descubre nuestra selección de productos de calidad
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg">
              Ver Productos
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;


