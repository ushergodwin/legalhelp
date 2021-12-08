import React, { Fragment } from "react";

const AboutUs = () => {
  return (
    <Fragment>
      <div className="container-fluid">
        <div id="about-top">
          {/* <p>
            Learn more about your legal issue Understand,<br/>
            <b>Evaluate Assess your Legal Needs</b>
          
          </p> */}
          <div id="about-image">
            <img src={"/imgs/about-slider.png"} alt="aboutimage" />
          </div>
        </div>
        <div className="about">
        <h2>About Us</h2>
        <hr />
        <p id="about-message">
          legalHelpOnline works to ensure everyone has access to justice. Our
          experts teams work across practice areas on nearly every area of law
          that impacts Ugandans. We represent clients in court trials, appellate
          courts and post conviction matters. We are dedicated to ensuring that
          every person has equal access to justice. We fight for justice in
          courts and outside courts through outreach, education campaigns and
          legal representation. We provide civil and criminal legal aid and
          advice to help people deal with their legal problems. We present
          children and youth in courts. We provide representation, legal
          assistance, and education to low wage and unemployed workers who have
          experienced violations of the employment laws. We are a team of
          passionate professionals and legal experts dedicated to the cause of
          access to justice.<br/> <b>Talk to us on +256 784414719/ +256 706142727 or
          share your view with us by email</b>
        </p>
        </div>
      </div>
    </Fragment>
  );
};

export default AboutUs;
