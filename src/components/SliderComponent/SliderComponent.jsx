import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const SliderComponent = () => {
  const images = [
    'https://i.ibb.co/fGyYqpH/images-1.jpg',
    'https://i.ibb.co/HDJ0Kp7/images-2.jpg',
    'https://i.ibb.co/BPHjcCS/images-3.jpg'
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
        <div className="py-10  bg-yellow-400" key={index}>
          <img className="mx-auto w-[600px] h-[300px]" src={src} alt={`Slide ${index + 1}`} />
        </div>
      ))}
    </Slider>
  );
};

export default SliderComponent;
