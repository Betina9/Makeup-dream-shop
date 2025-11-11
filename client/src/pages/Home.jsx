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
      <h1>Glow Into Summer With Makeup Dream</h1>

      <div className="slideshow-container">
        <div className="mySlides fade">
          <div className="numbertext">1 / 3</div>
          <img
            src="/images/Summer1.jpg"
            style={{ width: "100%" }}
            alt="Slide 1"
          />
          <div className="text">Caption Text</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">2 / 3</div>
          <img
            src="/images/SummerFlower.jpg"
            style={{ width: "100%" }}
            alt="Slide 2"
          />
          <div className="text">Caption Two</div>
        </div>

        <div className="mySlides fade">
          <div className="numbertext">3 / 3</div>
          <img
            src="/images/makeup.jpg"
            style={{ width: "100%" }}
            alt="Slide 3"
          />
          <div className="text">Caption Three</div>
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
