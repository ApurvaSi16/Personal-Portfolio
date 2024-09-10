import React from 'react';
import "./about.css";
import Image from "../../assets/avatar-2.svg";
import AboutBox from './AboutBox';

const about = () => {
  return (
    <section className="about container section" id='about'>
      <h2 className="section__title">About Me</h2>

      <div className="about__container grid">
        <img src={Image} alt="" className='about__img'/>

        <div className="about__data grid">
          <div className="about__info">
            <p className="about__description">I am Apurva Singh web developer from Uttar Pradesh, India. I have rich experience in website design and developing.</p>
            <a href="" className="btn">Download Resume</a>
          </div>

          <div className="about__skills grid">
            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Web Development</h3>
                <span className="skills__number">90%</span>       
              </div>

              <div className="skills__bar">
                <span className="skills__percentage development"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">UI/UX Design</h3>
                <span className="skills__number">90%</span>       
              </div>

              <div className="skills__bar">
                <span className="skills__percentage ui__design"></span>
              </div>
            </div>

            <div className="skills__data">
              <div className="skills__titles">
                <h3 className="skills__name">Android Application</h3>
                <span className="skills__number">70%</span>       
              </div>

              <div className="skills__bar">
                <span className="skills__percentage android"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <AboutBox />
    </section>
  );
};

export default about