import React from 'react'
import { useState ,useEffect} from 'react'
import { editFaq, getFaq } from '../../../api/Api' 
import {useNavigate, useParams} from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar'

const EditFaq = () => {

    const dafaultValue={
         faqheading:'',
         faqparagraph:'',
       
    }

   
    const [faq,setFaq]=useState(dafaultValue);
    const navigate = useNavigate();
    
    const {id} = useParams();
    
    useEffect(()=>{
    loadfaqDetails();
    },[])
    
    const loadfaqDetails= async()=>{
    const response = await  getFaq(id);
    setFaq(response.data);
    }
    
      
    
    
    // form value
        const onValueChange=(e)=>{
            setFaq({...faq,[e.target.name]:e.target.value});
        }
    
        const editFaqDetails = async()=>{
          alert('data Updated successfully');
           await editFaq(faq,id);
           navigate('/dashboard/add-faq');
    
    
        }
  return (
    <>

<div className="d-flex">
  <Sidebar/>

  <div className="container mt-4 mb-3">
        <h4 className='text-center mt-2 mb-2'>Edit Faq's</h4>
     <form className="row g-3 needs-validation" noValidate>

  <div className="col-md-12">
    <label htmlFor="validationCustom01" className="form-label">Heading</label>
    <input type="text" className="form-control" id="validationCustom01" placeholder="heading" required 
    onChange={(e)=>onValueChange(e)} name='faqheading'  value={faq.faqheading}
    />
  
  </div>
  
 
  <div class="form-group purple-border">
  <label for="exampleFormControlTextarea4">Paragraph</label>
  <textarea class="form-control" id="exampleFormControlTextarea4" rows="3" onChange={(e)=>onValueChange(e)} name='faqparagraph' value={faq.faqparagraph} ></textarea>
</div>


  
  

 



  <div className="col-12">
    <button className="btn btn-primary" type="submit" onClick={()=> editFaqDetails()}>Update Faq</button>
  </div>
</form>


    </div>

   </div>
  
   
    </>
  )
}

export default EditFaq