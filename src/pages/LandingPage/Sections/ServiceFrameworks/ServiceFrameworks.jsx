import React from "react";
// react component for creating beautiful carousel
// @material-ui/core components
// @material-ui/icons

import styles from "./ServiceFrameworksStyles.module.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



const ServiceFrameworks = () =>  {



return (

<div>
      <ScrollAnimation className = {styles.pictureHeaderDiv} animateIn="fadeInRight"  >

              
            <ScrollAnimation animateIn="fadeInLeft" delay ="200" >

            <h1 className ={styles.title} > Full-Stack Industry Specific Development Frameworks</h1>
            <h3 className = {styles.subTitle}> Comprehensive Developer Tools Allowing Even Non-Blockchain Developers To Develop Complex Blockchain DApps </h3>    
                 
            </ScrollAnimation>


            <div className =  {styles.servicesWrap} >

              <div className = {styles.services}>
    
              <ScrollAnimation animateIn="fadeInLeft"   delay ="400"  >
              <SmallCard color = "black" float = "left" title = "Communications" subtitle = "Full-Stack Decentralized Communcations Services Allowing Developers To Easily Integrate Communcations Functions Into Their DApps " imgURL = "/communications.png" /> 
              </ScrollAnimation>

              <ScrollAnimation  animateIn="fadeInLeft"  delay ="200"  >
              <SmallCard float = "left"  color = "black" imgURL = "/controller.png"  title = "Gaming" subtitle = "Framework For Fast and Easy Blockchain Game Development" /> 
              </ScrollAnimation>


                </div>
                
            </div>
            



        </ScrollAnimation>

</div>

)




}



export default (ServiceFrameworks);
