import React from "react";
import Slider from "react-slick";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import "./carrousel.css"

const Carrousel = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
    
      return(
        <>       
        <Slider {...settings}>
          <div>
            <img className="carrouselImagenes" src="/img/carrouselZapatilla.jpg" loading="lazy" alt="Tocado de novia de flores preservadas en sombrero"/>
          </div>
          <div>
          <img className="carrouselImagenes" src="/img/carrouselAnteojo.webp" loading="lazy" alt="Flores preservadas para tocados de novia"/>
          </div>
          <div>
          <img className="carrouselImagenes" src="/img/carrouselGorra.webp" loading="lazy" alt="Niña con corona de flores preservadas"/>
          </div>
        </Slider>
        </>         
      );
}

export default Carrousel;
