import { Button } from "@/components/ui/button";
import { ShoppingCart, Heart } from "lucide-react";
import { useCartStore } from "@/stores/cartStore";
import productMate from "@/assets/product-mate.jpg";
import productTermo from "@/assets/product-termo.jpg";
import productMatera from "@/assets/product-matera.jpg";
import productRegalo from "@/assets/product-regalo.jpg";

const products = [
  {
    id: 1,
    name: "Mate Imperial de Calabaza",
    price: 12500,
    originalPrice: 15000,
    image: productMate,
    category: "Mates",
    isNew: true,
  },
  {
    id: 2,
    name: "Termo Stanley Classic 1L",
    price: 45000,
    image: productTermo,
    category: "Termos",
    isNew: false,
  },
  {
    id: 3,
    name: "Matera Cerámica Artesanal",
    price: 8900,
    image: productMatera,
    category: "Materas",
    isNew: true,
  },
  {
    id: 4,
    name: "Kit Regalo Premium",
    price: 28000,
    originalPrice: 32000,
    image: productRegalo,
    category: "Regalos",
    isNew: false,
  },
  {
    id: 5,
    name: "Mate de Madera Tallado",
    price: 18500,
    image: productMate,
    category: "Mates",
    isNew: false,
  },
  {
    id: 6,
    name: "Termo Matero 750ml",
    price: 32000,
    originalPrice: 38000,
    image: productTermo,
    category: "Termos",
    isNew: true,
  },
];

const formatPrice = (price: number) => {
  return new Intl.NumberFormat("es-AR", {
    style: "currency",
    currency: "ARS",
    minimumFractionDigits: 0,
  }).format(price);
};

const FeaturedProducts = () => {
  const { addItem, toggleCart } = useCartStore();

  const handleAddToCart = (product: typeof products[0]) => {
    addItem({
      id: product.id,
      name: product.name,
      price: product.price,
      image: product.image,
      category: product.category,
    });
    toggleCart();
  };

  return (
    <section id="productos" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <span className="text-accent font-medium text-sm uppercase tracking-wider">
            Lo mejor para vos
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mt-2 mb-4">
            Productos Destacados
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Selección especial de nuestros artículos más populares
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-all duration-300 border border-border"
            >
              <div className="relative aspect-square overflow-hidden bg-muted">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                {product.isNew && (
                  <span className="absolute top-3 left-3 px-3 py-1 bg-accent text-accent-foreground text-xs font-bold rounded-full">
                    Nuevo
                  </span>
                )}
                {product.originalPrice && (
                  <span className="absolute top-3 right-3 px-3 py-1 bg-destructive text-destructive-foreground text-xs font-bold rounded-full">
                    Oferta
                  </span>
                )}
                <Button
                  variant="ghost"
                  size="icon"
                  className="absolute bottom-3 right-3 bg-background/90 hover:bg-background opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Heart className="h-5 w-5" />
                </Button>
              </div>
              <div className="p-4 md:p-6">
                <span className="text-xs text-muted-foreground uppercase tracking-wider">
                  {product.category}
                </span>
                <h3 className="text-lg font-serif font-semibold text-foreground mt-1 mb-3 group-hover:text-primary transition-colors">
                  {product.name}
                </h3>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="text-xl font-bold text-primary">
                      {formatPrice(product.price)}
                    </span>
                    {product.originalPrice && (
                      <span className="text-sm text-muted-foreground line-through">
                        {formatPrice(product.originalPrice)}
                      </span>
                    )}
                  </div>
                  <Button size="sm" className="gap-2" onClick={() => handleAddToCart(product)}>
                    <ShoppingCart className="h-4 w-4" />
                    <span className="hidden sm:inline">Agregar</span>
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Ver todos los productos
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;