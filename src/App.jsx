import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import StyledButton from './components/StyledButton';
import ProjectElement from './components/ProjectElement';
import AboutElement from './components/AboutElement';
import Slideshow from './components/Slideshow';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPaperPlane } from '@fortawesome/free-solid-svg-icons';
import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';
import data from './data.json';

const App = ({ currentPage, setCurrentPage }) => {
  const user = data.user;
  const settings = data.settings;
  const projects = data.projects;

  const homePage = useRef(null);
  const biographyPage = useRef(null);
  const experiencePage = useRef(null);
  const contactPage = useRef(null);

  const images = ['images/Basakportfolio3.png', 'images/Basakportfolio8.jpeg', 'images/Basakportfolio6.jpeg'];

  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.2,
    };

    const observer = new IntersectionObserver(handleIntersection, options);

    if (homePage.current) observer.observe(homePage.current);
    if (biographyPage.current) observer.observe(biographyPage.current);
    if (experiencePage.current) observer.observe(experiencePage.current);
    if (contactPage.current) observer.observe(contactPage.current);

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
          <img className='mainPicture' src="images/Basakportfolio9.jpeg" alt="main" />
        </div>
      </div>

      {/* Biography */}
      <br></br>
      <div ref={biographyPage} id='biographyPage'></div>
      <div className="page d-flex justify-content-center align-items-center margin-next-page">
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
              <div className="d-flex justify-content-center gap-5 mb-5">
                <StyledButton text="Skills" onClick={() => setCurrentPage("Skills")}  />
                <StyledButton text="Hobby's" onClick={() => setCurrentPage("Ambitions")}  />
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
          <p className="mb-4">Lorem ipsum dolor sit amet. In tempore tempore qui quis nesciunt sit dolor nihil ut ipsum repellat. Ut expedita consequatur ut fugiat numquam sit omnis consequatur id mollitia quia qui aspernatur autem!
              Et voluptates nesciunt a sunt enim non quae expedita ut amet provident est rerum distinctio.
          </p>
          <div className="row justify-content-center mt-5">
            {projects
              .slice(0, settings.maxProjects)
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
      <div ref={contactPage} id='contactPage'></div>
      <div className="page container margin-contact-page">
        <div className="row justify-content-center">
          <div className="col-md-8 mt-5">
            <div className="card shadow-lg border-0 rounded-lg mt-5">
              <div className="contact-header card-header py-3">
                <h3 className="contact-text text-center fw-bold">Contact me</h3>
              </div>
              <div className="contact-body card-body">
                <form>
                  <div className="form-group mb-3">
                    <label htmlFor="nameInput">Name</label>
                    <input type="text" id="nameInput" className="form-control" placeholder="Your Name" required />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="emailInput">Email</label>
                    <input type="email" id="emailInput" className="form-control" placeholder="Your Email" required />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="subjectInput">Subject</label>
                    <input type="text" id="subjectInput" className="form-control" placeholder="Subject" required />
                  </div>
                  <div className="form-group mb-3">
                    <label htmlFor="messageInput">Message</label>
                    <textarea id="messageInput" className="form-control" rows="3" placeholder="Your Message" required></textarea>
                  </div>
                  <StyledButton className="float-end mt-4" text='Send' onClick={() => {
                    const nameInput = document.getElementById('nameInput');
                    const emailInput = document.getElementById('emailInput');
                    const subjectInput = document.getElementById('subjectInput');
                    const messageInput = document.getElementById('messageInput');

                    const name = encodeURIComponent(nameInput.value);
                    const email = encodeURIComponent(emailInput.value);
                    const subject = encodeURIComponent(subjectInput.value);
                    const message = encodeURIComponent(messageInput.value);

                    const mailtoLink = `https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=${user.email}&su=${subject}&body=From ${name} (${email}),%0A%0A${message}`;

                    window.open(mailtoLink, '_blank');
                  }} />
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="row justify-content-center mt-5">
          <div className="col-md-4 text-center">
            <h5>Find me on socials!</h5>
            <div id='socials' className="d-flex justify-content-around mt-4">
              <FontAwesomeIcon
                icon={faLinkedin}
                fontSize={50}
                onClick={() => window.open(user.linkedIn, '_blank')}
                className="social-icon"
              />
              <FontAwesomeIcon
                icon={faInstagramSquare}
                fontSize={50}
                onClick={() => window.open(user.instagram, '_blank')}
                className="social-icon"
              />
              <FontAwesomeIcon
                icon={faTwitterSquare}
                fontSize={50}
                onClick={() => window.open(user.twitter, '_blank')}
                className="social-icon"
              />
            </div>
            <br></br>
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
