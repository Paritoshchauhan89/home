import React from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../../../components/Header/Navbar'
import Footer from '../../../components/Footer/Footer'
import { useEffect, useState } from 'react';
import {getNewss}  from '../../../api/Api';

const BlogList = () => {


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
    <Navbar/>
    <section id="search-result" className="search-result">
  <div className="container">
    <div className="row">
      <div className="col-md-12">
        <h3 className="category-title">Search Results</h3>
        {
          newss.map(news=>(
            <div className="d-md-flex post-entry-2 small-img">
            <Link to={`/detail-news/${news._id}`} className="me-4 thumbnail">
              <img src={news.image} alt className="img-fluid" />
            </Link>
            <div>
              <div className="post-meta"><span className="date">Business</span> <span className="mx-1">•</span> <span>Jul 5th '22</span></div>
              <h3><Link to={`/detail-news/${news._id}`}>{news.title}</Link></h3>
              <p>{news.keypoints}</p>
              <div className="d-flex align-items-center author">
                <div className="photo"></div>
                <div className="name">
                  {/* <h3 className="m-0 p-0">Wade Warren</h3> */}
                </div>
              </div>
            </div>
          </div>
          ))
        }
       

      
        {/* Paging */}
        <div className="text-start py-4">
          <div className="custom-pagination">
            <Link to="#" className="prev">Prevous</Link>
            <Link to="#" className="active">1</Link>
            <Link to="#">2</Link>
            <Link to="#">3</Link>
            <Link to="#">4</Link>
            <Link to="#">5</Link>
            <Link to="#" className="next">Next</Link>
          </div>
        </div>{/* End Paging */}
      </div>
      
      
     
    </div>
  </div>
</section>
<Footer/>

    
    </>
  )
}

export default BlogList