import React, { useEffect, useState } from 'react';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";

import Cards from './Cards';

function Freepics() {
    const [image, setImage] = useState([]);
    
    useEffect(() => {
        const getImage = async () => {
            try {
                const res = await axios.get("http://localhost:4001/image");
                const data = res.data.filter(data => data.priceCategory === "Free");
                setImage(data);
            } catch (error) {
                console.log(error);
            }
        };
        getImage();
    }, []);

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 3,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
                <div>
                    <h1 className="font-bold text-xl pb-2 mt-10 sm:mt-0 lg:mt-10">Free images</h1>
                    <p>Enjoy a selection of high-quality, free-to-download images at Pixelarium. Explore stunning visuals at no cost, perfect for your creative projects, personal use, or just to add a touch of beauty to your day. Discover and download your favorites now!</p>
                </div>
                <div>
                    <Slider {...settings}>
                        {image.map((item) => (
                            <Cards item={item} key={item.id} />
                        ))}
                    </Slider>
                </div>
            </div>
        </>
    );
}

export default Freepics;
