import "./NavBarStyle.css";
import Cart from "./Cart";
import React from "react";

export default function NavBar(probs) {
  const [state, setState] = React.useState(false);

  function handleClick() {
    setState((prevState) => !prevState);
  }

  const [scrolling, setScrolling] = React.useState(false);

  function handleScroll() {
    if (window.scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  }

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (ref, event) => {
    if (event) {
      event.preventDefault();
    }
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
      setState(false);
    }
  };

  return (
    <nav className={`${scrolling ? "scrolling" : ""}`}>
      <a href="#" id="logo">
        <h3>
          <b>Your</b>Car
        </h3>
      </a>

      <div id="navItems">
        <ul id="navBar" className={state ? "#navBar active" : "#navBar"}>
          <li
            className={`${
              probs.activeSection === "home" ? "active" : ""
            }`}
          >
            <a href="#home" className={`${ probs.activeSection === "home" ? "active" : "" }`}>
              Home
            </a>
          </li>
          <li>
            <a href="#about" onClick={(event) => scrollToSection(probs.aboutRef, event)} className={` ${probs.activeSection === "about" ? "active" : ""}`}>
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={(event) => scrollToSection(probs.servicesRef, event)} className={` ${probs.activeSection === "services" ? "active" : ""}`}>
              Services
            </a>
          </li>
          <li>
            <a href="#cars" onClick={(event) => scrollToSection(probs.carsRef, event)} className={` ${probs.activeSection === "cars" ? "active" : ""}`}>
              Cars
            </a>
          </li>
          <li>
            <a href="#contact" onClick={(event) => scrollToSection(probs.contactRef, event)} className={` ${ probs.activeSection === "contact" ? "active" : ""}`}>
              Contact us
            </a>
          </li>
        </ul>
        <Cart cart={probs.cart} onItemRemove={probs.onItemRemove} removeAll={probs.removeAll} setCart={probs.setCart} updateCarQuantity={probs.updateCarQuantity} carQuantities={probs.carQuantities}/>
      </div>

      <div id="mobile" onClick={handleClick}>
        <i id="bar" className={state ? "fas fa-times" : "fas fa-bars"}></i>
      </div>
    </nav>
  );
}
