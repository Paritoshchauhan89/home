import React from 'react'
import './Slider.css';

const Slider = () => {
  return (
    <>

      <div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active lovendr">
            <img src="https://st.depositphotos.com/1010710/3382/i/450/depositphotos_33823065-stock-photo-empty-conference-room.jpg" className="d-block w-100" alt="banner" />
            <div class="carousel-caption  d-md-block">
              <h1 className='sf'>Conference</h1>
              <p style={{backgroundColor:'rgba(240, 248, 255, 0.363)'}}>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.</p>



            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/1291614652/photo/close-up-modern-design-chair-in-conference-room-with-window-curtain-background-free-copy.jpg?s=612x612&w=0&k=20&c=svF2nYhPxJ1rnUL3qHKRJos-4oSmjScVqTi76XZrJrM=" className="d-block w-100" alt="Banner" />
            <div class="carousel-caption  d-md-block">
              <h1 className='sf'>Conference</h1>
              <p style={{backgroundColor:'rgba(240, 248, 255, 0.363)'}} className='rf'>Welcome to STM Conference, a leading organization dedicated to organizing and facilitating high-quality conferences and events all over the world. With a team of experienced professionals and a commitment to excellence, we are proud to be a trusted partner for researchers, scholars, academics, and professionals in various fields.</p>

            </div>
          </div>
          <div className="carousel-item">
            <img src="https://media.istockphoto.com/id/484396028/photo/closeup-of-an-empty-conference-room-before-meeting.jpg?s=170667a&w=0&k=20&c=pw0qZwkozZWZoHHBVJxTCrnRNUsfoIjVIZG-hHeDrhQ=" className="d-block w-100" alt="Banner" />
            <div class="carousel-caption  d-md-block">
              <h1 className='sf'>Conference</h1>
              <p style={{backgroundColor:'rgba(240, 248, 255, 0.363)'}}className='rf'>Welcome to STM Conference, a leading organization dedicated to organizing
                and facilitating high-quality conferences and events all over the world. With a team of
                experienced professionals and a commitment to excellence, we are proud to be a trusted partner
                for researchers, scholars, academics, and professionals in various fields.</p>
            </div>
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
          <span className="bi bi-caret-left-fill" style={{ color: 'black', fontSize: '30px' }} aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
          <span className="bi bi-caret-right-fill " style={{ color: 'black', fontSize: '30px' }} aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>

    </>
  )
}

export default Slider