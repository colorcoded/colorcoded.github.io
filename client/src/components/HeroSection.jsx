import { useState, useEffect } from "react";

const HeroSection = () => {
    const images = [
        "/hero-images/hero1.jpg",
        "/hero-images/hero2.jpg",
      ];
      const [currentImageIndex, setCurrentImageIndex] = useState(0);
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 4500); // Change image every 4.5 seconds
        return () => clearInterval(interval); // Clean up interval on component unmount
      }, [images.length]);

    return (
    <section className="hero is-fullheight">
        <div className="hero-body">
            <div className="container">
                <div className="columns is-vcentered mt-6">
                    <div className="column is-one-thirds">
                    <h1 className="title is-size-1 has-text-warning">ColorStack</h1>
                    <p className="subtitle has-text-weight-bold has-text-success">@ Cal Poly, San Luis Obispo</p>
                    <p className="subtitle is-size-5 has-text-weight-normal"> 
                        We are dedicated to empowering underrepresented students in tech through mentorship, community, and profressional development.
                        Membership to the chapter is entirely free, and gain access to more resources and networking opportunities!
                    </p>
                    <div className="level-left">
                        <div className="level-item has-text-centered">
                            <button className="button is-warning is-link is-medium has-text-black-bis has-text-weight-semibold">
                            Membership
                            </button>
                        </div>
                    </div>
                </div>
                <div className="column">
                <figure className="image">
                    <img
                    src={images[currentImageIndex]}
                    alt="Color Stack Hero"
                    style={{
                        transition: "opacity 1s ease-in-out",
                    }}
                    />
              </figure>
                </div>
            </div>
            </div>
        </div>
    </section>
    );
};

export default HeroSection;