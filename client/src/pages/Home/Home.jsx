import React from 'react';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';
import Projects from '../Projects/Projects';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import Contact from '../Contact/Contact';
import Footer from '../../layouts/Footer/Footer';

import myResumeCV from '../../assets/Images//my.resume.png.png';


const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.hero}>
                    <h1 className={styles.developerName}>Prashant <span className={styles.span1} >.</span>KD</h1>
                    <p className={styles.description}>I'm a passionate  <span className={styles.span2}>Mern Developer</span> along with <span className={styles.span2}>Android Developer</span> who loves bringing ideas to life on the internet.
                        <br />
                        <br />
                        I specialize in creating beautiful, user-friendly websites using  Mern and mobile friendly android apps using kotlin & jetpack compose. Whether you need a   website, android apps or something more interactive, I've got you covered!</p>
                    <Footer />
                    <div className={styles.buttons}>
                        <Link to="/projects"><Button variant='primary'>Project</Button></Link>
                        <a href="../../assets/Images/my.resume.png.png" download="Prashant_KD_CV.pdf">
                            <Button variant='secondary'>Download CV</Button>
                        </a>

                    </div>
                </div>
            </div>
            <div className={styles.Projects}>
                <Projects />
            </div>
            <Contact />

        </>

    );
};

export default Home;