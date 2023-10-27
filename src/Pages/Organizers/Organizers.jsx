import React from 'react'
import './Organizers.css'
import { Link } from 'react-router-dom'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react';
import {getOrganizers}  from '../../api/Api';

const Organizers = () => {
  

  const [organizers, setSponsers]= useState ([]);

  useEffect(()=>{
getAllOrganizers();
  },[]);

  const getAllOrganizers = async()=>{
    let response =  await getOrganizers();
    setSponsers(response.data);
 
   }

  return (
    <>
  <Navbar/>
  <div className="container py-5">
    <div className="row text-center text-white">
      <div className="text-center mb-4">
        <p className="display-4 text-center">Organizers</p>
        <p className="lead mb-0 text-center">Behind every successful conference lies an efficient and dedicated organizing team. Our organizers are the architects of inspiration, meticulously planning and executing events that leave a lasting impact. From conceptualization to realization, our team strives to create seamless experiences that enable attendees to focus on what truly matters – the exchange of knowledge.</p>
       
      </div>
    </div>
 
  <div className="container">
    <div className="row text-center ">
     {
      organizers.map(Organizer=>(
        <div className="col-xl-3 col-sm-6 mb-5 ">
        <div className="bg-white rounded shadow-sm py-5 px-4 shadow-lg p-3 mb-5 bg-body-tertiary rounded"><Link to={`/organizer-detail/${Organizer._id}`}><img src={Organizer.organizerimage} alt='logo' width={120} className="img-fluid rounded-circle mb-3 img-thumbnail shadow-sm" /></Link>
          <h5 className="mb-0">{Organizer.organizerfullname}</h5><span className="small text-uppercase text-muted">{Organizer.designation}</span>
          <ul className="social mb-0 list-inline mt-3">
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-facebook" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-twitter" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-instagram" /></Link></li>
            <li className="list-inline-item"><Link href="#" className="social-link"><i className="bi bi-linkedin" /></Link></li>
          </ul>
        </div>
      </div>
      ))
     }
      
    
     
  
    </div>
  </div>
</div>

    <Footer/>
    
    </>
  )
}

export default Organizers