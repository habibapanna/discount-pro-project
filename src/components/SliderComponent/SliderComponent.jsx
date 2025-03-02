import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const images = [
    'https://i.postimg.cc/3JDKjY25/tamanna-rumee-lp-Gm415q9-JA-unsplash.jpg',
    'https://i.postimg.cc/y6G1Skgy/pexels-rdne-7563649.jpg',
    'https://i.postimg.cc/Hs5q02qq/pexels-828860-2693644.jpg',
    'https://i.postimg.cc/L4gtPgQH/pexels-karolina-grabowska-4033162.jpg',
    'https://i.ibb.co.com/5X0kwVB1/pexels-morningtrain-18105.jpg',
    'https://i.postimg.cc/VkWB6yGn/pexels-jefferson-1564389-3020129.jpg'
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };

  return (
    <Slider {...settings}>
      {images.map((src, index) => (
        <div className="py-10  bg-white" key={index}>
          <img className="mx-auto w-full h-[400px] object-cover" src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
