import React from 'react';

function Footer() {
  return (
    <footer className="bg-primary text-white py-4">
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <p className="text-center m-0">&copy; {new Date().getFullYear()} All Rights Reserved</p>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
