import React from 'react';
import Slideshow from './Slideshow';

const ProjectImage = ({ project }) => {
  const images = [
    project.image2,
    project.image3,
    project.image4,
    project.image5
  ].filter(image => image !== null && image !== undefined);

  return (
    <Slideshow images={images} />
  );
};

export default ProjectImage;
