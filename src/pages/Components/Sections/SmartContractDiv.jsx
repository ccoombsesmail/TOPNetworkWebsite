import React from "react";


import "../Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



class SmartContractDiv extends React.Component {
    


    render() {



        return (

            <div className = "contract-div">

            <img alt = "" className = "contract-pic" src = {require("../../../assets/img/contract.png")}/>
            
              <div  id = "featureWrapContract" className = "featureWrap">
              <ScrollAnimation animateIn="fadeInRight">
              <h1 style = {{display: "block", marginTop: "100px"}}>Smart Contracts</h1>
              <h3 style = {{display: "block"}}>Two Types Of Smart Contracts For Secure and Flexible DApp development</h3>
              </ScrollAnimation>


              <div className = "features">
            
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
