import React, { useState } from 'react';
import axios from 'axios';

const Comment = () => {
  // const url = 'http://127.0.0.1:8000/api/comment/create';
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  // const postData = () => {
  //   console.log(setName);
  //   console.log(setEmail);
  //   console.log(setMessage);
  // };

  const postData = () => {
    axios
      .post('http://127.0.0.1:8000/api/comment/create/', {
        name,
        email,
        message,
      })
      .then(res => {
        // console.log(res.data);
        alert('Your message has be posted');
      });
  };

  // function submit(e) {
  //   e.preventDefault();
  //   axios
  //     .post(url, {
  //       name,
  //       email,
  //       message,
  //     })
  //     .then(res => {
  //       console.log(res.data);
  //       alert('Your message has be posted');
  //     });
  //   data('');
  // }

  // function handle(e) {
  //   const newdata = { ...data };
  //   newdata[e.target.id] = e.target.value;
  //   setData(newdata);
  //   // console.log(newdata);
  // }
  return (
    <>
      <form>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                onChange={e => setName(e.target.value)}
                placeholder="Name *"
                className="form-control"
                type="text"
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                onChange={e => setEmail(e.target.value)}
                placeholder="Email *"
                className="form-control"
                type="email"
              />
            </div>
          </div>
          <div className="col-md-12">
            <div className="form-group">
              <textarea
                onChange={e => setMessage(e.target.value)}
                placeholder="Your message *"
                rows="4"
                className="form-control"
              ></textarea>
            </div>
          </div>
          <div className="col-md-12">
            <div className="send">
              <button onClick={postData} className="px-btn theme">
                <span>Submit</span> <i className="arrow"></i>
              </button>
            </div>
          </div>
          <p className="col-md-12 mt-3">Hello</p>
        </div>
      </form>
    </>
  );
};

export default Comment;
