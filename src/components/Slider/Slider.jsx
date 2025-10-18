import React, { useState, useEffect } from "react";
import "./Slider.style.css";
import slider from "../../assets/background.png";
import logofanstaic from "../../assets/logo/logofanstatic.png";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      title: "Fantastic Four",
      subtitle: "Bộ Tứ Siêu Đẳng",
      description:
        "The Fantastic Four learns that they aren't the only super-powered beings in the universe when they square off against the powerful Silver Surfer and the planet-eating Galactus.",
      genres: [
        "Chính kịch",
        "Kinh dị",
        "Hành động",
        "Thần thoại",
        "Sci-Fi",
        "Phiêu lưu",
      ],
      rating: "8.5",
      year: "2024",
      duration: "142 phút",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="slider">
      <div className="slider__container">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`slider__slide ${
              index === currentSlide ? "slider__slide--active" : ""
            }`}
            style={{
              backgroundImage: `url(${slider})`,
            }}
          >
            <div className="slider__overlay"></div>

            <div className="slider__content">
              <div className="slider__left">
                <div className="slider__poster-placeholder">
                  <div className="slider__poster-frame">
                    <img
                      src={logofanstaic}
                      alt={"logo"}
                      className="slider__poster-image"
                    />
                  </div>
                </div>
              </div>

              <div className="slider__right">
                <div className="slider__info">
                  <div className="slider__meta">
                    <span className="slider__rating">★ {slide.rating}</span>
                    <span className="slider__year">{slide.year}</span>
                    <span className="slider__duration">{slide.duration}</span>
                  </div>

                  <div className="slider__genres">
                    {slide.genres.map((genre, idx) => (
                      <span key={idx} className="slider__genre">
                        {genre}
                      </span>
                    ))}
                  </div>

                  <p className="slider__description">{slide.description}</p>

                  <div className="slider__actions">
                    <button className="slider__play-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path d="M8 5v14l11-7z" fill="currentColor" />
                      </svg>
                    </button>
                    <button className="slider__favorite-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                    <button className="slider__bookmark-btn">
                      <svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                      >
                        <path
                          d="M17 3H7c-1.1 0-1.99.9-1.99 2L5 21l7-3 7 3V5c0-1.1-.9-2-2-2z"
                          fill="currentColor"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="slider__bottom">
              <div className="slider__dots">
                {slides.map((_, index) => (
                  <button
                    key={index}
                    className={`slider__dot ${
                      index === currentSlide ? "slider__dot--active" : ""
                    }`}
                    onClick={() => setCurrentSlide(index)}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Slider;
