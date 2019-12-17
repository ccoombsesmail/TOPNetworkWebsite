import React from "react";

import styles from "./HeaderDiv2.module.css"

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



const HeaderDiv2 = (props) =>  {





        return (

         
            <div className = {styles.Wrapper}>

            <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
              <h1 className = {styles.Title} > TOP Network Service Layer </h1>
              <h3 className =  {styles.SubTitle} > TOP Enables Real-World Business On The Blockchain By Providing An Array of Services and Developer Tools For Simple, Flexible, and Scalable DApp Development  </h3>         
          
            </ScrollAnimation>
                   
          
          </div>

        )




}



export default (HeaderDiv2);
