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
            <ScrollAnimation animateIn="fadeInUp"   duration = "2" >
            <div className = "picture-div" >
              
            <ScrollAnimation animateIn="fadeInUp"  duration = "2" >
            
              <h1 className = "centerTitle" style = {{color: "white"}}> {props.title} </h1>
              <h3 className = "centerSubTitle" style = {{color: "white"}}> {props.subtitle} </h3>    
                 
              </ScrollAnimation>
            
            </div>
            </ScrollAnimation>
            </div>
        )




}



export default (PictureDiv);
