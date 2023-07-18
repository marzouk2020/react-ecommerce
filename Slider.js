import Image1 from './images/images.1.webp';
import Image2 from './images/images.2.jpeg';
import Image3 from './images/images.3.jpeg';

import './Slider.css';
function Slider(){
    return(
            <>
            
            <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={Image1} className="d-block w-100  height-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image2} className="d-block w-100   height-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src={Image3} className="d-block w-100  height-100 " alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
            </>
    );
}

export default Slider;