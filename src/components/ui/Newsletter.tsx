import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Mail } from "lucide-react";

const Newsletter = () => {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="w-16 h-16 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6">
            <Mail className="h-8 w-8 text-accent" />
          </div>
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary-foreground mb-4">
            ¡Suscribite a nuestras ofertas!
          </h2>
          <p className="text-primary-foreground/80 mb-8 max-w-xl mx-auto">
            Recibí promociones exclusivas, novedades y un 10% de descuento 
            en tu primera compra al suscribirte.
          </p>
          <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu correo electrónico"
              className="flex-1 bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground placeholder:text-primary-foreground/50"
            />
            <Button variant="secondary" size="lg">
              Suscribirme
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Newsletter;
