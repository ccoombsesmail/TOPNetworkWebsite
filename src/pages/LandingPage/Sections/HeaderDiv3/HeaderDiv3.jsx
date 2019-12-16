import React from "react";

import styles from "./HeaderDiv3.module.css"

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



const HeaderDiv3 = (props) =>  {





        return (

         
            <div className = {styles.Wrapper}>

            <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
              <h1 className = {styles.Title} > {props.title} </h1>
              <h3 className =  {styles.SubTitle} > {props.subtitle}  </h3>         
          
            </ScrollAnimation>
                   
          
          </div>

        )




}



export default (HeaderDiv3);
