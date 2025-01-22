import React from "react";
import NavBar from "../component/navbar";
import { NewText, NewText1 } from "../component/text";
import './new.css';
import Footer from "../component/footer";

export default function New(){
    return(
        <main>
            <section>
                <NavBar />
            </section>
            <section className="new-wrapper">
                <h1>WHAT THE TEAM SAY</h1>
  <div className="new">
  <NewText />
  <img src="./assets/sec-6.webp" alt="new"/>
  </div>
            </section>
            <section className="new-wrapper">
              
  <div className="new">

  <img src="./assets/sec-7.webp" alt="new"/>
  <NewText1 />
  </div>
            </section>
            <footer>
        <Footer />
      </footer>
        </main>
    )
}