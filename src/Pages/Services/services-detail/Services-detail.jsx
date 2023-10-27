import React from "react";
import Navbar from "../../../components/Header/Navbar";
import Footer from "../../../components/Footer/Footer";

const Services1 = () => {
  return (
    <>
    <Navbar/>
      <div className="container">
      <h1 className="text-center" style={{color: "#1d5818",margin:50,fontSize:50}}><strong>Author Services</strong></h1>
        <div className="row mt-4 mb-4">
          <p>
            <li className="fw-light" >Advance copy editing services</li>
          </p>
          <p>
            <li className="fw-light" >Proof reading services</li>
          </p>
          <p>
            <li className="fw-light" >Image Corrections</li>
          </p>
          <p>
           
            <li className="fw-light" >Layouting Services</li>
          </p>
          <p>
            <li className="fw-light" >Multi level plagiarism checking</li>
          </p>
          <p>
          
            <li className="fw-light" >Quality checking and and processing </li>
          </p>
          <p>
          
            <li className="fw-light" >free DOI (Digitel object Indexing)</li>
          </p>
          <p>
          
            <li className="fw-light" >faster processing</li>
          </p>
          <p>
          
            <li className="fw-light" >Dedicated one point commissionery manager</li>
          </p>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Services1;
