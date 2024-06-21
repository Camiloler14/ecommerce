import Banner from "./components/Banner/Banner";
import Popup from "./components/Popup/Popup"
import Partners from "./components/Partners/Partners";
import Blogs from "./components/Blogs/Blogs";
import Category from "./components/Category/Category";
import Category2 from "./components/Category/Category2";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/Navbar/Navbar";
import Products from "./components/Products/Products";
import Services from "./components/Services/Services";
import calzado from "./assets/hero/airforce.png"
import Footer from "./components/Footer/Footer";
import outfit from "./assets/category/chica.png"
import { useState, useEffect } from "react";
import AOS from "aos"
import "aos/dist/aos.css"

const BannerData = {
  discount:"30% De Descuento",
  title: "Fina Sonrisa",
  date: "10 De Mayo Al 28 Mayo",
  image: calzado,
  title2: "Hombres",
  title3: "Calzado",
  title4: `Domina cualquier terreno con nuestros zapatos clasicos para hombre, diseñados para ofrecer la combinación perfecta de rendimiento deportivo y estilo urbano.`,
  bgColor: "#f42c37",
};
const BannerData2 = {
  discount:"30% De Descuento",
  title: "Hora Feliz",
  date: "10 De Mayo Al 28 Mayo",
  image: outfit,
  title2: "Mujeres",
  title3: "Out Fit",
  title4: `¡Aprovecha nuestra oferta especial en este conjunto de moda para mujer que combina estilo y comodidad a la perfección! Ideal para lucir radiante en cualquier ocasión, este outfit está diseñado para resaltar tu belleza natural y tu sentido único de la moda sin comprometer tu bolsillo.`,
  bgColor: "#2dcc6f",
};


const App = () => {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOrderPopup = () =>{
    setOrderPopup(!orderPopup)
  }
  useEffect(() => {
    AOS.init(
      {
        duration: 800,
        easing: "ease-in-sine",
        delay: 100,
        offset: 100
      }
    );
    AOS.refresh();
  },[])
  
  return (
    <div className="bg-white dark:bg-gray-900 dark:text-white
    duration-200 overflow-hidden">
      <Navbar handleOrderPopup = {handleOrderPopup}/>
      <Hero handleOrderPopup = {handleOrderPopup}/>
      <Category />
      <Category2 />
      <Services />
      <Banner data={BannerData}/>
      <Products />
      <Banner data={BannerData2}/>
      <Blogs />
      <Partners />
      <Footer />
    <Popup orderPopup={orderPopup} handleOrderPopup = {handleOrderPopup}/>
    </div>
  );
};

export default App;
