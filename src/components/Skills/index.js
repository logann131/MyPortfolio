import React, { useEffect } from 'react';
import { Divider } from '../Divider';
import { ReactComponent as SkillsPic } from '../../images/SkillsPic.svg';
import Aos from 'aos';
import 'aos/dist/aos.css';
import '../animation.css';
import $ from 'jquery';

import {
  SkillsContainer,
  SkillsWrapper,
  SkillsH1,
  SkillsRow,
  SkillsImg,
  SkillsBarsWrapper,
  DividerWrapper,
  SkillsVertBar,
  SkillsBar,
  SkillsBarProgress,
  SkillsBarHeadline,
  SkillsBarReact,
  SkillsBarJS,
  SkillsBarHTML,
  SkillsBarCSS,
  SkillsBarJava,
  SkillsBarFlutter,
  SkillsBarPercent,
} from './SkillsElements';

$(document).ready(function () {
  //create observer
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {
      //If the element is available
      if (entry.isIntersecting) {
        //add the skillsBar-animation class
        entry.target.classList.add('JS');
        return;
      }
      // entry.target.classList.remove("HTML");
    });
  });

  //Tell the observer which elements to track
  observer.observe(document.querySelector('.skillsBarJS'));
});

$(document).ready(function () {
  //create observer
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {
      //If the element is available
      if (entry.isIntersecting) {
        //add the skillsBar-animation class
        entry.target.classList.add('HTML');
        return;
      }
      // entry.target.classList.remove("CSS");
    });
  });

  //Tell the observer which elements to track
  observer.observe(document.querySelector('.skillsBarHTML'));
});

$(document).ready(function () {
  //create observer
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {
      //If the element is available
      if (entry.isIntersecting) {
        //add the skillsBar-animation class
        entry.target.classList.add('CSS');
        return;
      }
      // entry.target.classList.remove("React");
    });
  });

  //Tell the observer which elements to track
  observer.observe(document.querySelector('.skillsBarCSS'));
});

$(document).ready(function () {
  //create observer
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {
      //If the element is available
      if (entry.isIntersecting) {
        //add the skillsBar-animation class
        entry.target.classList.add('React');
        return;
      }
      // entry.target.classList.remove("JS");
    });
  });

  //Tell the observer which elements to track
  observer.observe(document.querySelector('.skillsBarReact'));
});

$(document).ready(function () {
  //create observer
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {
      //If the element is available
      if (entry.isIntersecting) {
        //add the skillsBar-animation class
        entry.target.classList.add('Java');
        return;
      }
      // entry.target.classList.remove("Java");
    });
  });

  //Tell the observer which elements to track
  observer.observe(document.querySelector('.skillsBarJava'));
});

$(document).ready(function () {
  //create observer
  const observer = new IntersectionObserver((entries) => {
    //loop over the entries
    entries.forEach((entry) => {
      //If the element is available
      if (entry.isIntersecting) {
        //add the skillsBar-animation class
        entry.target.classList.add('Flutter');
        return;
      }
      // entry.target.classList.remove("Flutter");
    });
  });

  //Tell the observer which elements to track
  observer.observe(document.querySelector('.skillsBarFlutter'));
});

const Skills = ({ light, className }) => {
  useEffect(() => {
    Aos.init({
      debounceDelay: 50,
      once: false,
      mirror: true,
    });
  }, []);

  return (
    <SkillsContainer>
      <SkillsWrapper>
        <SkillsH1 data-aos='fade-left'> Specs. </SkillsH1>
        <Divider data-aos='fade-right' light='true' />
        <SkillsRow>
          {/* Column 1 */}
          <SkillsImg data-aos='fade-right' data-aos-offset='80'>
            <SkillsPic />
          </SkillsImg>

          {/* Column 2 */}
          <DividerWrapper>
            <SkillsVertBar data-aos='fade-down' />
          </DividerWrapper>

          {/* Column 3 */}
          <SkillsBarsWrapper id='asd' data-aos='fade-left'>
            <SkillsBar>
              <SkillsBarHeadline>Java</SkillsBarHeadline>
              <SkillsBarProgress>
                <SkillsBarHTML className='skillsBarJS'></SkillsBarHTML>
              </SkillsBarProgress>
              <SkillsBarPercent>85%</SkillsBarPercent>
            </SkillsBar>
            <SkillsBar>
              <SkillsBarHeadline>Spring</SkillsBarHeadline>
              <SkillsBarProgress>
                <SkillsBarCSS className='skillsBarHTML'></SkillsBarCSS>
              </SkillsBarProgress>
              <SkillsBarPercent>80%</SkillsBarPercent>
            </SkillsBar>
            <SkillsBar>
              <SkillsBarHeadline>React</SkillsBarHeadline>
              <SkillsBarProgress>
                <SkillsBarReact className='skillsBarCSS'></SkillsBarReact>
              </SkillsBarProgress>
              <SkillsBarPercent>85%</SkillsBarPercent>
            </SkillsBar>
            <SkillsBar>
              <SkillsBarHeadline>JS/TS</SkillsBarHeadline>
              <SkillsBarProgress>
                <SkillsBarJS className='skillsBarReact'></SkillsBarJS>
              </SkillsBarProgress>
              <SkillsBarPercent>90%</SkillsBarPercent>
            </SkillsBar>
            <SkillsBar>
              <SkillsBarHeadline> C/C++ </SkillsBarHeadline>
              <SkillsBarProgress>
                <SkillsBarJava className='skillsBarJava'></SkillsBarJava>
              </SkillsBarProgress>
              <SkillsBarPercent>75%</SkillsBarPercent>
            </SkillsBar>
            <SkillsBar>
              <SkillsBarHeadline>Solidity</SkillsBarHeadline>
              <SkillsBarProgress>
                <SkillsBarFlutter className='skillsBarFlutter'></SkillsBarFlutter>
              </SkillsBarProgress>
              <SkillsBarPercent>60%</SkillsBarPercent>
            </SkillsBar>
          </SkillsBarsWrapper>
        </SkillsRow>
      </SkillsWrapper>
    </SkillsContainer>
  );
};

export default Skills;
