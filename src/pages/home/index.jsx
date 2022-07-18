import React from 'react'
import './styles.css'
import { Data } from './data'
import Navbar from "../../components/navBar/index";
import Footer from "../../components/footer/index";

const Home = () => {
  return (
    <>
      <Navbar />
      <section className="hero">
        <span className="hero-name">SOMETHING AWESOME IS COMING SOON</span>
        <div className="hero-message">
          <p>
            Your all-in-one affiliate marketing tracking software
            <span> track, automate </span> and <span> optimize </span> your
            campaigns.
          </p>
        </div>
        <div className="timer-container">
          {Data.map((data) => (
            <div className="countDown-container" key={data.id}>
              <span className="number">{data.number}</span>
              <span className="time">{data.time}</span>
            </div>
          ))}
        </div>
        <div className="input-field">
          <input type="text" placeholder="First Name." />
          <input type="text" placeholder="Last Name." />
        </div>
        <div className="email-container">
          <input
            type="text"
            placeholder="Enter your email address..."
            className="input"
          />
          <div className="Join-btn">
            <span>Join our waiting list</span>
          </div>
        </div>
        <div className="circle1"></div>
        <div className="circle2"></div>
        <div className="circle3"></div>
        <div className="circle4"></div>
      </section>
      <Footer />
    </>
  );
}

export default Home;