import React from "react";

import styles from "./HeaderDiv1.module.css"

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


//<b style = {{color: "#F8CF03"}}

const HeaderDiv1 = (props) =>  {





        return (

         
            <div className = {styles.Wrapper}>

            <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
              <h1 className = {styles.Title} > A Next-Generation Blockchain Infrastructure  </h1>
              <h3 className =  {styles.SubTitle} > TOP Chain Is A Fully-Sharded and Completely Permisionless Public Chain With Carefully Crafted Token Economics  </h3>         
          
            </ScrollAnimation>
                   
          
          </div>

        )




}



export default (HeaderDiv1);
