import NavbarComponet from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponents";
import CategoryCarousel from "./components/CategoriesCarousel";
import Products from "./components/products";
import "./App.css";

function App() {
  return (
    <>
      <NavbarComponet />
      <CarouselComponent />
      <CategoryCarousel />
      <Products skip={10} title={"Don't Miss Out This Amazing Offer"} />
      <Products skip={0} title={"We've Got All Your Needs Covered"} />
      <Products skip={40} title={"Best Flash Deals Of The Month"} />
      <Products skip={60} title={"Best Flash Deals Of The Month"} />
      <Products skip={30} title={"Best Flash Deals Of The Month"} />
      <Products skip={80} title={"Best Flash Deals Of The Month"} />
      <Products skip={20} title={"Best Flash Deals Of The Month"} />
      <Products skip={50} title={"Best Flash Deals Of The Month"} />
      <Products skip={90} title={"Best Flash Deals Of The Month"} />
    </>
  );
}

export default App;
