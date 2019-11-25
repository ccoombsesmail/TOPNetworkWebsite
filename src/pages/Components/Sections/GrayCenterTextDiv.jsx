import React from "react";

import "../Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



const GrayCenterTextDiv = (props) =>  {


    const divstyles = {

        first: {


        },
        second: {

            marginTop: "100px"
        },

        third: {
            marginTop: "200px", 
            paddingTop: "100px", 
            paddingBottom: "100px",
            backgroundColor: "black"


        }


    }
    let styles = {}

    if (props.divnumber === "first") {

        styles = divstyles.first
    } else if (props.divnumber === "second"){

         styles = divstyles.second

    } else{
         styles = divstyles.third

    }






        return (

         
            <div style = {styles} className = "graycenter-div">

            <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
              <h1 className = "centerTitle" style = {{color: "white"}}> {props.title} </h1>
              <h3 className = "centerSubTitle" style = {{color: "white"}}> {props.subtitle}  </h3>         
          
            </ScrollAnimation>
                   
          
          </div>

        )




}



export default (GrayCenterTextDiv);
