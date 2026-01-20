import productMate from "@/assets/product-mate.jpg";
import productTermo from "@/assets/product-termo.jpg";
import productMatera from "@/assets/product-matera.jpg";
import productRegalo from "@/assets/product-regalo.jpg";

const categories = [
  {
    name: "Mates",
    description: "Mates artesanales de calabaza, madera y cerámica",
    image: productMate,
    count: 24,
  },
  {
    name: "Termos",
    description: "Termos premium para mantener el agua caliente",
    image: productTermo,
    count: 18,
  },
  {
    name: "Materas",
    description: "Recipientes elegantes para guardar tu yerba",
    image: productMatera,
    count: 15,
  },
  {
    name: "Regalos",
    description: "Sets y kits perfectos para regalar",
    image: productRegalo,
    count: 32,
  },
];

const Categories = () => {
  return (
    <section id="categorias" className="py-16 md:py-24 bg-secondary/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Explora
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Nuestras Categorías
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Encontrá todo lo que necesitas para disfrutar del mate como se merece
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {categories.map((category) => (
            <a
              key={category.name}
              href="#productos"
              className="group relative overflow-hidden rounded-lg bg-card shadow-md hover:shadow-lg transition-all duration-300"
            >
              <div className="aspect-square overflow-hidden">
                <img
                  src={category.image}
                  alt={category.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-primary/80 via-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <span className="text-xs text-accent font-medium">
                  {category.count} productos
                </span>
                <h3 className="text-xl font-serif font-bold text-primary-foreground mb-1">
                  {category.name}
                </h3>
                <p className="text-primary-foreground/80 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  {category.description}
                </p>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
