import React from 'react';
import './Navbar.css';
import { Carousel } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';

// import image1 from './images/1.jpg';
// import image2 from './images/2.jpg';
// import image3 from './images/3.jpg';

import { useState, useEffect } from 'react';
import Axios from 'axios';
import ReadMoreAbout from './ReadMoreAbout';
import PopularBlogs from './PopularBlogs';

const Home = () => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/blog/')
      .then(response => response.json())
      .then(res => setState(res.data))
      .catch(err => setHasError(true));
  }, []);
  return (
    <>
      <div className="container-fluid nav_bg">
        <div className="row">
          <div className="col-10 mx-auto">
            <Carousel indicators={false}>
              {state.slice(0, 3).map((val, id) => {
                return (
                  <Carousel.Item interval={2000}>
                    <img
                      className="d-block w-100"
                      src={val.image}
                      alt={val.image}
                    />
                    <Carousel.Caption>
                      <h3>{val.title}</h3>
                      {/* <p>{val.disc}</p> */}
                    </Carousel.Caption>
                  </Carousel.Item>
                );
              })}
            </Carousel>

            <ReadMoreAbout />
            <PopularBlogs />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
