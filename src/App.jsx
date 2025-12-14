import Contact from "./components/contact/Contact";
import Navbar from "./components/Navbar/Navbar";
import Partners from "./components/partners/Partners";
import Products from "./components/products/Products";
import Hero from "./components/sections/Hero";
import Team from "./components/team/Team";
import Value from "./components/Value/Value";
import WhyIndbhoomi from "./components/WhyIndbhoomi/WhyIndbhoomi";
import Footer from "./components/layout/Footer";



function App() {
  return (
    <>
      <Navbar />
      <main className="pt-16">
        {/* next components */}
        <Hero />
        <Products />
        <WhyIndbhoomi />
        <Value />
        <Team />
        <Partners />
        <Contact />
        <Footer />
      </main>
    </>
  );
}

export default App;
