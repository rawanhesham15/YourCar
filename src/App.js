import React from 'react';
import Home from './components/Home'
import About from './components/About';
import Services from './components/Services';
import CarList from './components/CarList';
import CarsImages from './components/CarsImages';
import Testimonials from './components/Testimonials'
import NavBar from './components/NavBar'
import data from "./data.json";
import Logos from './components/Logos';
import Footer from './components/Footer';
import './App.css'

function App() {
  const [cart, setCart] = React.useState([]);

  const aboutRef = React.useRef(null);
  const servicesRef = React.useRef(null);
  const carsRef = React.useRef(null);
  const contactRef = React.useRef(null);

  const sectionIds = ["home", "about", "services", "cars", "contact"];
  const [activeSection, setActiveSection] = React.useState(sectionIds[0]);

  React.useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      let currentSection = sectionIds[0];
  
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i]);
        if (section.offsetTop <= scrollY + 70) {
          currentSection = sectionIds[i];
          break;
        }
        if(sectionIds[i] === 'contact'){
          if (section.offsetTop <= scrollY+300) {
            currentSection = sectionIds[i];
            break;
          } 
        }
      }
      setActiveSection(currentSection);
    };
  
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  function addToCart(item) {
    setCart([...cart, item]);
  };

  function handleItemRemove(itemToRemove){
    setCarQuantities((prevQuantities) => ({
      ...prevQuantities,
      [itemToRemove]: 0,
    }));
    const updatedCart = cart.filter((item) => item.car.name !== itemToRemove);
    setCart(updatedCart);
  };

  function removeAll(){
    const newCarQuantities = {};
    for (const carName in carQuantities) {
      newCarQuantities[carName] = 0;
    }
    setCarQuantities(newCarQuantities);
    setCart([]);
  }

  const [carQuantities, setCarQuantities] = React.useState({});

  function updateCarQuantity(carName, newQuantity) {
    if(carQuantities === undefined){
      setCarQuantities({[carName]: newQuantity})
    }
    setCarQuantities((prevQuantities) => ({
      ...prevQuantities,
      [carName]: newQuantity,
    }));
    
    console.log(carQuantities)
  }

  return (
    <div>
      <NavBar cart={cart} setCart={setCart} onItemRemove={handleItemRemove} removeAll={removeAll} aboutRef={aboutRef} servicesRef={servicesRef} carsRef={carsRef} contactRef={contactRef} activeSection={activeSection} carQuantities={carQuantities} updateCarQuantity={updateCarQuantity}/>
      <div id="home">
        <Home cart={cart} onItemRemove={handleItemRemove} removeAll={removeAll} />
      </div>
      <div id="about" ref={aboutRef}>
        <About />
      </div>
      <div id="services" ref={servicesRef}>
        <Services />
      </div>
      <div id="cars" ref={carsRef}>
        <CarList addToCart={addToCart} removeItem={handleItemRemove} updateCarQuantity={updateCarQuantity} carQuantities={carQuantities}/>
      </div>
      <CarsImages />
      <Testimonials data={data.testimonials} />
      <Logos />
      <div id="contact" ref={contactRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;
