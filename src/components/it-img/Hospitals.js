import React, { Fragment } from 'react';

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, Pagination } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
import './it-img.css';

import image1 from "../../hospital/Fortis Memorial Research Institute (FMRI).jpg"
import image2 from "../../hospital/Max BLK.jpg"
import image3 from "../../hospital/ART fertility.jpg"
import image4 from "../../hospital/Ferticity CLinic.jpg"
import image5 from "../../hospital/Baby Science.jpg"
import image6 from "../../hospital/Artemis Hospital Gurgaon123.jpg"

import image9 from "../../assets/images/nabh.png"
import image10 from "../../assets/images/nabl.png"

const Hospitals = () => {
    const hospital__info = [
        {
            image    : image1,
            title    : "Fortis Memorial Research Institute (FMRI)",
            location : "Sector - 44, Opposite HUDA City Centre Gurgaon, Haryana - 122002, India",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image2,
            title    : "BLK-Max Super Speciality Hospital",
            location : "Pusa Rd, Radha Soami Satsang, Rajendra Place, New Delhi, Delhi 110005",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image3,
            title    : "ART Fertility Clinic",
            location : "Hub & Oak, E-14, Chauhan Vithi Rd, Block E, Defence Colony, New Delhi, Delhi 110024",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image4,
            title    : "Ferticity Fertility Clinic",
            location : "12-Navjeevan Vihar, Geetanjali Enclave, Malviya Nagar, New Delhi, Delhi 110017",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image5,
            title    : "Baby Science IVF Clinic",
            location : "6A, Ground Floor, Time Square Building, Block B Sushant Lok Phase 1, Gurugram, Haryana 122002 ",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
        {
            image    : image6,
            title    : "Artemis Hospital ",
            location : "Sector 51 Near Unitech Cyber Park, Gurugram",
            facilities: "Our JCI and NABH accredited hospitals offers best treatment and services to our patients",

            image2 : image9,
            image3 : image10
        },
    ]

    return (
        <Fragment>
            <div className="it-img_section">
                <div className="container">
                    <div className="it-img_area"> 
                        <div className="it-img_list_section">
                        <Swiper
                            modules={[Pagination, Autoplay]}
                            spaceBetween={50}
                            slidesPerView={1}
                            pagination={{ clickable: true }}
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            loop={true} onSlideChange={() => console.log('slide change')} onSwiper={(swiper) => console.log(swiper)} >
                                {
                                    hospital__info.map((item, index)=>
                                        <SwiperSlide key={index}> 
                                            <div className="it-img-txt">
                                                <Row className="align-items-center">
                                                    <Col md={6}>
                                                        <img width="100%" src={item?.image} alt="image" />
                                                    </Col>
                                                    <Col md={6}>
                                                        <div className="content">
                                                            <h4>{item.title}</h4>
                                                            <span>{item.location}</span>
                                                            <div className="sm_item d-flex">
                                                                <div className="sm_img">
                                                                    <img src={item.image2} alt="image" />
                                                                </div>
                                                                <div className="sm_txt">
                                                                    <p>Our <strong>NABH & ISO</strong>  accredited hospitals offer <br /> <strong>best in class services to our patients</strong></p>
            
                                                                </div>
                                                            </div>
                                                            <div className="sm_item d-flex">
                                                                <div className="sm_img">
                                                                    <img src={item.image3} alt="image" />
                                                                </div>
                                                                <div className="sm_txt">
                                                                    <strong>NABL</strong>
                                                                    <p>accredited Labs</p>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </Col>
                                                </Row>
                                            </div>
                                        </SwiperSlide>
                                    )
                                }
                            
                         </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
};

export default Hospitals;