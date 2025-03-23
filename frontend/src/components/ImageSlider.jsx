import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "../index.css";

// Import images dynamically (Vite-compatible)
const images = [
    "/src/assets/image1.jpeg",
    "/src/assets/image2.jpeg",
    "/src/assets/image3.jpeg",
    "/src/assets/image4.jpeg",
    "/src/assets/image5.jpeg",
    "/src/assets/image6.jpeg",
    "/src/assets/image7.jpeg",
    "/src/assets/image8.jpeg",
    "/src/assets/image9.jpeg",
    "/src/assets/image10.jpeg",
    "/src/assets/image11.jpeg",
    "/src/assets/image12.jpeg",
    "/src/assets/image13.jpeg",
];

function ImageSlider() {
    return (
        <div className="slider-container">
            <h2 className="slider-heading">Tech Events Done Before</h2> {/* Added heading */}
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                navigation
                pagination={{ clickable: true }}
                autoplay={{ delay: 2000 }}
                loop={true}
                slidesPerView={3}
                spaceBetween={10}  // Reduced space between images
                breakpoints={{
                    640: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {images.map((image) => (
                    <SwiperSlide key={image}>
                        <img src={image} alt="Slide" className="slider-image" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default ImageSlider;
