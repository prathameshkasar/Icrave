import React from 'react';

function About() {
  return (
    <section className="section-space-md" id="about">
      <div className="container">
        <div className="section-title">
          <h3 className="text-center text-primary">About Us</h3>
        </div>
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-md-6 col-12">
            <div className="bg-primary rounded p-1">
              <img src="/assets/asset-1.jpg" className="w-100 rounded" alt="About Us" />
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="content-wrap px-3" style={{ height: '100%' }}>
              <div>
                <h3 className="m-0">ICrave Creations is</h3>
                <p className="mt-2">
                At Elegant Spaces, we are passionate about transforming interiors into breathtaking, functional environments. 
                As a leading interior design startup, we blend innovative design with meticulous attention to detail, tailoring 
                each project to our clients' unique visions. From residential makeovers to commercial transformations, our 
                expert team is dedicated to creating spaces that inspire and delight. Discover the difference with Elegant 
                Spaces where creativity meets excellence.
                </p>
                <button className="btn btn-primary">Get Started</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
