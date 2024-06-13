import React, { useEffect, useState } from 'react';
import '../App.scss'; // Ensure you have a corresponding Slideshow.scss file for styles

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, [slideIndex]);

  const plusSlides = (n) => {
    showSlides(slideIndex + n);
  };

  const currentSlide = (n) => {
    showSlides(n);
  };

  const showSlides = (n) => {
    let newIndex = n;
    const slides = document.getElementsByClassName('mySlides');
    const dots = document.getElementsByClassName('dot');

    if (n > slides.length) {
      newIndex = 1;
    }
    if (n < 1) {
      newIndex = slides.length;
    }

    // Hide all slides
    Array.from(slides).forEach((slide) => {
      slide.style.display = 'none';
    });

    // Display the current slide
    slides[newIndex - 1].style.display = 'block';

    // Update active state for dots
    Array.from(dots).forEach((dot, index) => {
      if (index === newIndex - 1) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

    // Update state
    setSlideIndex(newIndex);
  };

  return (
    <div className="slideshow-container">
      {/* Slides */}
      {images.map((image, index) => (
        <div key={index} className={`mySlides fade ${index === slideIndex - 1 ? 'active' : ''}`}>
          <div className="numbertext">{index + 1} / {images.length}</div>
          <img src={image} alt={`Slide ${index + 1}`} style={{ width: '100%' }} />
        </div>
      ))}

      {/* Navigation dots */}
      <div style={{ textAlign: 'center' }}>
        {images.map((_, index) => (
          <span key={index} className={`dot ${index === slideIndex - 1 ? 'active' : ''}`} onClick={() => currentSlide(index + 1)}></span>
        ))}
      </div>

      {/* Next and previous buttons */}
      <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
      <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
    </div>
  );
};

export default Slideshow;

