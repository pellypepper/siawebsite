import React from "react";
import NavBar from "../component/navbar";
import {CareerText} from "../component/text";
import './career.css';
import Form from "../component/form";
import Footer from "../component/footer";
import {Floating2 }from "../component/floating";

export default function Career() {
    return (
       <main>
            <section>
                <NavBar />
            </section>
            <section className="section-2">
            <img src="./assets/sec-3.webp" alt='career '/>
            </section>

            <section className='career-wrapper'>
                <h1>JOIN US</h1>
                <CareerText />
            </section>
            <section className="career-img">
                <img src="./assets/sec-4.webp" alt="career"/>
                <img src="./assets/sec-5.webp" alt="career"/>
            </section>
            <section className="career-float">
                <h1>Our Locations</h1>
          <Floating2 />
            </section>
            <section className="career-form">
              <Form />
            </section>
            <footer>
        <Footer />
      </footer>
       </main>
    )
}