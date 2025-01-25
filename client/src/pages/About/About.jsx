import React from 'react';
import styles from './About.module.css';
import Contact from '../Contact/Contact';
const About = () => {
    return (
        <>
            <div className={styles.about}>
                <h2 className={styles.title}>About</h2>
                <p className={styles.description}>Hi there,
                    <br />
                    I'm a passionate  <span className={styles.span2}>Web Developer</span> who loves bringing ideas to life on the internet. I specialize in creating beautiful, user-friendly websites using pure HTML, CSS, and JavaScript. Whether you need a simple static website or something more interactive, I've got you covered!
                    <br />
                    <br />

                    I also build dynamic, full-stack applications using the <span className={styles.span2}>MERN</span> ( MongoDB, Express.js, React.js, and Node.js) for robust and scalable solutions. To ensure modern and visually appealing designs, I incorporate Tailwind CSS into my projects for fast and efficient styling.
                    <br />
                    <br />
                    My focus is always on <span className={styles.span2} >Delivering high-quality work </span>that meets your requirements and exceeds your expectations. Let's work together to create something amazing.
                    <br />
                    <br />
                    
                    Feel free to reach out—I'm excited to collaborate on your next project.</p>
            </div>
            <Contact/>
        
        </>
    )
}

export default About