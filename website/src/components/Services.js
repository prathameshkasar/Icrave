import React from 'react';

function Services() {
  return (
    <section className="section-space-md bg-gray" id="services">
      <div className="container">
        <div className="section-title">
          <h3 className="text-center text-primary">Our Services</h3>
        </div>
        <div className="row" style={{ marginTop: '100px' }}>
          <div className="col-md-4 col-12">
            <div className="card bg-primary text-white">
              <div className="card-header border-white">
                <h3>Residential Interior Design</h3>
              </div>
              <div className="card-body">
                <p>
                Transform your home into a stylish and functional sanctuary. 
                Our personalized residential design service ensures every room 
                reflects your unique taste and enhances your lifestyle, blending comfort with elegance.
                </p>
              </div>
              <div className="card-footer border-white">
                <button className="btn btn-primary bg-white text-primary">View Details</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card bg-primary text-white">
              <div className="card-header border-white">
                <h3>Commercial Design</h3>
              </div>
              <div className="card-body">
                <p>
                Create inspiring and efficient workspaces with our commercial design service. 
                We design offices, retail stores, and hospitality venues that foster productivity
                and leave a lasting impression on clients and employees alike.
                </p>
              </div>
              <div className="card-footer border-white">
                <button className="btn btn-primary bg-white text-primary">View Details</button>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-12">
            <div className="card bg-primary text-white">
              <div className="card-header border-white">
                <h3>Renovation and Remodeling</h3>
              </div>
              <div className="card-body">
                <p>
                Breathe new life into outdated spaces with our renovation and remodeling service. 
                From concept to completion, we revamp interiors to meet modern standards of aesthetics 
                and functionality, ensuring a seamless transformation.
                </p>
              </div>
              <div className="card-footer border-white">
                <button className="btn btn-primary bg-white text-primary">View Details</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services;
