import React from 'react';
// import girl from '../assets/girl.png';

function Home() {
  return (
    <section id="home">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="banner-left-content">
              <div>
                <h2 className="m-0">Welcome to, </h2>
                <h2 className="text-primary m-0">ICrave Creations</h2>
                <p className="text-justify mt-4">
                Welcome to Elegant Spaces, your premier interior design startup. We specialize in creating bespoke, 
                stylish, and functional spaces tailored to your unique taste and lifestyle. Our expert team blends 
                creativity with meticulous attention to detail, transforming your vision into reality. Whether it's
                a modern home makeover, a cozy office revamp, or a chic commercial space, we bring elegance and innovation
                to every project. Discover the art of living beautifully with Elegant Spaces. Let's design your dream space together.
                </p>
                <button className="btn btn-primary btn-lg rounded-lg">Get Started</button>
              </div>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div>
            <img src="/assets/girl.png" className="h-100 w-100" height="400" alt="Girl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Home;
