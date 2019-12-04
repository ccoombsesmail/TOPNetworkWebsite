import React from "react";

import styles from "./SmartContractDivStyles.module.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



class SmartContractDiv extends React.Component {
    


    render() {



        return (

            <div className = {styles.contractDivWrapper}>

            <img alt = "" className = {styles.contractPic} src = {require("../../../../assets/img/contract.png")}/>
            
              <div className = {styles.featureWrap}>
              <ScrollAnimation animateIn="fadeInRight">
              <h1 className = {styles.title} >Smart Contracts</h1>
              <h3 className = {styles.subTitle}>Two Types Of Smart Contracts For Secure and Flexible DApp development</h3>
              </ScrollAnimation>


              <div className = {styles.features}>
            
                <ScrollAnimation animateIn="fadeInUp">
                <SmallCard  
                title = "Platform Contracts" 
                subtitle = "Extremely Secure Platform Level Contracts For Value Transfer" 
                imgURL = "/smart.png"/>
                </ScrollAnimation>
            
            
            
                <ScrollAnimation animateIn="fadeInUp" delay ="200">
                <SmallCard 
                title = "Application Contracts" 
                subtitle = "Flexible Application Layer Contracts For Complex Business Logic" 
                imgURL = "/smartphone.png" />
                </ScrollAnimation>
            
              </div>
            </div>
            
            </div>
        
          
        )


    }


    






}



export default (SmartContractDiv);
