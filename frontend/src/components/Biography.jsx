import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src={imageUrl} alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are? </h3>
          <p>
          We are committed to revolutionizing healthcare through technology, 
          ensuring that quality medical care is just a click away. 
          Our Hospital Management System is designed to simplify patient-doctor interactions, 
          enabling seamless online appointment booking through a secure and intuitive platform. 
          By integrating advanced healthcare solutions, we enhance efficiency, reduce waiting times, 
          and improve patient experiences. 
          </p>
          
          <p>
          Our system empowers hospitals to provide organized, 
          patient-centric care while allowing doctors to manage their schedules effortlessly. 
          With a focus on accessibility, reliability, and innovation, we strive to make healthcare more efficient, 
          connected, and patient-friendly.
          </p>
         
          
        </div>
      </div>
    </>
  );
};

export default Biography;
