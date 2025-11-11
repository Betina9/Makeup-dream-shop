import React, { useEffect, useState } from "react";
import "./Home.css";

export default function Home() {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const showSlides = (n) => {
    const slides = document.getElementsByClassName("mySlides");
    const dots = document.getElementsByClassName("dot");

    if (slides.length === 0) return;

    let index = n;

    if (n > slides.length) index = 1;
    if (n < 1) index = slides.length;

    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }

    slides[index - 1].style.display = "block";
    dots[index - 1].className += " active";
  };

  return (
    <main>
      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="/images/woman.jpg"
            style={{ width: "100%", height: "540px" }}
            alt="Slide 1"
          />
          <div className="text">
            Glow Into Summer - Discover seasonal favorites
          </div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src="/images/lipgloss.jpg"
            style={{ width: "100%", height: "540px" }}
            alt="Slide 2"
          />
          <div className="text">New! This summer's hottest lip gloss!</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src="/images/sunscreen1.png"
            style={{ width: "100%", height: "540px" }}
            alt="Slide 2"
          />
          <div className="text">
            ☀️ -20% off sunscreen this week! <br /> Beauty starts with good
            protection - take care of your skin in the sun.
          </div>
        </div>

        <button className="prev" onClick={() => setSlideIndex(slideIndex - 1)}>
          &#10094;
        </button>
        <button className="next" onClick={() => setSlideIndex(slideIndex + 1)}>
          &#10095;
        </button>
      </div>

      <br />

      <div style={{ textAlign: "center" }}>
        <span className="dot" onClick={() => setSlideIndex(1)}></span>
        <span className="dot" onClick={() => setSlideIndex(2)}></span>
        <span className="dot" onClick={() => setSlideIndex(3)}></span>
      </div>
    </main>
  );
}
