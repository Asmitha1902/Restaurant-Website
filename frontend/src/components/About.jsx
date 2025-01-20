import React from "react";
import { Link } from "react-router-dom";
import { HiOutlineArrowRight } from "react-icons/hi";

const About = () => {
  return (
    <>
      <section className="about" id="about">
        <div className="container">
          <div className="banner">
            <div className="top">
              <h1 className="heading">ABOUT US</h1>
              <p>The only thing we're serious about is food.</p>
            </div>
            <p className="mid">
            Welcome to Flavor Haven, where every dish tells a unique and flavorful story! At our restaurant, we are driven by a deep passion for food, creativity, and community. Our mission is to craft meals that not only satisfy your taste buds but also leave you with a lasting memory of warmth and joy. Each dish we serve is a harmonious blend of carefully selected ingredients, time-honored techniques, and a touch of innovation, ensuring that every bite is a celebration of flavors. Whether you're here for a casual meal, a special occasion, or simply to indulge in a culinary adventure, our goal is to create a dining experience that is as unforgettable as it is delicious. Come, let us share our love for food with you, one plate at a time!
            </p>
            <Link to={"/"}>
              Explore Menu{" "}
              <span>
                <HiOutlineArrowRight />
              </span>
            </Link>
          </div>
          <div className="banner">
            <img src="/about.png" alt="about" />
          </div>
        </div>
      </section>
    </>
  );
};

export default About;