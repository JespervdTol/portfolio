import React from 'react';
import { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import StyledButton from './components/StyledButton';
import ProjectElement from './components/ProjectElement';
import AboutElement from './components/AboutElement';
import Slideshow from './components/Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane, faUser, faPersonHiking, faMedal, faHouse, faHammer, faEnvelope, faCircleUser } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import data from './data.json';

function App({ currentPage, setCurrentPage }) {
  const user = data.user;
  const settings = data.settings
  const projects = data.projects;

  const homePage = useRef(null);
  const biographyPage = useRef(null);
  const experiencePage = useRef(null);
  const contactPage = useRef(null);

  const images = [
    'images/Basak2.png',
    'images/Basak3.png',
    'images/Basak4.png'
  ];

  const [activeSection, setActiveSection] = useState(null);
  const [viewAll, setViewAll] = useState(false);
  const [viewOthers, setViewOthers] = useState(false);

  const hasOtherProjects = projects.some(project => project.type !== undefined);
  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    observer.observe(homePage.current);
    observer.observe(biographyPage.current);
    observer.observe(experiencePage.current);
    observer.observe(contactPage.current);

    return () => observer.disconnect();
  }, []);

  const handleIntersection = (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        setActiveSection(entry.target.id);
      }
    });
  };

  return (
    <>
      {/* Navigation */}
      <div id="navigation" className="d-flex align-items-center position-fixed gap-5 mt-5 start-50 translate-middle">
        <button className={activeSection === 'homePage' ? 'active' : ''} onClick={() => homePage.current.scrollIntoView({ behavior: 'smooth' })}>Home</button>
        <button className={activeSection === 'biographyPage' ? 'active' : ''} onClick={() => biographyPage.current.scrollIntoView({ behavior: 'smooth' })}>Biography</button>
        <button className={activeSection === 'experiencePage' ? 'active' : ''} onClick={() => experiencePage.current.scrollIntoView({ behavior: 'smooth' })}>Experience</button>
        <button className={activeSection === 'contactPage' ? 'active' : ''} onClick={() => contactPage.current.scrollIntoView({ behavior: 'smooth' })}>Contact</button>
      </div>

      {/* Home */}
      <div ref={homePage} id='homePage' className="page row">
        <div className="col-lg-6 d-flex flex-column justify-content-center gap-5">
          <h1 className='mainColor title'>Başak <span className='title'>Su Günal</span> {currentPage.pageName} </h1>
          <span>
            <p className='homeText1'>Student at Maastricht University Science Program</p>
            <p className='homeText2'>Science and Engineering faculty</p>
            <p className='homeText3'>Bachelor of Science</p>
          </span>
          <StyledButton text="Contact me" onClick={() => contactPage.current.scrollIntoView({ behavior: 'smooth' })} />
        </div>
        <div className="col-lg-6 d-flex justify-content-center align-items-center mt-5">
            <img className='mainPicture' src="images/Basak1.png" alt="main" />
        </div>
      </div>

      {/* Biography */}
      <br></br>
      <div ref={biographyPage} id='biographyPage'></div>
      <div className="page d-flex justify-content-center align-items-center">
        <div className="row">
          <div className="col-lg-6 d-flex flex-column justify-content-center align-items-center mt-5">
            <Slideshow images={images} />
          </div>
          <div className="col-lg-6 mt-5">
            <div className="d-flex flex-column">
              <h1 className='title mb-4'>Biography</h1>
              <p className="mb-4">My name is Başak Su Günal and I am 19 years old. I have lived in Turkiye my whole life however I moved to the Netherlands when I was 17 to start university. 
                My favorite city is Istanbul and my favorite part of the city is the cats. I want to focus on neurology and genetics therefore I decided to move abroad to follow my ambitions. I am currently studying in Maastricht University. At some point in my life I want to go all over the world however I also want to become a scientist and help the community.
              </p>
              <div className="d-flex justify-content-center gap-5">
                <StyledButton text="Skills" onClick={() => setCurrentPage("Skills")}  />
                <StyledButton text="Ambitions" onClick={() => setCurrentPage("Ambitions")}  />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience */}
      <br></br>
      <div ref={experiencePage} id='experiencePage'></div>
      <div className="page d-flex justify-content-center mt-5">
        <div className="container mt-5">
          <h1 className='text-center title mt-5 mb-5'>Experience</h1>
          <p className="mb-4">My name is Başak Su Günal and I am 19 years old. I have lived in Turkiye my whole life however I moved to the Netherlands when I was 17 to start university. 
                My favorite city is Istanbul and my favorite part of the city is the cats. I want to focus on neurology and genetics therefore I decided to move abroad to follow my ambitions. I am currently studying in Maastricht University. At some point in my life I want to go all over the world however I also want to become a scientist and help the community.
              </p>
          <div className="row justify-content-center mt-5 ">
            {projects
              .slice(0, viewAll ? projects.length : settings.maxProjects)
              .filter(project => viewOthers || project.type === undefined)
              .map((project, index) => (
                <div className="col-md-4 mb-4" key={index}>
                  <ProjectElement
                    project={project}
                    setCurrentPage={() => setCurrentPage(index)}
                  />
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Contact */}
      <br></br>
      <div ref={contactPage} id='contactPage' className='margin'></div>
      <div className="page row justify-content-between">
        <div className="col-md-4 my-auto px-2 text-center">
          <FontAwesomeIcon icon={faPaperPlane} fontSize={200} className='mb-4' />
          <span className='text-start'>
            <h1>Get in touch</h1>
            <h5>I'd love to hear from you!</h5>
          </span>
          <hr />
          <div id='socials' className="d-flex justify-content-between px-5 mt-5">
            <FontAwesomeIcon icon={faLinkedin} fontSize={50} onClick={() => window.open(user.linkedIn, '_blank')} />
            <FontAwesomeIcon icon={faGithubSquare} fontSize={50} onClick={() => window.open(user.github, '_blank')} />
            <FontAwesomeIcon icon={faTwitterSquare} fontSize={50} onClick={() => window.open(user.twitter, '_blank')} />
            <FontAwesomeIcon icon={faInstagramSquare} fontSize={50} onClick={() => window.open(user.instagram, '_blank')} />
          </div>
        </div>
        <div className="col-md-6 my-auto">
          <label>Name</label>
          <input id='nameInput' className='mb-3' type="text" />
          <label>Subject</label>
          <input id='subjectInput' className='mb-3' type="text" />
          <label>Message</label>
          <textarea id='messageInput' type="text" rows={5} />
          <StyledButton className="float-end mt-4" text='Send' onClick={() => {
            const nameInput = document.getElementById('nameInput');
            const subjectInput = document.getElementById('subjectInput');
            const messageInput = document.getElementById('messageInput');

            const name = encodeURIComponent(nameInput.value);
            const subject = encodeURIComponent(subjectInput.value);
            const message = encodeURIComponent(messageInput.value);

            const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${user.email}&su=${subject}&body=From ${name},%0A%0A${message}`;

            window.open(mailtoLink, '_blank');
          }} />
        </div>
      </div>
    </>
  )
}

export default App
