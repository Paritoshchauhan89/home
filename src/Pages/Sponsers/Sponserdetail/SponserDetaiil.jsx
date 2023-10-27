import React from 'react'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'
import '../Sponsers.css'
import {useState,useEffect} from 'react'
import {getSponser } from '../../../api/Api' 
import {useParams} from 'react-router-dom';
import { Link } from 'react-router-dom'


const SponserDetaiil = () => {


  const [sponser,setSponser]=useState({});

const {id} = useParams();

useEffect(()=>{
loadSponserDetails();
},[])

const loadSponserDetails= async()=>{
const response = await  getSponser(id);
setSponser(response.data);
}
  return (
    <>
    <Navbar/>
    <section id="speakers-details">
  <div className="container">
    <div className="section-header text-center mb-4">
      <h2>Sponser Details</h2>
    </div>
    <div className="row">
      <div className="col-md-6">
        <img src={sponser.sponserimage} alt="Speaker 1" className="img-fluid" />
      </div>
      <div className="col-md-6">
        <div className="details">
          <h2>{sponser.sponserfullname}</h2>
          <h4>{sponser.sponseremail}</h4>
          <div className="social">
            <Link to=" "><i className="bi bi-twitter" /></Link>
            <Link to=" "><i className="bi bi-facebook" /></Link>
            <Link to=" "><i className="bi bi-instagram" /></Link>
            <Link to=""><i className="bi bi-linkedin" /></Link>
          </div>
          <span> <b>KeyPoints: </b>{sponser.sponserkeypoints}</span>
         <p><b>About:</b> {sponser.sponserabout}</p>
        </div>
      </div>
    </div>
  </div>
</section>
<Footer/>

    </>
  )
}

export default SponserDetaiil