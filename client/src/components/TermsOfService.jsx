import 'react-responsive-carousel/lib/styles/carousel.min.css';

const TermsOfService = () => {
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
        overflow: 'auto',
        maxHeight: '80vh',
    };

    const headerStyle = {
        textAlign: 'center',
        fontSize: '36px',
        fontWeight: 'bolder',
        marginBottom: '20px',
        animation: 'typing 5s steps(40, end)',
    };

    const textStyle = {
        textAlign: 'left',
        fontSize: '18px',
        lineHeight: '1.5',
    };

    return (
        <div style={containerStyle}>
            <div style={contentStyle}>
                <h1 style={headerStyle}>Terms of Service</h1>
                <div style={textStyle}>
                    <p>Welcome to the Harvey Tree Farm. These terms and conditions outline the rules and regulations for the use of our website and services.</p>

                    <h2>Introduction</h2>
                    <p>By accessing this website, we assume you accept these terms and conditions in full. Do not continue to use Harvey Tree Farm website if you do not accept all of the terms and conditions stated on this page.</p>

                    <h2>Intellectual Property Rights</h2>
                    <p>Unless otherwise stated, Harvey Tree Farm and/or its licensors own the intellectual property rights for all material on the website. All intellectual property rights are reserved. You may view and/or print pages from http://www.harveytreefarm.com for your own personal use subject to restrictions set in these terms and conditions.</p>

                    <h2>Restrictions</h2>
                    <p>You are specifically restricted from all of the following:</p>
                    <ul>
                        <li>Publishing any website material in any other media;</li>
                        <li>Selling, sublicensing, and/or otherwise commercializing any website material;</li>
                        <li>Publicly performing and/or showing any website material;</li>
                        <li>Using this website in any way that is or may be damaging to this website;</li>
                        <li>Using this website in any way that impacts user access to this website;</li>
                        <li>Using this website contrary to applicable laws and regulations, or in any way that may cause harm to the website, or to any person or business entity;</li>
                        <li>Engaging in any data mining, data harvesting, data extracting, or any other similar activity in relation to this website;</li>
                        <li>Using this website to engage in any advertising or marketing.</li>
                    </ul>

                    <h2>Limitation of Liability</h2>
                    <p>In no event shall Harvey Tree Farm, nor any of its officers, directors, and employees, be held liable for anything arising out of or in any way connected with your use of this website whether such liability is under contract. Harvey Tree Farm, including its officers, directors, and employees shall not be held liable for any indirect, consequential, or special liability arising out of or in any way related to your use of this website.</p>

                    <h2>Variation of Terms</h2>
                    <p>Harvey Tree Farm is permitted to revise these terms at any time as it sees fit, and by using this website you are expected to review these terms on a regular basis.</p>

                    <h2>Governing Law & Jurisdiction</h2>
                    <p>These terms will be governed by and interpreted in accordance with the laws of the State of [Your State], and you submit to the non-exclusive jurisdiction of the state and federal courts located in [Your State] for the resolution of any disputes.</p>
                </div>
            </div>
        </div>
    );
};

export default TermsOfService;
