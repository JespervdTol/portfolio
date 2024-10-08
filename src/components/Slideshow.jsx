import React, { useEffect, useState } from 'react';
import '../App.scss';

const Slideshow = ({ images }) => {
  const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
    const interval = setInterval(() => {
        plusSlides(1);
      }, 8000);
      return () => clearInterval(interval);
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

    Array.from(slides).forEach((slide) => {
      slide.style.display = 'none';
    });

    slides[newIndex - 1].style.display = 'block';

    Array.from(dots).forEach((dot, index) => {
      if (index === newIndex - 1) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });

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
      <div className='arrows'>
        <span className="prev" onClick={() => plusSlides(-1)}>&#10094;</span>
        <span className="next" onClick={() => plusSlides(1)}>&#10095;</span>
      </div>
    </div>
  );
};

export default Slideshow;

