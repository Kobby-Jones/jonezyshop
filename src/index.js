import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import App from './App';
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle";
import reportWebVitals from "./reportWebVitals";
import NavbarComponet from "./components/Navbar";
import CarouselComponent from "./components/CarouselComponents";
import CategoryCarousel from "./components/CategoriesCarousel";
import Products from "./components/products";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
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
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
