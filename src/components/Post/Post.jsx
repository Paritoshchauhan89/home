import React from 'react'
import { useEffect, useState } from 'react';
import {getNewss}  from '../../api/Api';
import { Link } from 'react-router-dom';

const Post = () => {

  
  const [newss, setNewss]= useState ([]);

  useEffect(()=>{
    getAllNewss();
  },[]);

  const getAllNewss = async(id)=>{
    let response =  await getNewss(id);
    setNewss(response.data);
 
   }
 
  
 
  return (
    <>
 {
    newss.map((news)=>
    <ul className="list-unstyled" key={news._id}>
    
    <li>
      <Link className="d-flex flex-column flex-lg-row gap-3 align-items-start align-items-center py-3 link-body-emphasis text-decoration-none border" to={`/detail-news/${news._id}`}>
        <img src={news.image} width={100}  alt="blog" />
        <div className="col-lg-8 d-flex">
          <h6 className="mb-0">{news.title}</h6>
        
        </div>
      </Link>
    </li>
     
  
  </ul>
   )}
  
    </>
  )
}

export default Post