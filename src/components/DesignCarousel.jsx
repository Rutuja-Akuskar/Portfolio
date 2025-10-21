import React, { useEffect, useRef } from 'react';
import './DesignCarousel.css';
import img1 from '../assets/img1.jpeg';
import img2 from '../assets/img2.jpeg';
import img3 from '../assets/img3.jpeg';
import img4 from '../assets/img4.jpeg';
import img5 from '../assets/img5.jpeg';
import img6 from '../assets/img6.jpeg';
// import img1 from '../assets/img1.jpeg';
// import img2 from '../assets/img2.jpeg';

const images = [img1, img2, img3, img4, img5, img6, img1, img2];

export default function DesignCarousel() {
  const services = [
    { title: 'Manual Therapy', description: 'Hands-on techniques to reduce pain and restore function.' },
    { title: 'Electrotherapy', description: 'Advanced modalities for pain relief and muscle rehab.' },
    { title: 'Sports Injury Rehab', description: 'Specialized treatment to get athletes back in the game.' },
    { title: 'Post-Surgery Rehab', description: 'Comprehensive recovery programs after surgical procedures.' },
    { title: 'Pain Management', description: 'Evidence-based approaches to chronic and acute pain.' },
    { title: 'Neuro Rehabilitation', description: 'Specialized care for neurological conditions and stroke.' },
    { title: 'Pediatric Physiotherapy', description: 'Gentle, effective treatments for developmental needs.' },
    { title: 'Geriatric Care', description: 'Programs for seniors to maintain mobility and independence.' },
  ];
  const carouselRef = useRef(null);
  const listRef = useRef(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    const listHTML = listRef.current;

    const nextButton = carousel.querySelector('#next');
    const prevButton = carousel.querySelector('#prev');
    const backButton = carousel.querySelector('#back');
    const seeMoreButtons = carousel.querySelectorAll('.seeMore');

    let unAcceppClick;

    const showSlider = (type) => {
      if (!nextButton || !prevButton) return;
      nextButton.style.pointerEvents = 'none';
      prevButton.style.pointerEvents = 'none';

      carousel.classList.remove('next', 'prev');
      let items = carousel.querySelectorAll('.list .item');
      if (type === 'next') {
        listHTML.appendChild(items[0]);
        carousel.classList.add('next');
      } else {
        listHTML.prepend(items[items.length - 1]);
        carousel.classList.add('prev');
      }
      clearTimeout(unAcceppClick);
      unAcceppClick = setTimeout(() => {
        nextButton.style.pointerEvents = 'auto';
        prevButton.style.pointerEvents = 'auto';
      }, 800);
    };

    if (nextButton) nextButton.onclick = () => showSlider('next');
    if (prevButton) prevButton.onclick = () => showSlider('prev');
    seeMoreButtons.forEach((button) => {
      button.onclick = function () {
        carousel.classList.remove('next', 'prev');
        carousel.classList.add('showDetail');
      };
    });
    if (backButton) backButton.onclick = function () {
      carousel.classList.remove('showDetail');
    };

    // Cleanup
    return () => {
      if (nextButton) nextButton.onclick = null;
      if (prevButton) prevButton.onclick = null;
      if (backButton) backButton.onclick = null;
      seeMoreButtons.forEach((button) => (button.onclick = null));
    };
  }, []);

  return (
    <div className="design-carousel carousel" ref={carouselRef}>
      <div className="list" ref={listRef}>
        {services.map((svc, i) => {
          const src = images[i % images.length];
          return (
            <div className="item" key={i}>
              <img src={src} alt={`slide-${i + 1}`} />
              <div className="introduce">
                <div className="section-title">Our Services</div>
                <div className="topic">{svc.title}</div>
                <div className="des">{svc.description}</div>
                <div className="introduce-ctas">
                  <a href="/contact" className="bookNow">Book Now</a>
                  <button className="seeMore">Learn More &#8599;</button>
                </div>
              </div>
              <div className="detail">
                <div className="title">{svc.title}</div>
                <div className="des">{svc.description}</div>
              </div>
            </div>
          );
        })}
      </div>

      <div className="arrows">
        <button id="prev">&lt;</button>
        <button id="next">&gt;</button>
        <button id="back">See All  &#8599;</button>
      </div>
    </div>
  );
}
