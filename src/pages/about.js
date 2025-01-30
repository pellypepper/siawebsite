import React from "react";
import NavBar from "../component/navbar";
import {Text2, Text} from "../component/text";
import './about.css'
import Floating from "../component/floating";
import Footer from "../component/footer";

export default function About() {
    return(
<main>
      <section>
          <NavBar />
      </section>
       <section className="about-img">
          <img src='./assets/sec-1.webp' alt='about our services'/>
  
      </section>
      <section className="section-11">
        <h1>ABOUT US</h1>
          <Text  />
          <button>Enquire Today</button>
      </section>
      <section className="service-wrapper">
        <h1>Our Services</h1>
          <Text2  />

      </section>
      <section className="float-wrapper">

          <Floating  />

      </section>
      <section className="about-img about-img-1">
  
          <img src='./assets/sec-2.webp' alt='about our services'/>
      </section>
      <footer>
        <Footer />
      </footer>
</main>
        )
}