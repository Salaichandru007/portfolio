import React from 'react';
import './Certificates.css';

import git_udemy from '../../assets/git_udemy.jpg';



const Certificates = () => {
    return (
        <section className="certificates container section" id="certificates">
            <h2 className="section__title">My Certificates</h2>

            <div className="certificates__container grid">
                <div className="certificate__card">
                    <div className="certificate__thumb">
                        <a href="#"><span className="certificate__category">Udemy</span></a>
                        <a href="#"><img src={git_udemy} alt="Udemy Certificate" className='certificate__img' /></a>
                    </div>
                    <div className="certificate__details">
                        <h3 className="certificate__title">Git</h3>
                        <div className="certificate__meta">
                            <span>Completed: September 1, 2024</span>
                        </div>
                    </div>
                </div>


















            </div>
        </section>
    );
}

export default Certificates

