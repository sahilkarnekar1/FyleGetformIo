import React, { useEffect, useState } from 'react';
import "./Home.css"
import "./Modal.css";
import ContactForm from './ContactForm';
import Modal from 'react-modal';
import heroImage from "./images/hero.png";
import imageHover1 from "./images/1.png";
import imageHover2 from "./images/2.png";
import imageHover3 from "./images/3.png";
import icon from "./images/icon.png";
import WhyWe from './WhyWe';
import Footer from './Footer';


Modal.setAppElement('#root');

const Home = () => {

    const [isModalOpen, setIsModalOpen] = useState(false);

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };

    const handleCloseModal = () => {
        setIsModalOpen(false);
    };



    const [slideIndex, setSlideIndex] = useState(1);

  useEffect(() => {
    showSlides(slideIndex);
  }, );

  const showSlides = (n) => {
    let slides = document.getElementsByClassName("hh1");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { setSlideIndex(slides.length); }    
    if (n < 1) { setSlideIndex(1); }
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    for (let i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    if (slides[slideIndex-1]) slides[slideIndex-1].style.display = "block";
    if (slides[(slideIndex % slides.length)]) slides[(slideIndex % slides.length)].style.display = "block";
    if (dots[slideIndex-1]) dots[slideIndex-1].className += " active";
  }

  const currentSlide = (n) => {
    setSlideIndex(n);
  }

  const handleMouseOver = () => {
    document.querySelector('.thirdContentDiv').style.display = 'flex';
  }

    return (
        <>
            <div className='homeDiv'>

                <div className="mainHomeDiv">
                    <div className="mainContactDiv">
                        <div className="subDivContact">
                            <div className="contactSub2Div">
                                <div className="sub3ContactContentDiv">
                                    <p className="awardTxt">Award winning</p>
                                    <p className="digitalMarketingTxt">Digital Marketing Agency</p>
                                    <p className="morbiTxt">This website is developed only for desktop, I can make it resposive but considering the limitetion of time and submission date i am submitting the task with your detailed guidlines instead of responsiveness. you can check all the functionalities you had assigned to me. </p>
                                    <div className="btnContactUs" onClick={handleOpenModal} >Contact Us</div>
                                </div>
                            </div>
                            <div className="imageDivContactus">
                                <img src={heroImage} alt="imageTest" />
                            </div>
                        </div>
                    </div>
                </div>
                <Modal
                    isOpen={isModalOpen}
                    onRequestClose={handleCloseModal}
                    contentLabel="Contact Form Modal"
                    className="modal"
                    overlayClassName="overlay"
                >
                    <button className="close-btn" onClick={handleCloseModal}>X</button>
                    <ContactForm />
                </Modal>

                {/* slider component */}
               
                <div className="mainSliderDiv">
      <div className="sliderSubDiv">
        <div className="whatWeTxt">WHAT WE DO</div>
        <div className="twoContentsDiv">
          <div className="div1">Services provide for you</div>
          <div className="div2">Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque vitae ante at elit fringilla ac at purus, Morbi sed lacus nec risus finibus feugiat et fermentum</div>
        </div>
        <div className="sliderImagesDiv">
          <div className="sliderContainer">
            <img className="c1 hh1" src={imageHover1} alt="imageTest" onMouseOver={handleMouseOver}/>
            <img className="c1 hh1" src={imageHover2} alt="imageTest" onMouseOver={handleMouseOver}/>
            <img className="c1 hh1" src={imageHover3} alt="imageTest" onMouseOver={handleMouseOver} />
          </div>
          <div className="thirdContentDiv c1">
            <center>
              <img className='margintop' src={icon} alt="imageTest" />
              <p>WEB DEVELOPMENT</p>
              <p>Morbi sed lacus nec risus finibus feugiat et fermentum nibh. Pellentesque</p>
              <div className="readMoreBtn">
                <a href="https://fylehq.com" target="_blank" rel="noopener noreferrer">Read More →</a>
              </div>
            </center>
          </div>
        </div>
        <div className="dotImageSlider">
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    </div>


{/* whywe */}

<WhyWe/>
<Footer/>



            </div>
        </>
    )
}

export default Home
