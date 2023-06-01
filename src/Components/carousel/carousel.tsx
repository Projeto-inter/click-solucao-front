import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

function Carousel() {
const responsive = {
    0: { items: 1 },
    568: { items: 1 },
    1024: { items: 1 },
};

const items = [
    <img src="https://i.imgur.com/K2a3zoj.png" role="presentation" />,
    <img src="https://i.imgur.com/q4b8O3n.png" role="presentation" />,
];

const carouselStyles = {
    width: '100%',
    height: 'auto',
};

const imageStyles = {
    maxWidth: '100%',
    height: 'auto',
};

return (
    <div style={carouselStyles}>
    <AliceCarousel
        mouseTracking
        items={items}
        autoPlay
        infinite
        responsive={responsive}
        doItsDisabled={true}
        buttonsDisabled={true}
        stagePadding={{
        paddingLeft: 0,
        paddingRight: 0,
        }}
        autoPlayInterval={4000}
    >
        {items.map((item, index) => (
        <div key={index} style={carouselStyles}>
            {React.cloneElement(item, { style: imageStyles })}
        </div>
        ))}
    </AliceCarousel>
    </div>
);
}

export default Carousel;
