import React from 'react';
import image1 from './images/view1.jpg';
import { useState, useEffect } from 'react';
import Axios from 'axios';

const About = () => {
  const [state, setState] = useState([]);
  const [hasError, setHasError] = useState(false);
  useEffect(() => {
    fetch('http://127.0.0.1:8000/api/about/')
      .then(response => response.json())
      .then(res => setState(res.data))
      .catch(err => setHasError(true));
  }, []);
  return (
    <>
      <div className="image-aboutus-banner">
        <div className="container">
          <div className="row">
            <div className="col-md-12">
              <h1 className="lg-text">About us</h1>
              {state.map((val, id) => {
                return <p className="image-aboutus-para">{val.short_disc}</p>;
              })}
            </div>
          </div>
        </div>
      </div>
      {/* <div className="aboutus-secktion paddingTb60">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h1>Who we are and what we do</h1>
              <p className="lead">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Explicabo dolorem eius nostrum magni. Obcaecati quae doloremque
                beatae! Facilis eos dignissimos, quos quae labore nemo
                quibusdam, delectus inventore dolore, porro ipsum.
              </p>
            </div>
          </div>
        </div>
      </div> */}
      <div className="container my-5 ">
        {state.map((value, id) => {
          return (
            <div className="row" id="mytextarea">
              <div className="col-md-8">
                <h1 className="text-info fs-5">
                  WHO WE ARE
                  <br /> WHAT WE DO
                </h1>
                <p className="my-2 text-muted lead">{value.long_disc}</p>
              </div>
              <div className="col-md-4 about_image">
                <img
                  src={value.image}
                  alt={value.image}
                  className="img-fluid rounded"
                />
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default About;
