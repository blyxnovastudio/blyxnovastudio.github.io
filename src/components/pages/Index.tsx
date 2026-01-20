import Header from "@/components/ui/Header";
import Hero from "@/components/ui/Hero";
import Categories from "@/components/ui/Categories";
import FeaturedProducts from "@/components/ui/FeaturedProducts";
import About from "@/components/ui/About";
import Newsletter from "@/components/ui/Newsletter";
import Footer from "@/components/ui/Footer";

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
