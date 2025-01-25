import React from 'react';
import Button from '../../components/Button/Button';
import styles from './Home.module.css';
import Projects from '../Projects/Projects';
import { Link } from 'react-router-dom';
import ContactForm from '../../components/ContactForm/ContactForm';
import Contact from '../Contact/Contact';
import Footer from '../../layouts/Footer/Footer';


const Home = () => {
    return (
        <>
            <div className={styles.home}>
                <div className={styles.hero}>
                    <h1 className={styles.developerName}>Prashant <span className={styles.span1} >.</span>KD</h1>
                    <p className={styles.description}>I'm a passionate  <span className={styles.span2}>Mern Developer</span> who loves bringing ideas to life on the internet.
                    <br />
                    <br />
                     I specialize in creating beautiful, user-friendly websites using  Mern. Whether you need a simple static website or something more interactive, I've got you covered!</p>
                    <Footer/>
                    <div className={styles.buttons}>
                        <Link to="/projects"><Button variant='primary'>Project</Button></Link>
                        <Link to="/contact"><Button variant='secondary'>contact</Button></Link>
                        
                    </div>
                </div>
            </div>
            <div className={styles.Projects}>
                <Projects />
            </div>
            <Contact/>
            
        </>

    );
};

export default Home;