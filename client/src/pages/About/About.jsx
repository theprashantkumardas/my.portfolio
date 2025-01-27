import React from 'react';
import styles from './About.module.css';
import Contact from '../Contact/Contact';


import myResumeCV from '../../assets/Images/my.resume.png.png';

const About = () => {
    return (
        <>
           <div className={styles.about}>
                <h2 className={styles.title}>About</h2>
                <p className={styles.description}>
                    Hi there,
                    <br />
                    I'm a passionate  <span className={styles.span2}>MERN and Android Developer</span> who loves bringing ideas to life on both the web and mobile platforms.
                    <br/>
                    For the web, I specialize in creating beautiful, user-friendly websites using pure HTML, CSS, and JavaScript. Whether you need a simple static website or something more interactive, I've got you covered!
                    <br />
                    <br />
                    I also build dynamic, full-stack web applications using the <span className={styles.span2}>MERN</span> ( MongoDB, Express.js, React.js, and Node.js) for robust and scalable solutions. To ensure modern and visually appealing designs, I incorporate Tailwind CSS into my projects for fast and efficient styling.
                     <br/>
                     <br/>
                    On the mobile side, I develop native Android applications using  <span className={styles.span2}>Kotlin, Jetpack Compose, and Firebase</span>, to create intuitive and engaging mobile experiences.
                    <br />
                    <br />
                    My focus is always on <span className={styles.span2} >Delivering high-quality work </span>that meets your requirements and exceeds your expectations. Let's work together to create something amazing.
                    <br />
                    <br />
                    Feel free to reach out—I'm excited to collaborate on your next project.
                </p>

                <h2 className={styles.title}>Resume</h2>
                <div className={styles.imgBorder} >
                    <div className={styles.description}>
                        <img src={myResumeCV} alt="My Resume" className={styles.image} />
                    </div>
                </div>
            </div>
            <Contact />

        </>
    )
}

export default About