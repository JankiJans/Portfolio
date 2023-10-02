import React from 'react';
import { Container } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Projects.module.scss';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import image1 from '../../../images/conertApp.png';
import image2 from '../../../images/coffeApp.png';
import image3 from '../../../images/gameBliss.png';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleClose = () => {
    setShowModal(false);
    setZoom(1);  // Reset zoom when closing modal
  };

  const handleShow = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  // Toggle zoom on image click
  const toggleZoom = () => {
    setZoom(prevZoom => (prevZoom === 1 ? 2 : 1));  // Toggle between 1x and 2x zoom
  };

  return (
    <div id="projects" className={styles.projectsContainer}>
      <Container>
        <Carousel>
          <Carousel.Item className={styles.carouselItem}>
            <div
              className={styles.imageContainer}
              onClick={() => handleShow(image1)}
            >
              <img src={image1} className={styles.carouselImage} />
              <div className={styles.carouselCaption}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
            <div
              className={styles.imageContainer}
              onClick={() => handleShow(image2)}
            >
              <img src={image2} className={styles.carouselImage} />
              <div className={styles.carouselCaption}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
            <div
              className={styles.imageContainer}
              onClick={() => handleShow(image3)}
            >
              <img src={image3} className={styles.carouselImage} />
              <div className={styles.carouselCaption}>
                <h3>First slide label</h3>
                <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <Modal show={showModal} onHide={handleClose} centered>
          <Modal.Body>
            <img
              src={modalImage}
              alt="Modal content"
              onClick={toggleZoom}
              style={{
                cursor: 'zoom-in',
                width: '100%',
                transform: `scale(${zoom})`,
                transition: 'transform 0.25s ease'
              }}
            />
          </Modal.Body>
        </Modal>

      </Container>
    </div>
  );
};

export default Projects;
