import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";

// Use relative paths for images stored in the public folder
const images = [
    "image1.jpeg",
    "image2.jpeg",
    "image3.jpeg",
    "image4.jpeg",
    "image5.jpeg",
    "image6.jpeg",
    "image7.jpeg",
    "image8.jpeg",
    "image9.jpeg",
    "image10.jpeg",
    "image11.jpeg",
    "image12.jpeg",
    "image13.jpeg",
];

function ImageSlider() {
    return (
        <div className="slider-container">
            <h2 className="slider-heading">Tech Events Done Before</h2>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                slidesPerView={3}
                spaceBetween={10}
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image}> {/* Use image name as key */}
                        <img src={`/assets/${image}`} alt={`Slide ${image}`} className="slider-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ImageSlider;
