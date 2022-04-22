import React from 'react';
import { NavLink, Link } from 'react-router-dom';

const Card = (props, key) => {
  return (
    <>
      <div className="col-12 col-md-6 col-lg-4">
        <div className="row gy-4 gx-2">
          <div className="card">
            <img className="card-img-top" src={props.image} alt={props.image} />
            <div className="card-body">
              <h5 className="card-title font-weight-bold">{props.title}</h5>
              <p className="card-text">{props.disc}</p>
              <NavLink to={`/blogs/${key}`} className="btn btn-primary">
                Read More
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
