import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';
import StyledButton from './components/StyledButton';
import ProjectElement from './components/ProjectElement';
import ProjectImage from './components/ProjectImage';
import AboutElement from './components/AboutElement';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faUser, faPersonHiking, faMedal } from '@fortawesome/free-solid-svg-icons'
import { faGithubSquare, faInstagramSquare, faLinkedin, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'
import data from './data.json';

function NewPage({ setCurrentPage, currentPage }) {

  const project = data.projects[currentPage];

  return (
    <>
      <div id='newPage' className="d-flex flex-column align-items-center justify-content-center gap-3 w-50 mx-auto px-5">
        <hr className="line lineLeft position-absolute"></hr>
        <hr className="line lineRight position-absolute"></hr>
        <StyledButton text="Go back" className="position-absolute top-0 start-0 px-5 m-5" onClick={() => setCurrentPage("Home")} />
        {currentPage === "Myself" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
              <img src="images/Myself.png" alt="" className='w-100' height={350} width={700} />
              <h2 className='text-center mt-3'>Myself</h2>
              <p>
                I am 19 years old and live in Zeeland. I'm currently studying to become a Software Developer because I love coding. My goal is to become a skilled Software Developer and create anything I need.
                <br></br><br></br>
                My main hobbies are gaming, watching films, partying with friends, and going to the gym. Gaming helps me think strategically, while watching films allows me to unwind and appreciate storytelling. I enjoy socializing and creating memories with friends at parties, and I find that going to the gym keeps me energized and focused.
                <br></br><br></br>
                I believe in balancing work and play to maintain a well-rounded life. I find joy in collaborating with others and am always eager to learn new things and take on challenges. My passion for technology drives me to constantly improve my skills, and my dedication to my studies and hobbies helps me stay motivated and inspired. Ultimately, I aim to combine my technical expertise with my creative interests to make a positive impact in the software development field.</p>
            </div>
            <div className="d-flex gap-5">
              <StyledButton text="My CV" className="px-5 ms-auto" onClick={() => window.open('/CV.pdf', '_blank')} />
            </div>
          </div>
        )}
        {currentPage === "Experience" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
              <img src="images/Experience.png" className='w-100' alt="" height={350} width={700} />
              <h2 className='text-center mt-3'>Experience</h2>
              <h5 className='mainColor'>Internship Unitron</h5>
              <p>During my third-year internship at Unitron in IJzendijke, I had a rewarding experience as a software developer. Working on enhancing the RMA software allowed me to dive deep into the Django framework, gaining valuable insights and skills along the way. The hands-on experience and guidance from the team helped me grow professionally and reinforced my passion for software development.</p>
              <h5 className='mainColor'>Education</h5>
              <p>I'm currently enrolled in a software development program at Scalda in Vlissingen. It's a level 4 course, and I'm now in my third year. This journey has been quite exciting and enriching for me. I've been delving deep into various aspects of software development, learning about coding languages, algorithms, and software design.

                Being part of this program has allowed me to explore my passion for technology and develop practical skills that are essential in today's digital world. From writing code to troubleshooting and debugging, every aspect of software development has fascinated me.</p>
            </div>
            <div className="d-flex justify-content-end gap-3">
              <StyledButton text="Unitron" className="px-5" onClick={() => window.open("https://www.unitron.nl/wie-we-zijn/", '_blank')} />
              <StyledButton text="School" className="px-5" onClick={() => window.open("https://scalda.nl/", '_blank')} />
            </div>
          </div>
        )}
        {currentPage === "Skills" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
              <img src="images/Skills.png" className='w-100' alt="" height={350} width={700} />
              <h2 className='text-center mt-3'>Skills</h2>
              <h5 className='mainColor'>Back-End</h5>
              <p>In the back-end realm, I've gained proficiency in Java, SQL, Python, and various frameworks like Hibernate, Struts, and Django. These skills enable me to develop robust and efficient server-side applications, handle data management effectively, and create dynamic web solutions.</p>
              <h5 className='mainColor'>Front-End</h5>
              <p>On the front-end side, I'm well-versed in Bootstrap, HTML/CSS, and JavaScript. This expertise allows me to craft visually appealing and user-friendly interfaces, ensuring an engaging experience for website visitors and application users alike.</p>
              <h5 className='mainColor'>Other</h5>
              <p>Outside of the software development world, I also prioritize my physical well-being by regularly hitting the gym. Engaging in physical exercise not only helps me stay fit but also boosts my energy levels and enhances my overall productivity.</p>
            </div>
          </div>
        )}
        {/* Project */}
        {currentPage !== "Myself" && currentPage !== "Experience" && currentPage !== "Skills" && (
          <div className='d-flex flex-column justify-content-center'>
            <div className="scrollingFrame h-75 mb-2 bg-black">
              <span className='d-flex flex-column align-items-center'>
              <ProjectImage project={project}/>
              </span>
              <h2 className='mt-4'>{project.title}</h2>
              <p>{project.pageDescription}</p>
              <p className='fst-italic'>{project.labels}</p>
            </div>
            <div className="d-flex justify-content-end gap-3">
              {project.link1.link ? <StyledButton text={project.link1.name} className="px-5" onClick={() => window.open(project.link1.link, '_blank')} /> : ""}
              {project.link2.link ? <StyledButton text={project.link2.name} className="px-5" onClick={() => window.open(project.link2.link, '_blank')} /> : ""}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default NewPage
