import React, { Fragment } from "react";
import Row from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './review.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import "swiper/css/pagination";
import { Autoplay, FreeMode, Pagination } from "swiper";

const Review = () => {
    return(
        <Fragment>

            <div className="review_section">
                <div className="container">
                    <div className="review_title">
                        <h2>Real Patients, Real Stories </h2>
                    </div>
                    <div className="review_inner">
                        <div className="review_bottom">
                            <Row>
                            <Swiper
                            modules={[Pagination, Autoplay, FreeMode]}
                            breakpoints={{
                                0: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                            575: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                }
                               
                              }}
                            freeMode={true}
                            spaceBetween={30}
                            slidesPerView={2}
                            // slidesPerGroup={4}
                            pagination={{ clickable: true }}
                            // pagination={true}
                            
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            loop={true}
                            
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                            <SwiperSlide> 
                                {/* <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/fCH1SQUuFn4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/D9bl7EEyo5I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p>Liver Cirrhosis Treatment Through Living Donor Liver Transplant</p>
                            </SwiperSlide>  
                            <SwiperSlide> 
                                {/* <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/OpXRkj_DueY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */}
                                <iframe width="100%" height="315" src="https://www.youtube.com/embed/R1y5Kh7OlZo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p>Aparna - Recovering from Acute Liver Failure | Max Saket</p>
                            </SwiperSlide>  
                            {/* <SwiperSlide>  
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/dF8vVqjLIgA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p>Chronic Liver Failure Treatment | Liver Disease Treatment</p>
                            </SwiperSlide>  
                            <SwiperSlide>  
                                <iframe height="200px" width="100%" style={{ borderRadius:"10px" }} src="https://www.youtube.com/embed/OpXRkj_DueY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                                <p>Liver Transplant: What You Need To Know</p>
                            </SwiperSlide> */}
                         </Swiper>
                               
                            </Row>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}


export default Review