import React from 'react';
// import girlContact from '../assets/girl-contact.png';

function Contact() {
  return (
    <section className="section-space-md bg-primary text-white" id="contact">
      <div className="container">
        <div className="section-title">
          <h3 className="text-center">Contact Us</h3>
        </div>
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-md-6 col-12">
            <div>
              <h3 className="text-white">Get in touch,</h3>
              <p className="text-white">
              Get in touch with Elegant Spaces to start your interior design journey. Whether you need a consultation, 
              have questions about our services, or want to discuss your project, we're here to help. Contact us today 
              and let’s create the beautiful, functional space you've always dreamed of.
              </p>
              <img src="/assets/girl-contact.png" className="w-100" alt="Contact Us" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <form action="submit">
              <div className="form-group">
                <label htmlFor="fullname">Full Name</label>
                <input type="text" name="fullname" className="form-control" id="fullname" placeholder="Enter your full name" />
              </div>
              <div className="form-group">
                <label htmlFor="email">Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="Enter your email" />
              </div>
              <div className="form-group">
                <label htmlFor="number">Mobile Number</label>
                <input type="number" name="number" className="form-control" id="number" placeholder="Enter your Mobile Number" />
              </div>
              <div className="form-group">
                <label htmlFor="message">Add Some Query</label>
                <textarea name="message" className="form-control" id="message" rows="5" placeholder="Type your message"></textarea>
              </div>
              <div className="mt-3">
                <button type="submit" className="btn btn-light">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
