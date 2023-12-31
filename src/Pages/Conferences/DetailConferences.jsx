import React,{ useEffect, useState } from 'react';
import './conferences.css'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import { Link } from 'react-router-dom'
import {getConference} from '../../api/Api'
import {useParams} from 'react-router-dom'

const DetailConferences = () => {

  const [conferences,setConferences]=useState({});
  
  const {id} = useParams();
  
  useEffect(()=>{
  loadConferenceDetails();
},[])
  
  const loadConferenceDetails= async()=>{
  const response = await  getConference(id);
  setConferences(response.data);
  }

  return (
    <>
      <Navbar />
      <div className="container mt-5">
        <h1 className='text-center m-4'>All Conferences</h1>
        <p className='text-center mt-4 mb-4' style={{ fontSize: 16, textAlign: 'center' }}>At the heart of STM Conferences is the celebration of knowledge. Our conferences serve as vibrant hubs where researchers, scholars, professionals, and enthusiasts converge to deliberate upon the latest advancements in their respective fields. With a rich tapestry of themes and subjects, these gatherings provide a platform for intellectual growth, ensuring that innovation and insights are nurtured to their fullest potential.</p>
      </div>
   
        <div className="container">
        <div className="top border" style={{ display: 'flex' }}>
          <div className="img col-md-4 p-4" key={conferences._id}>
            <img src={conferences.conferenceimage} width="300px" height={250} alt='conference' />
          </div>
          <div className="col-md-8">
            <div class="d-flex justify-content-end">

              <Link to='/conference-enrollment'><button type="button" className='btn btn-outline-primary justify-content-end' style={{ width: '150px' }}> Join Now:</button></Link>
            </div>
            <table class="table table-striped mt-4">

              <tbody>
                <tr>
                  <th scope="row">1</th>
                  <td>Conference Title:</td>
                  <td>||</td>
                  <td><b>{conferences.conferencetitle}</b></td>
                </tr>
                <tr>
                  <th scope="row">2</th>
                  <td>Shared Url</td>
                  <td>||</td>
                  <td>{conferences.onlineoffline}</td>
                </tr>
                <tr>
                  <th scope="row">3</th>
                  <td>Sponsers Email</td>
                  <td>||</td>
                  <td>{conferences.sponsersemail}</td>

                </tr>
                <tr>
                  <th scope="row">4</th>
                  <td>Speakers Email</td>
                  <td>||</td>
                  <td>{conferences.speakersemail}</td>
                </tr>
                <tr>
                  <th scope="row">5</th>
                  <td>Feedback Url</td>
                  <td>||</td>
                  <td>{conferences.feedbackurl}</td>
                </tr>
              </tbody>
            </table>




            <div className="d-flex justify-content-between">
              <span className='mt-4 fw-semibold'>Conferences Broucher :</span><Link to={conferences.manuscriptsubmissionurl} download><button type='button' className='btn btn-outline-primary mb-4' style={{ width: '250px' }}>Download Broucher</button></Link>
            </div>
            {/* <div className="d-flex justify-content-between">
              <span className='mt-4 fw-semibold'>Manuscript Last Date :</span><button type='button' className='btn btn-outline-success' style={{ width: '150px' }}>{conferences.manuscriptenddate}</button>
            </div> */}

          </div>

        </div>
        <hr />
        <div className="bottom col-md-12">
          <span className='fw-semibold'>Key Points :</span> <p className='fst-normal'>{conferences.conferencekeypoints} </p>
          <span className='fw-semibold' >About Conference ||</span>
          <p className='fst-italic'>{conferences.description}</p>
        </div>
      </div>
  

      <Footer />
    </>
  )
}

export default DetailConferences