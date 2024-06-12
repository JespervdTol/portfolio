import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPaperPlane } from '@fortawesome/free-regular-svg-icons'
import { faUser, faPersonHiking, faMedal } from '@fortawesome/free-solid-svg-icons'

const AboutElement = ({ icon, title, description, onClick }) => {
  return (
    <div className="col-md-4 aboutElement d-flex flex-column gap-4 justify-content-center" onClick={onClick}>
      <FontAwesomeIcon icon={icon} fontSize={100} />
      <div>
        <h3 className='mainColor'>{title}</h3>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default AboutElement;