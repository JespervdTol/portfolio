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
        <StyledButton text="Back" className="position-absolute top-0 start-0 px-5 m-5" onClick={() => setCurrentPage("Home")} />
        {currentPage === "Skills" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <p className="mb-4">Lorem ipsum dolor sit amet. In tempore tempore qui quis nesciunt sit dolor nihil ut ipsum repellat. Ut expedita consequatur ut fugiat numquam sit omnis consequatur id mollitia quia qui aspernatur autem!
              Et voluptates nesciunt a sunt enim non quae expedita ut amet provident est rerum distinctio. A delectus dignissimos eos porro dignissimos est reiciendis dolores.
              Sit voluptas repellat vel totam consequatur eos perferendis distinctio. Ad adipisci tenetur et voluptatem temporibus et doloribus deserunt qui commodi voluptatem. Aut accusantium officiis aut odit dolores a reprehenderit commodi.
            </p>
          </div>
        )}
        {currentPage === "Ambitions" && (
          <div className='d-flex flex-column justify-content-center h-100'>
            <p className="mb-4">Lorem ipsum dolor sit amet. In tempore tempore qui quis nesciunt sit dolor nihil ut ipsum repellat. Ut expedita consequatur ut fugiat numquam sit omnis consequatur id mollitia quia qui aspernatur autem!
              Et voluptates nesciunt a sunt enim non quae expedita ut amet provident est rerum distinctio. A delectus dignissimos eos porro dignissimos est reiciendis dolores.
              Sit voluptas repellat vel totam consequatur eos perferendis distinctio. Ad adipisci tenetur et voluptatem temporibus et doloribus deserunt qui commodi voluptatem. Aut accusantium officiis aut odit dolores a reprehenderit commodi.
            </p>
          </div>
        )}
        {/* Project */}
        {currentPage !== "Ambitions" && currentPage !== "Skills" && (
          <div className='d-flex flex-column justify-content-center'>
              <span className='d-flex flex-column align-items-center'>
              <ProjectImage project={project}/>
              </span>
              <h2 className='mt-4'>{project.title}</h2>
              <p>{project.pageDescription}</p>
              <p className='fst-italic'>{project.labels}</p>
            <div className="d-flex justify-content-end gap-3">
              {'link1' in project ? <StyledButton text={project.link1.name} className="px-5" onClick={() => window.open(project.link1.link, '_blank')} /> : ""}
              {'link2' in project ? <StyledButton text={project.link2.name} className="px-5" onClick={() => window.open(project.link2.link, '_blank')} /> : ""}
            </div>
          </div>
        )}
      </div>
    </>
  )
}

export default NewPage
