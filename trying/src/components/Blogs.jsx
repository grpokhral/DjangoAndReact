import React from 'react';
import Comment from './Comment';
import { useState, useEffect } from 'react';
import Pop from './Pop';
import Lat from './Lat';

// import { useState, useEffect } from 'react';
// import axios from 'axios';

const Blogs = props => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div className="blog-single gray-bg">
        <div className="container">
          <div className="row align-items-start">
            <div className="col-lg-8 m-15px-tb">
              <article className="article">
                <div className="article-img">
                  <img src={props.state.image} title="" alt="" />
                </div>
                <div className="article-title">
                  <h6>
                    <a href="#">{props.state.title}</a>
                  </h6>
                  <h2>They Now Bade Farewell To The Kind But Unseen People</h2>
                  <div className="media">
                    {/* <div className="avatar">
                      <img
                        src="https://bootdey.com/img/Content/avatar/avatar1.png"
                        title=""
                        alt=""
                      />
                    </div> */}
                    <div className="media-body">
                      {/* <label>Rachel Roth</label> */}
                      <span>26 FEB 2020</span>
                    </div>
                  </div>
                </div>
                <div className="article-content">
                  <p>{props.state.short_disc}</p>

                  <h4>What are my payment options?</h4>

                  <p>{props.state.disc}</p>

                  <blockquote>
                    <p className="blockquote-footer">
                      Someone famous in{' '}
                      <cite title="Source Title">GRP Pokhrel</cite>
                    </p>
                  </blockquote>
                </div>
                {/* <div className="nav tag-cloud">
                  <a href="#">Design</a>
                  <a href="#">Development</a>
                  <a href="#">Travel</a>
                  <a href="#">Web Design</a>
                  <a href="#">Marketing</a>
                  <a href="#">Research</a>
                  <a href="#">Managment</a>
                </div> */}
              </article>
              {/* <div className="contact-form article-comment">
                <h4>Leave a Reply</h4>
                <Comment />
              </div> */}
            </div>
            <div className="col-lg-4 m-15px-tb blog-aside">
              <Lat />
              <Pop />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blogs;
