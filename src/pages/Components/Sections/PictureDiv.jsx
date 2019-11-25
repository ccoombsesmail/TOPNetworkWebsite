import React from "react";
// react component for creating beautiful carousel
// @material-ui/core components
// @material-ui/icons

import "../Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


const PictureDiv = (props) =>  {

/* 
  const styles = {

    textAlign: "center",
    marginTop: "100px",
    paddingTop: "80px",
    paddingBottom: "200px",
    height: "600px",
    background: "black",
    backgroundImage: require("../../../assets/img/network.jpg")  
  }
 */




        return (

         <div>
                       <ScrollAnimation animateIn="fadeInRight"  >

            <div className = "picture-div" >
              
            <ScrollAnimation animateIn="fadeInLeft" >

              <h1 style = {{color: "black", maxWidth: "1000px", marginLeft: "3vw"}}> {props.title} </h1>
              <h3  style = {{color: "black", maxWidth: "900px", marginLeft: "3vw"}}> {props.subtitle} </h3>    
                 
              </ScrollAnimation>

              {props.children}
            
            </div>
            </ScrollAnimation>

            </div>
        )




}



export default (PictureDiv);
