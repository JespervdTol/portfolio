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
          </div>
        )}
        {currentPage === "Ambitions" && (
          <div className='d-flex flex-column justify-content-center h-100'>
          </div>
        )}
        {currentPage === "Skills" && (
          <div className='d-flex flex-column justify-content-center h-100'>
          </div>
        )}
        {/* Project */}
        {currentPage !== "Myself" && currentPage !== "Experience" && currentPage !== "Skills" && (
          <div className='d-flex flex-column justify-content-center'>
          </div>
        )}
      </div>
    </>
  )
}

export default NewPage
