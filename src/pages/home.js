import React from 'react';
import NavBar from '../component/navbar';
import { Link } from 'react-router-dom';
import './home.css';
import { HomeText } from '../component/text';
import SocialMediaIcons from '../component/social-icon';
import Footer from '../component/footer';

export default function Home() {
   
   return (
      <main>
         <section className='section-1'>
            <NavBar />
         </section>
         <section className='section-2'>
            <h1>We are committed to delivering professional,
               dependable, and customized security solutions
               designed to address the specific needs of your
               business</h1>
            <div>
               <button><Link to='/contact'>Get In Touch</Link></button>
               <button><Link to='/about'>Our Services</Link></button>
            </div>


         </section>


         <section className='section-4'>
            <h1>CONNECT WITH US</h1>

            <SocialMediaIcons />
         </section>
         <section className='section-3'>

            <div className='section-3-text'>
               <h1>Deep Security Experts with Nationwide Coverage</h1>
               <HomeText />

               <button><Link to='/about'>Our Services</Link></button>
            </div>

            <div className='section-3-img'>
               <img src='/assets/sec-8.webp' alt='hero' />
            </div>
         </section>

         <section className='section-5'>
            <h1>QUICK LINKS</h1>

            <div className='btn-wrapper'>
               <div>
                  <p> Here to learn about our services?</p>
                  <button><Link to='/about'>Our Services</Link></button>
               </div>
               <div>
                  <p> Get in touch?</p>
                  <button><Link to='/contact'>CONTACT US</Link></button>
               </div>
               <div>
                  <p> Want to work with us on a regular basis?</p>
                  <button><Link to='/career'>CAREER</Link></button>
               </div>
            </div>

         </section>

         <footer>
            <Footer />
         </footer>
      </main>
   )
}