import React, { Fragment } from "react";
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay, FreeMode, Pagination } from "swiper";
import "swiper/css/pagination";
import Row  from 'react-bootstrap/Row';
import Col  from 'react-bootstrap/Col';
// import {doctor} from './doctorApi';

import image1 from "../../../src/doctor/Dr. Hrishikesh D Pai.jpg";
import image2 from "../../../src/doctor/dr parul katiyar.jpg";
import image3 from "../../../src/doctor/Dr.Poonam.Mishra-BSC.jpg";
import image4 from "../../../src/doctor/Dr. Bhavna Banga.jpg";
import image5 from "../../../src/doctor/Dr.-Ila_Gupta Marlin Medical Assistance.png";
import image6 from "../../../src/doctor/dr-dr-parul-prakash- Artemis.jpg";

import './doctorList.css'
 

const DoctorList = () => {

    const doctor = [
        {
            id: 1,
            name: "Dr. Hrishikesh Pai",
            image: image1,
            title:"Chairman of IVF & Infertility Center",
            hospital_name: "Fortis Memorial Research Institute, Gurgaon"
        },
        {
            id: 2,
            name: "Dr. Prul Katiyar",
            image: image2,
            title:"Co-Medical Director-IVF and Infertility",
            hospital_name: "ART Fertility Clinic, Delhi"
        },
        {
            id: 3,
            name: "Dr. Poonam Mishra",
            image: image3,
            title:"Sr. Consultant",
            hospital_name: "Baby Science IVF Clinics, Gurgaon"
        },
        {
            id: 4,
            name: "Dr. Bhavna Banga",
            image: image4,
            title:"Director – IVF",
            hospital_name: "Max Hospitals, Delhi"
        },
        {
            id: 5,
            name: "Dr. Ila Gupta ",
            image: image5,
            title:"Director & Sr. Consultant Reproductive Medicine",
            hospital_name: "Ferticity Fertility Clinic, Delhi"
        },
        {
            id: 6,
            name: "Dr. Parul Prakash",
            image: image6,
            title:"Sr. Consultant - Reproductive Medicine",
            hospital_name: "Artemis Hospital, Gurgaon"
        },
    ]

    return (
        <Fragment>
            <div className="doctor_section">
                <div className="container-fluid">
                    <div className="doctor_area">
                        <Row>
                            <Col>
                            <div className="doctor_title text-center">
                                <h2>CONSULT OUR INFERTILITY SPECIALISTS</h2>
                                <p>Consult our team of specialized doctors for infertility, including operative and non-operative procedures like IVF, IUI, ICSI etc.</p>
                            </div>
                            </Col>
                        </Row>
                       
                        <div className="doctor_list_section">
                        <Swiper
                            modules={[Pagination, Autoplay, FreeMode]}
                            breakpoints={{
                                0: {
                                  slidesPerView: 1,
                                  spaceBetween: 10,
                                },
                                480: {
                                    slidesPerView: 2,
                                    spaceBetween: 10,
                                },
                                768: {
                                    slidesPerView: 3,
                                    spaceBetween: 15,
                                },
                                1024: {
                                    slidesPerView: 4,
                                    spaceBetween: 15,
                                },
                                1280: {
                                    slidesPerView: 5,
                                    spaceBetween: 30,
                                },
                                 
                              }}
                            freeMode={true}
                            spaceBetween={30}
                            slidesPerView={6}
                            slidesPerGroup={6}
                            pagination={{ clickable: true }}
                    
                            // autoplay={{
                            //     delay: 2000,
                            //     disableOnInteraction: false
                            // }}
                            // loop={true}
                            
                            onSlideChange={() => console.log('slide change')}
                            onSwiper={(swiper) => console.log(swiper)}
                            >
                                {
                                    doctor.map((doc) => {
                                    const { id, name , image , title , hospital_name} = doc
                                    return <SwiperSlide key={id}> 
                                        <div className="doctro_slider_content">
                                            <img height="250px" width="100%" src={image} alt="" />
                                            <div className="s_body">
                                                <h4>{name}</h4>
                                                <p>{title}</p>
                                                <p><strong>{hospital_name}</strong></p>
                                            </div>
                                        </div>
                                    </SwiperSlide> 
        
                                    })
                                } 

                         </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    )

}

export default DoctorList