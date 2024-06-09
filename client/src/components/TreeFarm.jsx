import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const TreeFarm = () => {
    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url(/public/loblolly-pine.avif)',
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
    };

    const imageStyle = {
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        borderRadius: '15px',
    };

    const customButtonStyle = {
        position: 'absolute',
        top: '50%',
        transform: 'translateY(-50%)',
        backgroundColor: 'rgba(255, 255, 255, 0.5)',
        color: 'beige',
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

    const leftButtonStyle = {
        ...customButtonStyle,
        left: '10px',
    };

    const rightButtonStyle = {
        ...customButtonStyle,
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

    return (
        <div style={containerStyle}>
            <div style={carouselContainerStyle}>
                <Carousel
                    showArrows={false}
                    autoPlay={true}
                    infiniteLoop={true}
                    showThumbs={false}
                    showStatus={false}
                    interval={5000}
                    stopOnHover={true}
                    showIndicators={false}
                >
                    <div>
                        <img src="/public/joe-1.png" alt="Joe 1" style={imageStyle} />
                    </div>
                    <div>
                        <img src="/public/joe-2.png" alt="Joe 2" style={imageStyle} />
                    </div>
                    <div>
                        <img src="/public/lake.png" alt="Lake" style={imageStyle} />
                    </div>
                    <div>
                        <img src="/public/fish.png" alt="Fish" style={imageStyle} />
                    </div>
                </Carousel>
                <div style={leftButtonStyle}>
                    <FaChevronLeft style={buttonIconStyle} />
                </div>
                <div style={rightButtonStyle}>
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
