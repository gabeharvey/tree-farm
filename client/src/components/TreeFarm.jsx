import { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TreeFarm = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const totalSlides = 2;

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url(/loblolly-pine-farm-2.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    };

    const carouselContainerStyle = {
        width: '80%',
        maxWidth: '300px',
        maxHeight: '400px',
        borderRadius: '15px',
        overflow: 'hidden',
        position: 'relative',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        marginBottom: '280px',
        border: '8px solid beige',
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'cover',
    };

    const customButtonStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255)',
        color: 'black',
        borderRadius: '15%',
        fontSize: '1.5em',
        width: '40px',
        height: '40px',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        cursor: 'pointer',
        zIndex: '999',
    };

    const disabledButtonStyle = {
        opacity: 0.3,
        cursor: 'pointer',
    };

    const leftButtonStyle = {
        left: '10px',
    };

    const rightButtonStyle = {
        right: '10px',
    };

    const buttonIconStyle = {
        fontSize: '24px',
    };

    const textContainerStyle = {
        position: 'absolute',
        top: '0',
        width: '100%',
        textAlign: 'center',
        color: 'beige',
        fontFamily: 'Space Mono',
        fontSize: '24px',
        fontWeight: 'bolder',
        overflow: 'hidden',
        animation: 'typing 5s steps(40, end)',
    };

    const handlePrev = () => {
        if (currentIndex > 0) {
            setCurrentIndex(currentIndex - 1);
        }
    };

    const handleNext = () => {
        if (currentIndex < totalSlides - 1) {
            setCurrentIndex(currentIndex + 1);
        }
    };

    return (
        <div style={containerStyle}>
            <div style={carouselContainerStyle}>
                <Carousel
                    selectedItem={currentIndex}
                    onChange={(index) => setCurrentIndex(index)}
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={false}
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    stopOnHover={true}
                    showIndicators={false}
                >
                    <div>
                        <img src="/lake.png" alt="Lake" style={imageStyle} />
                    </div>
                    <div>
                        <img src="/fish.png" alt="Fish" style={imageStyle} />
                    </div>
                </Carousel>
                <div
                    style={{
                        ...customButtonStyle,
                        ...leftButtonStyle,
                        ...(currentIndex === 0 && disabledButtonStyle),
                    }}
                    onClick={handlePrev}
                >
                    <FaChevronLeft style={buttonIconStyle} />
                </div>
                <div
                    style={{
                        ...customButtonStyle,
                        ...rightButtonStyle,
                        ...(currentIndex === totalSlides - 1 && disabledButtonStyle),
                    }}
                    onClick={handleNext}
                >
                    <FaChevronRight style={buttonIconStyle} />
                </div>
            </div>
            <div style={textContainerStyle}>
                <h1>Welcome to the Harvey Tree Farm</h1>
            </div>
        </div>
    );
};

export default TreeFarm;
