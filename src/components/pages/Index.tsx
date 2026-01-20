import Header from "@/components/ui/Header.tsx";
import Hero from "@/components/ui/Hero.tsx";
import Categories from "@/components/ui/Categories.tsx";
import FeaturedProducts from "@/components/ui/FeaturedProducts.tsx";
import About from "@/components/ui/About.tsx";
import Newsletter from "@/components/ui/Newsletter.tsx";
import Footer from "@/components/ui/Footer.tsx";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedProducts />
        <About />
        <Newsletter />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
