// HeroSection.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const HeroSection = () => {
  const images = [
    {
      src: "https://devknus.notion.site/image/https%3A%2F%2Fprod-files-secure.s3.us-west-2.amazonaws.com%2Feeee8099-a731-4be4-b949-97588572fb6b%2Faf556a00-6601-4a15-8931-dab16ebd5981%2FUntitled.png?table=block&id=4ec2cb9b-b4a9-4de8-8195-725a3a795de5&spaceId=eeee8099-a731-4be4-b949-97588572fb6b&width=2000&userId=&cache=v2",
      alt: "Image 1",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/004/299/806/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
      alt: "Image 2",
    },
    {
      src: "https://static.vecteezy.com/system/resources/previews/011/871/820/non_2x/online-shopping-on-phone-buy-sell-business-digital-web-banner-application-money-advertising-payment-ecommerce-illustration-search-vector.jpg",
      alt: "Image 3",
    },
    {
      src: "https://www.abitcorp.com/images/bg-banner-service-ecommerce2.jpg",
      alt: "Image 4",
    },
  ];

  const settings = {
    dots: false,
    infinite: true,
    speed: 100,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000,
  };

  return (
    <div>
      <Slider {...settings}>
        {images.map((image, index) => (
          <div key={index}>
            <img className="lg:h-[400px] h-[160px] w-full object-cover" src={image.src} alt={image.alt} />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default HeroSection;
