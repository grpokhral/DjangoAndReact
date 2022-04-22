import React from 'react';
import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';

const Lat = () => {
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
      <div className="widget widget-latest-post">
        <div className="widget-title">
          <h3>Latest Post</h3>
        </div>
        <div className="widget-body">
          {state.slice(4).map((val, id) => {
            return (
              <div className="latest-post-aside media">
                <div className="lpa-left media-body">
                  <div className="lpa-title">
                    <h5>{val.title}</h5>
                  </div>
                  <div className="lpa-meta">
                    <a className="name" href="#">
                      Rachel Roth
                    </a>
                    <a className="date" href="#">
                      26 FEB 2020
                    </a>
                  </div>
                </div>
                <div className="lpa-right">
                  <NavLink to={`/blog/${val.id}`}>
                    <img src={val.image} title="" alt="" />
                  </NavLink>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Lat;
