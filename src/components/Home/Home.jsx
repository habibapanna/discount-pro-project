import React from 'react';
import 'animate.css'; // Importing Animate.css

import SliderComponent from '../SliderComponent/SliderComponent';
import TopBrands from '../TopBrands/TopBrands';

const Home = () => {
    return (
        <div>
            <section>
                <SliderComponent className="animate__animated animate__fadeIn" />
            </section>
            <section>
                <TopBrands className="animate__animated animate__zoomIn" />
            </section>
        </div>
    );
};

export default Home;
