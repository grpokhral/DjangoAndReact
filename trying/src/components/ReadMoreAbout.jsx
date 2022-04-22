import React from 'react';
import { NavLink } from 'react-router-dom';

const ReadMoreAbout = () => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="row">
          <div className="col-md-10 pt-2 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
            <h1>About Us</h1>
            <p className="my-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis
              ullam odio excepturi maxime fugiat!.
            </p>
            <div className="my-1">
              <NavLink to="/about" className="btn-get-started">
                Read-More
              </NavLink>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReadMoreAbout;
