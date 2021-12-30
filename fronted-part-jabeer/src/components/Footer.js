import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
         
          <div className="col">
            
          <ui className="list-unstyled">
              <li>About</li>
            <li>Suggestion</li>
              <li>Contact</li> 
              <li>Feedback</li>
            </ui>
             
          </div>
        </div>
       
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Jabeer Degala| All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
         
      </div>
    </div>
  );
}

export default Footer;