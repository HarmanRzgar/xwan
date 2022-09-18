import React from "react";
import "./Component.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
       
          {/* Column1 
          <div className="col">
            <h2></h2>
            <ui className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </div>
           Column2 
          <div className="col">
            <h2>COLUMN</h2>
            <ui className="list-unstyled">
              <li></li>
              <li></li>
              <li></li>
            </ui>
          </div>*/}
  </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} XWAN | All rights reserved
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
