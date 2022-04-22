import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const form = useRef();
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        'service_r87tw6l',
        'template_2dazgtc',
        form.current,
        'JHoHqmNu_jQxPdyed'
      )
      .then(
        result => {
          console.log(result.text);
        },
        error => {
          console.log(error.text);
        }
      );
    alert('message send');
    e.target.reset();
  }
  return (
    <>
      <div className="my-2">
        <h1 className="text-center">Contact Us</h1>
      </div>
      <div className="container contact_div my-2">
        <div className="row">
          <div className="col-md-6 col-10 mx-auto">
            <form ref={form} onSubmit={sendEmail}>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Enter your Name"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  name="subject"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="Subject"
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  name="email"
                  class="form-control"
                  id="exampleFormControlInput1"
                  placeholder="name@example.com"
                  required
                />
              </div>

              <div class="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Message
                </label>
                <textarea
                  name="message"
                  class="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  required
                ></textarea>
              </div>
              <button type="submit" class="btn btn-outline-primary">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};
export default Contact;
