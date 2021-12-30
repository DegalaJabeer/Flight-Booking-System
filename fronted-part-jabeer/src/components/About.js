import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import './search.css';
class About extends Component {

  render() {

    return (
      <div className="aboutstyle">
            <h1 className="center">
                Yatra Airlines!
                </h1>
          <p> Yatra Airlines is India’s leading online travel booking brand providing range of choice for flights
              for travelers. Our core value differentiator is the most trusted user experience, 
              be it in terms of quickest search and booking, fastest payments, settlement.
          </p>
          <h6><b>MailUsAt:</b> Yatra Airlines@gmail.com</h6>
          <h6><b>ContactUs:</b> +91 7330729029</h6>

        </div>
    );
  }
}

export default About;