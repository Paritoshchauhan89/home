import React from 'react'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { useEffect, useState } from 'react';
import {getFaqs}  from '../../api/Api';

const Faq = () => {


  const [faqs, setFaqs]= useState ([]);

  useEffect(()=>{
getAllFaqs();
  },[]);

  const getAllFaqs = async()=>{
    let response =  await getFaqs();
    setFaqs(response.data);
 
   }

  return (
    <>
    <Navbar/>
    <div className="container mb-4">
    <div class="accordion accordion-flush border mt-5" id="accordionFlushExample">
  {
    faqs.map(faq=>(
      <div class="accordion-item" key={faq._id}>
    <h2 class="accordion-header">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#flush-collapseOne" aria-expanded="false" aria-controls="flush-collapseOne">
        {faq.faqheading}
      </button>
    </h2>
    <div id="flush-collapseOne" class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
      <div class="accordion-body">{faq.faqparagraph}</div>
    </div>
  </div>
    ))
  }

</div>
    </div>
    
    <Footer/>
    </>
  )
}

export default Faq