import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import Axios from 'axios';

const PopularBlogs = () => {
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
      <section>
        <div className="popular my-2">
          <h2> Popular Blogs</h2>
        </div>

        <div className="row gy-4">
          {state.slice(0, 4).map((val, id) => {
            return (
              <div className="col-12 col-md-6 col-lg-3">
                <div className="row gy-4 gx-2">
                  <div className="card">
                    <img
                      className="card-img-top max-width: 100%;"
                      height="180"
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
      </section>
    </>
  );
};

export default PopularBlogs;
