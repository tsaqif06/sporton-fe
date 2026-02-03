import HeroSection from "./components/home/hero";
import CategoriesSection from "./components/home/categories";
import ProductsSection from "./components/home/products";
import { getAllCategories } from "../services/category.service";
import { getAllProducts } from "../services/product.service";
import RedirectIfAuthenticated from "./components/auth/redirect-if-authenticated";

export default async function Home() {
  const [categories, products] = await Promise.all([
    getAllCategories(),
    getAllProducts(),
  ]);

  return (
    <main>
      <RedirectIfAuthenticated />

      <HeroSection />
      <CategoriesSection categories={categories} />
      <ProductsSection products={products} />
    </main>
  );
}
