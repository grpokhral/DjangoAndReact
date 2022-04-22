import React from 'react';
import { useState, useEffect } from 'react';

const Pop = () => {
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
          <h3>Popular Post</h3>
        </div>
        <div className="widget-body">
          {state.slice(1, 4).map((val, id) => {
            return (
              <div className="latest-post-aside media">
                <div className="lpa-left media-body">
                  <div className="lpa-title">
                    <h5>
                      <a href="#">{val.title}</a>
                    </h5>
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
                  <a href="#">
                    <img src={val.image} title="" alt="" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Pop;
