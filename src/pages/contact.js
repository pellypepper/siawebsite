import React from "react";
import NavBar from "../component/navbar";
import {Text3} from "../component/text";
import './contact.css'
import { Floating1 } from "../component/floating";
import Footer from "../component/footer";

export default function Contact() {
    return(
   <main>
       <section>
          <NavBar />
       </section>
       <section className="contact-wrapper">
           <h1>CONTACT US</h1>
           <Text3 />
       </section>

       <section className="float-wrapper">
      
           <Floating1 />
       </section>
       <footer>
        <Footer />
      </footer>
       
   </main>
        )
}