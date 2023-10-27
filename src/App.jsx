import React, { useState } from 'react'
import {  Routes, Route, Navigate, Outlet } from 'react-router-dom'
import Home from './Pages/Home/Home'
import './App.css';
import Contact from './Pages/Contact/Contact';
import About from './Pages/About/About';
import Services from './Pages/Services/Services';
import Faq from './Pages/Faq/Faq';
import Singleblog from './Pages/Blog/SingleBlog/Singleblog';
import BlogList from './Pages/Blog/BlogList/BlogList';
import Speakers from './Pages/Speakers/Speakers'
import SpeakerDetaiil from './Pages/Speakers/Speakerdetail/SpeakerDetaiil';
import Venue from './Pages/Venue/Venue';
import Terms from './Pages/Terms/Terms';
import PublicManagement from './Pages/Terms/Publlication/PublicManagement';
import Organizerdetail from './Pages/Organizers/Organizerdetail/Organizerdetail';
import Organizers from './Pages/Organizers/Organizers';
import Error from './Pages/Error/Error';
import ScrollToTop from "./components/ScrollToTop";
import Services1 from './Pages/Services/services-detail/Services-detail';
import Login from './components/Account/Login';
import Sponsers from './Pages/Sponsers/Sponsers';
import Register from './components/Account/Register';
import SponserForm from './Pages/Forms/Sponser/AddSponser';
import AddConference from './Pages/Forms/Conference/AddConference';
import ViewSponser from './Pages/Forms/Sponser/ViewSponser';
import EditSponser from './Pages/Forms/Sponser/EditSponser';
import SpeakerForm from './Pages/Forms/Speaker/AddSpeaker';
import ViewSpeaker from './Pages/Forms/Speaker/ViewSpeaker';
import EditSpeaker from './Pages/Forms/Speaker/EditSpeaker';
import AddOrganizer from './Pages/Forms/Oraganizer/AddOrganizer';
import EditOrganizer from './Pages/Forms/Oraganizer/EditOrganizer';
import ViewOrganizer from './Pages/Forms/Oraganizer/ViewOrganizer';
import Feedback from './Pages/Testnomialfeedback/Feedback';
import ViewTestnomial from './Pages/Testnomialfeedback/ViewFeedback';
import AddNews from './Pages/Forms/News/AddNews';
import EditNews from './Pages/Forms/News/EditNews';
import SponserDetaiil from './Pages/Sponsers/Sponserdetail/SponserDetaiil';
import AddVenue from './Pages/Forms/venue/AddVenue';
import AddGallery from './Pages/Forms/Gallery/AddGallery';
import EditGallery from './Pages/Forms/Gallery/EditGallery';
import AddFaq from './Pages/Forms/Faq/AddFaq';
import EditFaq from './Pages/Forms/Faq/EditFaq';
import ViewContact from './Pages/Forms/contact/ViewContact';
import ViewSubscribe from './Pages/Forms/Subscribe/ViewSubscribe';
import ViewUsers from './Pages/Forms/All user/ViewUsers';
import AddMedia from './Pages/Forms/Media/AddMedia';
import EditVenue from './Pages/Forms/venue/EditVenue';
import Enroll from './Pages/Enrollment/Enroll';
import ViewEnroll from './Pages/Forms/Enrollment/ViewEnroll';
import EditConference from './Pages/Forms/Conference/EditConference';
import ConferenceTable from './Pages/Conferences/ConferenceTable';
import DetailConferences from './Pages/Conferences/DetailConferences';



const PrivateRoute = ({ isAuthenticated, ...props }) => {
  return isAuthenticated ?
    <>
      <Outlet />
    </>
    : <Navigate replace to='/login' />
}

const App = () => {
  const [isAuthenticated, isUserAuthenticated] = useState(false);


  return (

    <>


        <ScrollToTop>
          <Routes>
            <Route exact path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='*' element={<Error />} />
            <Route path='/all-sponsers' element={<Sponsers />} />
            <Route path='/faq' element={<Faq />} />
            <Route path='/blogs' element={<BlogList />} />
            <Route path='/services' element={<Services />} />
            <Route path='/all-speakers' element={<Speakers />} />
            <Route path='/all-organizers' element={<Organizers />} />
            <Route path='/all-conferences' element={<ConferenceTable />} />
            <Route path='/detail-conference/:id' element={<DetailConferences />} />
            <Route path='/Venue' element={<Venue />} />
            <Route path='/terms-and-conditions' element={<Terms />} />
            <Route path='/publication-management' element={<PublicManagement />} />
            <Route path='/sponser-detail' element={<SponserDetaiil />} />
            <Route path='/contact' element={<Contact />} />
            <Route path='/services-detail' element={<Services1 />} />

       <Route path='/dashboard/add-news' element={<AddNews />} />
            <Route path='/' element={<PrivateRoute isAuthenticated={isAuthenticated} />}>
              <Route path='/dashboard/add-sponser' element={<SponserForm />} />
              <Route path='/dashboard/all-sponsers' element={<ViewSponser />} />
              <Route path='/dashboard/edit-sponser/:id' element={<EditSponser />} />
              <Route path='/dashboard/add-speaker' element={<SpeakerForm />} />
              <Route path='/dashboard/all-speakers' element={<ViewSpeaker />} />
              <Route path='/dashboard/edit-speaker/:id' element={<EditSpeaker />} />
              <Route path='dashboard/add-organizer' element={<AddOrganizer />} />
              <Route path='/dashboard/all-organizers' element={<ViewOrganizer />} />
              <Route path='/dashboard/edit-organizer/:id' element={<EditOrganizer />} />
              <Route path='/dashboard/view-testnomial' element={<ViewTestnomial />} />
       
              <Route path='/dashboard/edit-news/:id' element={<EditNews />} />
              <Route path='/dashboard/add-conference' element={<AddConference />} />
              <Route path='/dashboard/edit-conference/:id' element={<EditConference />} />
              <Route path='/dashboard/all-users' element={<ViewUsers />} />
              <Route path='/dashboard/all-enrollments' element={<ViewEnroll />} />
              <Route path='/register' element={<Register />} />
              <Route path='/dashboard/add-venue' element={<AddVenue />} />
              <Route path='/dashboard/add-gallery' element={<AddGallery />} />
              <Route path='/dashboard/edit-gallery/:id' element={<EditGallery />} />
              <Route path='/dashboard/add-faq' element={<AddFaq />} />
              <Route path='/dashboard/edit-faq/:id' element={<EditFaq />} />
              <Route path='/dashboard/all-contacts/' element={<ViewContact />} />
              <Route path='/dashboard/upload' element={<AddMedia />} />
              <Route path='/dashboard/all-subscribers/' element={<ViewSubscribe />} />
              <Route path='/dashboard/edit-venue/:id' element={<EditVenue />} />
            </Route>

            <Route path='/detail-sponser/:id' element={<SponserDetaiil />} />
            <Route path='/speaker-detail/:id' element={<SpeakerDetaiil />} />
            <Route path='/organizer-detail/:id' element={<Organizerdetail />} />
            <Route path='/feedback' element={<Feedback />} />
            <Route path='/detail-news/:id' element={<Singleblog />} />
            <Route path='/login' element={<Login isUserAuthenticated={isUserAuthenticated} />} />
            <Route path='/conference-enrollment' element={<Enroll />} />


          </Routes>

        </ScrollToTop>

    </>
  )
}

export default App