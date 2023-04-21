import React from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Container, Row, Col } from 'react-bootstrap';
import '../App.css';

const Home = () => {
  const headerVariant = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 120 },
    },
    exit: { opacity: 0 },
  };
  const sloganVariant = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, type: 'spring', stiffness: 120, delay: 0.2 },
    },
    exit: { opacity: 0 },
  };
  const buttonVariant = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { duration: 0.5, delay: 0.5 },
    },
    exit: { opacity: 0 },
  };

  return (
    <AnimatePresence>
      <motion.div key="home" initial="hidden" animate="visible" exit="hidden">
        <div className="position-relative d-flex justify-content-center align-items-center">
         
          <img src="/b.png" alt="background" className="bg-image" />
          <div className="overlay"></div>
          <Container className="mt-4 position-relative">
            <Row className="justify-content-center">
              <Col className="text-center">
                <motion.h1 variants={headerVariant} className="mb-4">
                  Welcome to the Volunteer Management System!
                </motion.h1>
                <motion.div variants={sloganVariant} className="mb-4">
                  <h2 className="slogan">Empowering volunteers to make a difference</h2>
                </motion.div>
                <motion.div variants={buttonVariant} className="text-center">
                  <Link to="/events" className="btn btn-primary custom-btn">
                    Get Involved
                  </Link>
                </motion.div>
              </Col>
            </Row>
          </Container>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default Home;

