import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.png';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                           Hello! I'm Chandiraguru T., and I'm based in Tamil Nadu, India. 
                           I am a passionate and detail-oriented Full Stack Developer with a strong foundation in Java, Spring Boot, Hibernate, and modern front-end technologies like React.js, HTML, CSS, and JavaScript (ES6+).
                           I enjoy building efficient, user-friendly web applications and continuously learning new tools and frameworks. My goal is to contribute high-quality solutions to real-world problems while growing as a technology professional.
                        </p>
                        <ul className="about__list">
                            <li>Java</li>
                            <li>SQL</li>
                            <li>Web Tech</li>
                            <li>React.Js</li>
                            <li>J2EE</li>
                            <li>RESTful API's</li>
                        </ul>
                        <button className="btn" onClick={downloadResume}>Donwload Resume</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About