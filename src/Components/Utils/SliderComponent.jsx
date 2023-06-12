import React from "react";
import PropTypes from "prop-types";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper";
const SliderComponent = ({ slides }) => {
  console.log("slides", slides);
  return (
    <Swiper
      navigation={{
        prevEl: ".swiper-button-prev",
        nextEl: ".swiper-button-next",
      }}
      modules={[Navigation]}
      slidesPerView={4}
      spaceBetween={0}
      className="mySwiper"
      style={{ paddingLeft: "40px" }}
    >
      {slides &&
        slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div className="slider-card">
              <img src={slide.url} alt="logo" className="slider-card-img" />
            </div>
          </SwiperSlide>
        ))}
      <div className="swiper-button-prev"></div>
      <div className="swiper-button-next"></div>
    </Swiper>
  );
};

SliderComponent.propTypes = {
  slides: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SliderComponent;
