import React from 'react';
// import image1 from './images/1.jpg';

// import Date from './Date';

import { useState, useEffect } from 'react';
import Axios from 'axios';
// import Card from './Card';
import { NavLink, Link } from 'react-router-dom';

const Service = () => {
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
      <div className="my-2">
        <h2 className="text-center">Daily Blogs</h2>
      </div>
      {/* <div className="container">
        <h1>hello</h1>
        {state.map(blog => {
          return <h2>{blog.title}</h2>;
        })}
      </div> */}

      <div className="container-fluid mb-5">
        <div className="row">
          <div className="col-10 mx-auto">
            <div className="row gy-4">
              {state.map((val, id) => {
                return (
                  <div className="col-12 col-md-6 col-lg-4" key={id}>
                    <div className="row gy-4 gx-2">
                      <div className="card">
                        <img
                          className="card-img-top"
                          src={val.image}
                          alt={val.image}
                        />
                        <div className="card-body">
                          <h5 className="card-title font-weight-bold">
                            {val.title}
                          </h5>
                          <p className="card-text">{val.disc}</p>
                          <NavLink
                            to={`/blog/${val.id}`}
                            className="btn btn-primary"
                          >
                            Read More
                          </NavLink>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
