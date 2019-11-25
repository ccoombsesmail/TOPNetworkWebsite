import React from "react";


import "../Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



class IndustrySpecificServices extends React.Component {


    styles = {

        wrap: {
            display:"block",
            color: "black",
            

        },

        comp1: {

            marginLeft: "200px"



        },
      



    }


    render() {



        return (


    <div className =  {this.styles.wrap} >

  <div className = {this.styles.comp1}>
      
    <ScrollAnimation animateIn="fadeInLeft"   delay ="200"  animateOut = "fadeOutUp">
    <SmallCard color = "black" float = "left" title = "Communications" subtitle = "Full-Stack Decentralized Communcations Services Allowing Developers To Easily Integrate Communcations Functions Into Their DApps " imgURL = "/communications.png" margin = "50" /> 
    </ScrollAnimation>
 


    <ScrollAnimation  animateIn="fadeInLeft" animateOut = "fadeOutUp"  >
    <SmallCard float = "left"  color = "black" imgURL = "/controller.png"  title = "Gaming" subtitle = "Framework For Fast and Easy Blockchain Game Development" margin = "50" /> 
    </ScrollAnimation>


   

  </div>
</div>
        )


    }


    






}



export default (IndustrySpecificServices);
