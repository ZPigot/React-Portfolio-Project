import React from 'react';

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                <p>&copy; {new Date().getFullYear()} Your Portfolio Name. All rights reserved.</p>
                <ul style={styles.socialLinks}>
                    <li><a href="https://github.com/ZPigot" target="_blank" rel="noopener noreferrer">GitHub</a></li>
                    <li><a href="https://linkedin.com/in/zuhayr-pigot-592b51127" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                </ul>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: '#333',
        color: '#fff',
        padding: '20px 0',
        textAlign: 'center',
    },
    container: {
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '0 20px',
    },
    socialLinks: {
        listStyle: 'none',
        padding: 0,
        margin: '10px 0 0',
        display: 'flex',
        justifyContent: 'center',
        gap: '15px',
    },
};

export default Footer;