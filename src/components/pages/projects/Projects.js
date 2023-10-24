import React from 'react';
import { Container } from 'reactstrap';
import Carousel from 'react-bootstrap/Carousel';
import styles from './Projects.module.scss';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';

import image1 from '../../../images/conertApp.png';
import image2 from '../../../images/coffeApp.png';
import image3 from '../../../images/gameBliss.png';
import image4 from '../../../images/Pizzeria.png'
import image5 from '../../../images/secuuedAp.png'
import image6 from '../../../images/BlogApp.png'
import image7 from '../../../images/shirtApp.png'

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalImage, setModalImage] = useState(null);
  const [zoom, setZoom] = useState(1);

  const handleClose = () => {
    setShowModal(false);
    setZoom(1);
  };

  const handleShow = (image) => {
    setModalImage(image);
    setShowModal(true);
  };

  const toggleZoom = () => {
    setZoom((prevZoom) => (prevZoom === 1 ? 2 : 1));
  };

  return (
    <div id="projects" className={styles.projectsContainer}>
      <Container>
        <div className={styles.carouselCointainer}>
        <Carousel interval={null}>
          <Carousel.Item className={styles.carouselItem}>
            <div className={styles.imageContainer}>
              <img src={image1} className={styles.carouselImage} alt='project'/>
              <div className={styles.clickableArea} onClick={() => handleShow(image1)}></div>
              <div className={styles.carouselCaption}>
                <div className={styles.intro}>
                  <h3>
                    <b>Concert App</b>
                  </h3>
                  <h6 className={`${styles.commonTag} ${styles.React}`}>React</h6>
                  <h6 className={`${styles.commonTag} ${styles.mongoDb}`}>mongoDB</h6>
                  <h6 className={`${styles.commonTag} ${styles.prisma}`}>WebSocket</h6>
                </div>
                <p>A website for music festivals, allowing you to book a ticket in real-time. It also provides a view of seats that are already taken.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
          <div className={styles.imageContainer}>
              <img src={image2} className={styles.carouselImage} alt='project'/>
              <div className={styles.clickableArea} onClick={() => handleShow(image2)}></div>
              <div className={styles.carouselCaption}>
                <div className={styles.intro}>
                  <h3>
                    <b>CoffeShop</b>
                  </h3>
                  <h6 className={`${styles.commonTag} ${styles.Css}`}>CSS</h6>
                  <h6 className={`${styles.commonTag} ${styles.js}`}>JavaScript</h6>
                  <h6 className={`${styles.commonTag} ${styles.MySQL}`}>Handlebars</h6>
                  <h6 className={`${styles.commonTag} ${styles.bs}`}>Bootstrap</h6>
                </div>
                <p>Example cafe project, ready for modification for a commercial store.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
          <div className={styles.imageContainer}>
              <img src={image3} className={styles.carouselImage} alt='project'/>
              <div className={styles.clickableArea} onClick={() => handleShow(image3)}></div>
              <div className={styles.carouselCaption}>
                <div className={styles.intro}>
                  <h3>
                    <b>GameBlissProject</b>
                  </h3>
                  <h6 className={`${styles.commonTag} ${styles.nestJs}`}>nestJS</h6>
                  <h6 className={`${styles.commonTag} ${styles.React}`}>React</h6>
                  <h6 className={`${styles.commonTag} ${styles.MySQL}`}>MySQL</h6>
                  <h6 className={`${styles.commonTag} ${styles.prisma}`}>Prisma</h6>
                </div>
                <p>Website with computer games. This is my first bigger project that fetches all information from a database. Every user can also create an account, log in, and order a given product. More information on GitHub.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
          <div className={styles.imageContainer}>
              <img src={image4} className={styles.carouselImage} alt='project'/>
              <div className={styles.clickableArea} onClick={() => handleShow(image4)}></div>
              <div className={styles.carouselCaption}>
                <div className={styles.intro}>
                  <h3>
                    <b>ProjectPizzeria</b>
                  </h3>
                  <h6 className={`${styles.commonTag} ${styles.js}`}>JavaScript</h6>
                  <h6 className={`${styles.commonTag} ${styles.Css}`}>CSS</h6>
                  <h6 className={`${styles.commonTag} ${styles.html}`}>HTML</h6>
                </div>
                <p>A pizzeria website where we have a functional shopping cart, a page for orders, and table reservations.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
          <div className={styles.imageContainer}>
              <img src={image5} className={styles.carouselImage} alt='project'/>
              <div className={styles.clickableArea} onClick={() => handleShow(image5)}></div>
              <div className={styles.carouselCaption}>
                <div className={styles.intro}>
                  <h3>
                    <b>SecuredApp</b>
                  </h3>
                  <h6 className={`${styles.commonTag} ${styles.React}`}>React</h6>
                  <h6 className={`${styles.commonTag} ${styles.Redux}`}>Redux</h6>
                  <h6 className={`${styles.commonTag} ${styles.express}`}>Express</h6>
                </div>
                <p>Website of a photography contest. The main functionality of this application is displaying works on the main page and a form for submitting entries on the 'Submit a photo' subpage.</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
          <div className={styles.imageContainer}>
              <img src={image6} className={styles.carouselImage} alt='project'/>
              <div className={styles.clickableArea} onClick={() => handleShow(image6)}></div>
              <div className={styles.carouselCaption}>
                <div className={styles.intro}>
                  <h3>
                    <b>BlogApp</b>
                  </h3>
                  <h6 className={`${styles.commonTag} ${styles.React}`}>React</h6>
                  <h6 className={`${styles.commonTag} ${styles.Redux}`}>Redux</h6>
                </div>
                <p>Simple CRUD site, that allows user to create, read, update and delete posts</p>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item className={styles.carouselItem}>
          <div className={styles.imageContainer}>
              <img src={image7} className={styles.carouselImage} alt='project'/>
              <div className={styles.clickableArea} onClick={() => handleShow(image7)}></div>
              <div className={styles.carouselCaption}>
                <div className={styles.intro}>
                  <h3>
                    <b>BlogApp</b>
                  </h3>
                  <h6 className={`${styles.commonTag} ${styles.React}`}>React</h6>
                  <h6 className={`${styles.commonTag} ${styles.Redux}`}>Redux</h6>
                </div>
                <p>A simple website with t-shirts that allows users to change the colors of the shirts, as well as their size; additionally, the price changes in real-time.</p>
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
                transition: 'transform 0.25s ease',
              }}
            />
          </Modal.Body>
        </Modal>
        </div>
      </Container>
    </div>
  );
};

export default Projects;
