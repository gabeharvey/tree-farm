import { useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Handle form submission logic here
        console.log('Form submitted:', formData);
    };

    const containerStyle = {
        position: 'relative',
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        backgroundImage: 'url(/background-image.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: 'beige',
        fontFamily: 'Space Mono',
    };

    const contentStyle = {
        width: '80%',
        maxWidth: '600px',
        backgroundColor: 'rgba(0, 0, 0, 0.7)',
        padding: '20px',
        borderRadius: '15px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        border: '8px solid beige',
    };

    const headerStyle = {
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: 'bolder',
        marginBottom: '20px',
        animation: 'typing 5s steps(40, end)',
    };

    const formStyle = {
        display: 'flex',
        flexDirection: 'column',
        gap: '10px',
    };

    const inputStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        fontSize: '16px',
    };

    const textAreaStyle = {
        ...inputStyle,
        height: '100px',
    };

    const buttonStyle = {
        padding: '10px',
        borderRadius: '5px',
        border: 'none',
        backgroundColor: 'beige',
        color: 'black',
        fontSize: '16px',
        cursor: 'pointer',
        marginTop: '10px',
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1 style={headerStyle}>Contact Us</h1>
                <form style={formStyle} onSubmit={handleSubmit}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        style={inputStyle}
                    />
                    <textarea
                        name="message"
                        placeholder="Your Message"
                        value={formData.message}
                        onChange={handleChange}
                        style={textAreaStyle}
                    ></textarea>
                    <button type="submit" style={buttonStyle}>Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
