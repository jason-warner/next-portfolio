import styles from '../styles/Carousel.module.scss';
import React from 'react';
import { useEffect, useRef, useState } from 'react';


const slides = [
  {
    slide: {
      title: 'Slide One',
      content: `LYywjeR`,
      summary: 'Details about slide one'
    },
  },
  {
    slide: {
      title: 'Slide Two',
      content: 'bGWJqxN',
      summary: 'Details about slide two'
    },
  },
  {
    slide: {
      title: 'Slide Three',
      content: '',
      summary: 'Details about slide three'
    },
  },
  {
    slide: {
      title: 'Slide Four',
      content: '',
      summary: 'Details about Slide four'
    },
  },
  {
    slide: {
      title: 'Slide Five',
      content: '',
      summary: 'Details about Slide five'
    }
  }
];
const slideLen = (slides.length - 1); //acount for array compare
console.log(slideLen)


const SlideItem = ({ item, idx, activeSlide }) => {
  const
    slide = item.slide,
    slideRef = useRef(null),
    codepenLink = ("https://codepen.io/jason-warner/pen/").concat(slide.content);

  const activeSlideLogic = () => {
    const
      domSlide = slideRef.current,
      slideIndex = (parseInt(domSlide.className.substr(4, 1)));
    if (slideIndex === activeSlide) {
      domSlide.classList.remove("inactive-slide");
      domSlide.classList.add("active-slide");
    } else {
      domSlide.classList.remove("active-slide");
      domSlide.classList.add("inactive-slide");
    }
  }

  const addScript = () => {
    const script = document.createElement("script");
    script.src = "https://cpwebassets.codepen.io/assets/embed/ei.js";
    script.async = true;
    document.body.appendChild(script);
  }

  useEffect(() => {
    activeSlideLogic();
    addScript();
  });

  return (
    <li ref={slideRef} className={`idx-${idx} slideItem`}>
      <h2>{slide.title}</h2>
      <article>
        <p className={styles.codepen} data-height="350" data-theme-id="dark" data-slug-hash={slide.content} data-preview="true" data-user="jason-warner">
          <span>See this <a href={codepenLink}>
            React Snippet</a> by <a href="https://codepen.io/jason-warner">Jason Warner</a> on <a href="https://codepen.io">CodePen</a>.
          </span>
        </p>
      </article>
      <p>{slide.summary}</p>
    </li>
  )
}


const Carousel = () => {
  let [activeSlide, setActiveSlide] = useState(0);
  const
    increment = () => activeSlide < slideLen && setActiveSlide(++activeSlide),
    decrement = () => activeSlide > 0 && setActiveSlide(--activeSlide),
    dotClick = (index) => setActiveSlide(index);

  return (
    <div className={styles.carouselWrap}>
      <div className={styles.carouselContainer}>
        <ul className={styles.carouselList}>
          {slides.map((slide, index) => (
            <SlideItem
              key={index}
              item={slide}
              idx={index}
              activeSlide={activeSlide}
            />
          ))}
        </ul>
      </div>
      <nav className={styles.carouselNav}>
        <button onClick={decrement} className={styles.carouselLeft}>
          <svg width="24" height="24" viewBox="0 0 24 24" transform="rotate(180)" >
            <path d="M21 12l-18 12v-24z" />
          </svg>
        </button>
        <div className={styles.carouselDots}>
          {slides.map((_, index) => (
            <button key={index} onClick={() => dotClick(index)}>
              <svg width="12" height="12" viewBox="0 0 24 24">
                {index !== activeSlide && <path d="M12 2c5.514 0 10 4.486 10 10s-4.486 10-10 10-10-4.486-10-10 4.486-10 10-10zm0-2c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12z" />}
                {index === activeSlide && <circle cx="12" cy="12" r="12" />}
              </svg>
            </button>
          ))}
        </div>
        <button onClick={increment} className={styles.carouselRight}>
          <svg width="24" height="24" viewBox="0 0 24 24" >
            <path d="M21 12l-18 12v-24z" />
          </svg>
        </button>
      </nav>
    </div>
  );
}

export { Carousel }