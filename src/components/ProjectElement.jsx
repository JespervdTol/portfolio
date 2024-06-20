import React from 'react';
import LazyLoad from 'react-lazyload';

const ProjectElement = ({ project, setCurrentPage }) => {

  const { image, alt, title } = project;

  const handleClick = () => {
    setCurrentPage();
  };

  return (
    <div className="projectElement" onClick={handleClick}>
      <div className="background projectHeader d-flex flex-column p-3 pb-0">
        <div className="d-flex justify-content-between align-items-center">
          <h5 className='secondaryColor fw-bold d-flex mb-3'>{title}</h5>
        </div>
      </div>
      <LazyLoad height={250} offset={100}>
        <img className='w-100' src={image} alt={alt} />
      </LazyLoad>
    </div>
  );
};

export default ProjectElement;
