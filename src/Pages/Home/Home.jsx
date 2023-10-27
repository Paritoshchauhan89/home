import React,{useEffect} from 'react'
import Slider from '../../components/Banner/Slider'
import Post from '../../components/Post/Post'
import Cards from '../KnowMore/Cards'
import Gallery from '../../components/Gallery/Gallery'
import Testinomial from '../../components/Testinomial/Testinomial'
import Company from '../../components/Banner/Company/Company'
import Navbar from '../../components/Header/Navbar'
import Footer from '../../components/Footer/Footer'
import './home.css'

const Home = () => {

  useEffect(() => {
    const marquee = document.getElementById('myMarquee');

    // Function to stop the marquee
    function stopMarquee() {
      marquee.stop();
    }

    // Function to start the marquee
    function startMarquee() {
      marquee.start();
    }

    // Add event listeners to stop and start the marquee
    marquee.addEventListener('mouseover', stopMarquee);
    marquee.addEventListener('mouseout', startMarquee);

    return () => {
      // Clean up event listeners when the component unmounts
      marquee.removeEventListener('mouseover', stopMarquee);
      marquee.removeEventListener('mouseout', startMarquee);
    };
  }, []);


  return (
    <>
    <Navbar/>
  <div className="row g-3">
        <Slider />
        <div className="col-md-9 div123">
          <Cards/>
        </div>
        <div className="home-col-md-4">
          <div className="position-sticky" style={{ top: '2rem' }}>
            
            <div>
              <h4 className="fst-italic">Recent posts</h4>
              <hr/>
            
              <marquee id="myMarquee" direction="up" height="400px">
  <Post />
</marquee>
            </div>

       
          </div>
        </div>
        
        {/* <Gallery/> */}
        {/* <Testinomial/> */}
        <Company/>


      </div>

    <Footer/>
    </>
  )
}

export default Home