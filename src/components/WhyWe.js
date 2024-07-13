import React, { useState } from 'react'
import "./WhyWe.css"
import imageIcons1 from './images/im1.png'
import imageIcons2 from './images/im2.png'
import imageIcons3 from './images/im3.png'
import imageIcons4 from './images/im4.png'
import imgBig from "./images/image.png";
import imgBig2 from "./images/free-images.jpg"; // Add path for the second image
import imgBig3 from "./images/images.jpeg";

const WhyWe = () => {

    const [currentImage, setCurrentImage] = useState(imgBig);

    const project1 = () => {
      setCurrentImage(imgBig); // Set to default image
    };
  
    const project2 = () => {
      setCurrentImage(imgBig2); // Set to second image
    };
  
    const project3 = () => {
      setCurrentImage(imgBig3); // Set to third image
    };

    return (
        <>
            <div className="maintestDiv">
                <div className="subDivTest1">
                    <div className="testsDiv1">
                        <center><div className="whyChooseUs">WHY CHOOSE US</div></center>
                        <center><div className="whyBextTxt">Why We Are Best</div></center>
                        <div className="multiItemsDiv">
                            <div className="contDiv1">
                                <img src={imageIcons1} alt="imageTest" />
                                <h3>Clarified Vision &amp; Target</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                            </div>
                            <div className="contDiv1">
                                <img src={imageIcons2} alt="imageTest" srcSet />
                                <h3>Clarified Vision &amp; Target</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                            </div>
                            <div className="contDiv1">
                                <img src={imageIcons3} alt="imageTest" srcSet />
                                <h3>Clarified Vision &amp; Target</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                            </div>
                            <div className="contDiv1">
                                <img src={imageIcons4} alt="imageTest" srcSet />
                                <h3>Clarified Vision &amp; Target</h3>
                                <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy.</p>
                            </div>
                        </div>
                        <div className="ourProjectTxt">Our project</div>
                        <center><div className="whyBextTxt">Why We Are Best</div></center>
                        <div className="projectsWithImgDiv">
                            <div className="imgDivProjects">
                            <img className='bigImage' src={currentImage} alt="current project" />
                            </div>
                            <div className="projectsDivTxt">
                                <div onClick={project1} className="projectsDiv1">
                                    <div className="p1DivTxt">Genderless Kei – Japan’s Hot</div>
                                    <p className="p1LoremProject">Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                                </div>
                                <div onClick={project2} className="projectsDiv1">
                                    <div className="p1DivTxt">Better Strategy &amp; Quality</div>
                                    <p className="p1LoremProject">Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                                </div>
                                <div onClick={project3} className="projectsDiv1">
                                    <div className="p1DivTxt">Genderless Kei – Japan’s Hot</div>
                                    <p className="p1LoremProject">Set to launch on the manufacturer’s new A330neo aircraft in 2017, it’s offering lots of</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default WhyWe
