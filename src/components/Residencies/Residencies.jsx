import React from 'react'
import {Swiper, SwiperSlide, useSwiper} from 'swiper/react'
import "swiper/css"
import './Residencies.css'
import data from '../../utils/Slider.json';
import { sliderSettings } from '../../utils/Common';
const Residencies = () => {
  return (
    <section id="residencies" className="r-wrapper">
        <div className="paddings innerWidth r-container">
            <div className="r-head flexColStart">
                <span className='orangeText'>Best Choices</span>
                <span className='primaryText'>Popular Hostels</span>
            </div>

            <Swiper {...sliderSettings}>
                <SliderButtons/>
                {data.map((card, i) => (
                    <SwiperSlide key={i}>
                        <div className="flexColStart r-card">
                            <img src= {card.image} alt="home" />
                             <span className="secondaryText r-price">
                                <span style={{color: "orange"}}>Ugx</span>
                                <span>{card.price}</span>
                             </span>

                             <span className='primaryText'><a href="testComponent">{card.name}</a></span>
                             <span className='secondaryText'>{card.detail}</span>
                        </div>
                    </SwiperSlide>
                   )) 
                }
            </Swiper>
        </div>
    </section>
  )
}

export default Residencies;

const SliderButtons = () => {
    const swiper = useSwiper();
    return (
       <div className="flexCenter r-buttons">
            <button onClick={() => swiper.slidePrev()}>&lt;</button> 
            <button onClick={() => swiper.slideNext()}>&gt;</button>
       </div> 
    );
};

