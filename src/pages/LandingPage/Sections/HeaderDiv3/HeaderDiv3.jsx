import React from "react";

import styles from "./HeaderDiv3.module.css"

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



const HeaderDiv3 = () =>  {





        return (

         
            <div className = {styles.Wrapper}>

            <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
              <h1 className = {styles.Title} > Application Ecosystem </h1>
              <h3 className =  {styles.SubTitle} > Drawing From A Userbase of 80 Million Users  </h3>         
          
            </ScrollAnimation>
                   
          
          </div>

        )




}



export default (HeaderDiv3);
