import React from 'react';
import Carousel from 'react-bootstrap/Carousel';

const ProjectImage = ({ project }) => {
  const images = [
    project.image,
    project.image2,
    project.image3,
    project.image4,
    project.image5
  ].filter(image => image !== null && image !== undefined);

  if (images.length === 1) {
    return <img src={images[0]} width={700} />;
  }

  return (
    <Carousel fade>
      {images.map((image, index) => (
        <Carousel.Item key={index}>
          <img src={image} width={700} />
        </Carousel.Item>
      ))}
    </Carousel>
  );
};

export default ProjectImage;
