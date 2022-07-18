import React from 'react'
import Navbar from "../../components/navBar/index";
import Footer from "../../components/footer/index";
import './styles.css'

const About = () => {
  return (
    <div>
      <Navbar />
      <section>
        <div className="about">
          <div className="about-desc">
            {/* <span>ABOUT US</span>
            <span>Built for Saas and E-commerce</span> */}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default About;