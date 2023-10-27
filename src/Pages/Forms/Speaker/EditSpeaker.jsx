import {useState,useEffect} from 'react'
import {editSpeaker,   getSpeaker } from '../../../api/Api' 
import {useNavigate, useParams} from 'react-router-dom';
import Sidebar from '../../../components/Sidebar/Sidebar';
import { country } from '../../../components/Country/Country'


const  EditSpeaker = () => {

  const dafaultValue = {
    speakerfullname: '',
    speakeremail: '',
    speakerphonenumber: '',
    designation:'',
    department:'',
    affilation:'',
    speakerimage: '',
    speakerkeypoints:'',
    speakeraddress: '',
    speakercountry: '',
    speakerstate: '',
    speakercity: '',
    speakerpincode: '',
    bio:'',
    profileurl: '',
    
  }

   
const [speaker,setSpeaker]=useState(dafaultValue);
const navigate = useNavigate();

const {id} = useParams();

useEffect(()=>{
loadSpeakerDetails();
},[])

const loadSpeakerDetails= async()=>{
const response = await  getSpeaker(id);
setSpeaker(response.data);
}

  


// form value
    const onValueChange=(e)=>{
        setSpeaker({...speaker,[e.target.name]:e.target.value});
    }

    const editSpeakerDetails = async()=>{
      alert('Data Updated successfully');
       await editSpeaker(speaker,id);


    }
  return (
    <>

 <div className="d-flex">
  <Sidebar/>
  <div className="container mt-4 mb-3">
          <h4 className='text-center mt-2 mb-2'>Edit speaker</h4>
          <form className="row g-3 needs-validation" noValidate>
            <div className="col-md-4">
              <label htmlFor="validationCustom01" className="form-label">Full Name</label>
              <input type="text" className="form-control" id="validationCustom01" placeholder="Enter Full Name" required
                onChange={(e) => onValueChange(e)} name='speakerfullname' value={speaker.speakerfullname}
              />

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom02" className="form-label">Email</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Email" required onChange={(e) => onValueChange(e)} name='speakeremail' value={speaker.speakeremail}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Phone Number</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Phone Number" required onChange={(e) => onValueChange(e)} name='speakerphonenumber' value={speaker.speakerphonenumber}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Designation</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Designation" required onChange={(e) => onValueChange(e)} name='designation' value={speaker.designation}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Department</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Department" required onChange={(e) => onValueChange(e)} name='department' value={speaker.department}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Affilation</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Affilation" required onChange={(e) => onValueChange(e)} name='affilation' value={speaker.affilation}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Image Url</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Image Url" required onChange={(e) => onValueChange(e)} name='speakerimage' value={speaker.speakerimage}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validation" className="form-label">Key Points</label>
              <input type="text" className="form-control" id="validationCustom02" placeholder="Enter Key Points" required onChange={(e) => onValueChange(e)} name='speakerkeypoints' value={speaker.speakerkeypoints}/>

            </div>
            <div className="col-md-12">
              <label htmlFor="validationCustom03" className="form-label">Address</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakeraddress' value={speaker.speakeraddress} />

            </div>
            <div class="col-md-3">
    <label for="validationCustom04" class="form-label">Speaker Country</label>
    <select class="form-select" id="validationCustom04" required onChange={(e)=>onValueChange(e)} name='speakercountry' value={speaker.speakercountry}> 
      <option selected disabled value="">Choose...</option>
      <option>Afghanistan</option>
<option>Aland Islands</option>
<option>Albania</option>
<option>Algeria</option>
<option>American Samoa</option>
<option>Andorra</option>
<option>Angola</option>
<option>Anguilla</option>
<option>Antarctica</option>
<option>Antigua and Barbuda</option>
<option>Argentina</option>
<option>Armenia</option>
<option>Aruba</option>
<option>Australia</option>
<option>Austria</option>
<option>Azerbaijan</option>
<option>Bahamas</option>
<option>Bahrain</option>
<option>Bangladesh</option>
<option>Barbados</option>
<option>Belarus</option>
<option>Belgium</option>
<option>Belize</option>
<option>Benin</option>
<option>Bermuda</option>
<option>Bhutan</option>
<option>Bolivia</option>
<option>Bonaire, Sint Eustatius and Saba</option>
<option>Bosnia and Herzegovina</option>
<option>Botswana</option>
<option>Bouvet Island</option>
<option>Brazil</option>
<option>British Indian Ocean Territory</option>
<option>Brunei</option>
<option>Bulgaria</option>
<option>Burkina Faso</option>
<option>Burundi</option>
<option>Côte d'Ivoire</option>
<option>Cambodia</option>
<option>Cameroon</option>
<option>Canada</option>
<option>Cape Verde</option>
<option>Cayman Islands</option>
<option>Central African Republic</option>
<option>Chad</option>
<option>Chile</option>
<option>China</option>
<option>Christmas Island</option>
<option>Cocos (Keeling) Islands</option>
<option>Colombia</option>
<option>Comoros</option>
<option>Congo</option>
<option>Cook Islands</option>
<option>Costa Rica</option>
<option>Croatia</option>
<option>Cuba</option>
<option>Curacao</option>
<option>Cyprus</option>
<option>Czech Republic</option>
<option>Denmark</option>
<option>Djibouti</option>
<option>Dominica</option>
<option>Dominican Republic</option>
<option>East Timor</option>
<option>Ecuador</option>
<option>Egypt</option>
<option>El Salvador</option>
<option>Equatorial Guinea</option>
<option>Eritrea</option>
<option>Estonia</option>
<option>Ethiopia</option>
<option>Falkland Islands (Malvinas)</option>
<option>Faroe Islands</option>
<option>Fiji</option>
<option>Finland</option>
<option>France</option>
<option>French Guiana</option>
<option>French Polynesia</option>
<option>French Southern Territories</option>
<option>Gabon</option>
<option>Gambia</option>
<option>Georgia</option>
<option>Germany</option>
<option>Ghana</option>
<option>Gibraltar</option>
<option>Greece</option>
<option>Greenland</option>
<option>Grenada</option>
<option>Guadeloupe</option>
<option>Guam</option>
<option>Guatemala</option>
<option>Guernsey</option>
<option>Guinea</option>
<option>Guinea-Bissau</option>
<option>Guyana</option>
<option>Haiti</option>
<option>Heard Island and McDonald Islands</option>
<option>Holy See</option>
<option>Honduras</option>
<option>Hong Kong</option>
<option>Hungary</option>
<option>Iceland</option>
<option selected>India</option>
<option>Indonesia</option>
<option>Iran</option>
<option>Iraq</option>
<option>Ireland</option>
<option>Isle of Man</option>
<option>Israel</option>
<option>Italy</option>
<option>Jamaica</option>
<option>Japan</option>
<option>Jersey</option>
<option>Jordan</option>
<option>Kazakhstan</option>
<option>Kenya</option>
<option>Kiribati</option>
<option>Kosovo</option>
<option>Kuwait</option>
<option>Kyrgyzstan</option>
<option>Laos</option>
<option>Latvia</option>
<option>Lebanon</option>
<option>Lesotho</option>
<option>Liberia</option>
<option>Libya</option>
<option>Liechtenstein</option>
<option>Lithuania</option>
<option>Luxembourg</option>
<option>Macao</option>
<option>Macedonia</option>
<option>Madagascar</option>
<option>Malawi</option>
<option>Malaysia</option>
<option>Mali</option>
<option>Malta</option>
<option>Marshall Islands</option>
<option>Martinique</option>
<option>Mauritania</option>
<option>Mauritius</option>
<option>Mayotte</option>
<option>Mexico</option>
<option>Micronesia</option>
<option>Moldova</option>
<option>Monaco</option>
<option>Mongolia</option>
<option>Montenegro</option>
<option>Montserrat</option>
<option>Morocco</option>
<option>Mozambique</option>
<option>Myanmar</option>
<option>Namibia</option>
<option>Nauru</option>
<option>Nepal</option>
<option>Netherlands</option>
<option>New Caledonia</option>
<option>New Zealand</option>
<option>Nicaragua</option>
<option>Niger</option>
<option>Nigeria</option>
<option>Niue</option>
<option>Norfolk Island</option>
<option>North Korea</option>
<option>Northern Mariana Islands</option>
<option>Norway</option>
<option>Oman</option>
<option>Pakistan</option>
<option>Palau</option>
<option>Palestine</option>
<option>Panama</option>
<option>Papua New Guinea</option>
<option>Paraguay</option>
<option>Peru</option>
<option>Philippines</option>
<option>Pitcairn</option>
<option>Poland</option>
<option>Portugal</option>
<option>Puerto Rico</option>
<option>Qatar</option>
<option>Reunion</option>
<option>Romania</option>
<option>Russia</option>
<option>Rwanda</option>
<option>Saint Barthelemy</option>
<option>Saint Helena, Ascension and Tristan da Cunha</option>
<option>Saint Kitts and Nevis</option>
<option>Saint Lucia</option>
<option>Saint Martin (French part)</option>
<option>Saint Pierre and Miquelon</option>
<option>Saint Vincent and the Grenadines</option>
<option>Samoa</option>
<option>San Marino</option>
<option>Sao Tome and Principe</option>
<option>Saudi Arabia</option>
<option>Serbia</option>
<option>Seychelles</option>
<option>Sierra Leone</option>
<option>Singapore</option>
<option>Sint Maarten (Dutch part)</option>
<option>Slovakia</option>
<option>Slovenia</option>
<option>Solomon Islands</option>
<option>Somalia</option>
<option>South Africa</option>
<option>South Georgia and the South Sandwich Islands</option>
<option>South Korea</option>
<option>South Sudan</option>
<option>Spain</option>
<option>Sri Lanka</option>
<option>Sudan</option>
<option>Suriname</option>
<option>Svalbard and Jan Maye Timor-Leste</option>
<option>Swaziland</option>
<option>Sweden</option>
<option>Switzerland</option>
<option>Syria</option>
<option>Taiwan</option>
<option>Tajikistan</option>
<option>Tanzania</option>
<option>Thailand</option>
<option>Togo</option>
<option>Tokelau</option>
<option>Tonga</option>
<option>Trinidad and Tobago</option>
<option>Tunisia</option>
<option>Turkey</option>
<option>Turkmenistan</option>
<option>Turks and Caicos Islands</option>
<option>Tuvalu</option>
<option>Uganda</option>
<option>Ukraine</option>
<option>United Arab Emirates</option>
<option>United Kingdom</option>
<option>United States</option>
<option>United States Minor Outlying Islands</option>
<option>Uruguay</option>
<option>Uzbekistan</option>
<option>Vanuatu</option>
<option>Vatican City</option>
<option>Venezuela</option>
<option>Vietnam</option>
<option>Virgin Islands, British</option>
<option>Virgin Islands, U.S.</option>
<option>Wallis and Futuna</option>
<option>Western Sahara</option>
<option>Yemen</option>
<option>Zambia</option>
<option>Zimbabwe</option>

    </select>
    <div class="invalid-feedback">
      Please select a valid state.
    </div>
  </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">State</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakerstate' value={speaker.speakerstate}/>
            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">City</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakercity' value={speaker.speakercity}/>

            </div>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Pin Code</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='speakerpincode' value={speaker.speakerpincode} />

            </div>
        
          

            <label htmlFor="validationCustom03" className="form-label">Bio</label>
            <textarea id="w3review" rows="4" cols="50" onChange={(e) => onValueChange(e)} name='bio' value={speaker.bio}/>
            <div className="col-md-4">
              <label htmlFor="validationCustom03" className="form-label">Profile url</label>
              <input type="text" className="form-control" id="validationCustom03" required onChange={(e) => onValueChange(e)} name='profileurl' value={speaker.profileurl}/>

            </div>
            <div className="col-12">
              <button className="btn btn-primary" type="submit" onClick={() => editSpeakerDetails()}>Submit form</button>
            </div>
          </form>
          
        </div>
 </div>
   
    </>
  )
}

export default EditSpeaker