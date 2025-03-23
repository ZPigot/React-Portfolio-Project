import React from 'react';

const AboutMe = () => {
    return (
        <div style={styles.container}>
            <h1 style={styles.heading}>About Me</h1>
            <p style={styles.paragraph}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor 
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation 
                ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
            <p style={styles.paragraph}>
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
    );
};

const styles = {
    container: {
        maxWidth: '800px',
        margin: '50px auto',
        padding: '20px',
        backgroundColor: '#f9f9f9',
        borderRadius: '10px',
        boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
        fontFamily: 'Arial, sans-serif',
        lineHeight: '1.6',
    },
    heading: {
        fontSize: '2.5rem',
        color: '#333',
        marginBottom: '20px',
        textAlign: 'center',
    },
    paragraph: {
        fontSize: '1.1rem',
        color: '#555',
        marginBottom: '15px',
    },
};

export default AboutMe;