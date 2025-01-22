import React from 'react';
import NavBar from '../component/navbar';
import './home.css';
import { Text } from '../component/text';
import  SocialMediaIcons  from '../component/social-icon';
import Footer from '../component/footer';

export default function Home() {
    return(
        <main>
             <section className='section-1'>
                <NavBar />
             </section>
             <section className='section-2'>
                <img alt='sec-1' src='./assets/sec.webp'/>
             </section>

             <section className='section-3'>
               <h1>ABOUT US</h1>

               <Text />

               <button>Our Services</button>
            </section>
            <section className='section-4'>
              <h1>CONNECT WITH US</h1>

              <SocialMediaIcons />
            </section>

             <section className='section-5'>
                 <h1>QUICK LINKS</h1>

               <div className='btn-wrapper'>
               <div>
                    <p> Here to learn about our services?</p>
                    <button>OUR SERVICES</button>
                 </div>
                 <div>
                    <p> Get in touch?</p>
                    <button>CONTACT US</button>
                 </div>
                 <div>
                    <p> Want to work with us on a regular basis?</p>
                    <button>CAREER</button>
                 </div>
               </div>

             </section>

             <footer>
                <Footer />
            </footer>
        </main>
    )
}