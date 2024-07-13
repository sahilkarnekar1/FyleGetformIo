import React from 'react'
import "./Footer.css";
import heart from "./images/heart.png"
import clock from "./images/clock.png"
import tick from "./images/tick.png"
import trophy from "./images/trophy.png"
import group from "./images/group.png"



const Footer = () => {
  return (
    <>
  <div className="mainLast">
  <div className="subLast1">
    <div className="expertGrowthTxt">Experts growts</div>
    <div className="ourGrowthTxt">Our Company Growth</div>
    <div className="countsDiv">
      <div className="count1Div count1Div1">
        <img className="paddingForCounts" src={heart} alt="imageTest" srcSet />
        <div className="headCount">199 +</div>
        <div className="baseTxt">Staticfied Customers</div>
      </div>
      <div className="count1Div">
        <img src={clock} alt="imageTest" srcSet />
        <div className="headCount">1591 +</div>
        <div className="baseTxt">Days Of Operation</div>
      </div>
      <div className="count1Div">
        <img src={tick} alt="imageTest" srcSet />
        <div className="headCount">283 +</div>
        <div className="baseTxt">Complete Project</div>
      </div>
      <div className="count1Div">
        <img src={trophy} alt="imageTest" srcSet />
        <div className="headCount">75 +</div>
        <div className="baseTxt">Win Awards</div>
      </div>
    </div>
    <div className="bottomDiv">
      client's feedback
    </div>
    <div className="peopleAboutus">people say's about us !</div>
    <div className="simpleBottomTxt">Jannat Tumpa The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections Bonorum et Malorum original.</div>
    <div className="bottom2Divs">
      <div className="companyName">JANNAT TUMPA</div>
      <div className="companyDesc">- COO, AMERIMAR ENTERPRISES, INC.</div>
    </div>
    <div className="mainFooterDiv">
      <img src={group} alt="imageTest" srcSet />
    </div>
  </div>
</div>

    </>
  )
}

export default Footer
