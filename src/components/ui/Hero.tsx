import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const Hero = () => {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex items-center justify-center pt-16 md:pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/hero-mate.jpg"
          alt="Mate tradicional artesanal"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-amber-950/50" />
      </div>

      {/* Content */}
      <div className="container relative z-10 px-4 py-20 md:py-32">
        <div className="max-w-2xl">
          <span className="inline-block px-4 py-2 mb-6 text-sm font-medium bg-orange-500/90 text-white rounded-full">
            Tradición y calidad artesanal
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 leading-tight">
            Descubrí la esencia del <span className="text-orange-400">mate</span> argentino
          </h1>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            En Las Marianas, ofrecemos los mejores mates, materas, termos y artículos 
            para regalar. Calidad artesanal que une tradición y estilo.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-amber-900 hover:bg-white/90 group">
              Ver Productos
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button size="lg" variant="outline" className="bg-amber-800/80 border-amber-700 text-white hover:bg-amber-800">
              Conocenos
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10">
        <div className="w-6 h-10 rounded-full border-2 border-white/50 flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
