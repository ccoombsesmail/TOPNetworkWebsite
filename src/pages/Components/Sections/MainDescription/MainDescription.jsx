import React from "react";
import styles from "./MainDescriptionStyles.module.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



class MainDescription extends React.Component {


    render() {



        return (


  <div className = {styles.featureWrap}>

  <div className = {styles.features}>
    <ScrollAnimation animateIn="fadeInUp">
    <SmallCard title = "TOP Chain Infrastructure" 
    subtitle = "The First Full-State Sharding Public Chain With Pluggable Side-Chains Capable of Supporting Real-World Applications"
    imgURL = "/blockchain.png" 
    margin = "50" /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInUp" delay ="200" >
    <SmallCard title = "Platform Services" 
    subtitle = "Scalable Smart Contracts, And Decentralized Industry Specific Development Framworks Powered By TOP Chain" 
    imgURL = "/nodes.png"
    margin = "50" /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInUp" delay ="400">
    <SmallCard title = "80 Million User App Ecosystem" 
    subtitle = "A Collection of Previously Developed Apps That Will Bring A Combined 80 Million Users To The TOP Network Application Ecosystem" 
    imgURL = "/smartphone.png" margin = "50" />
    </ScrollAnimation>

  </div>
</div>
        )


    }


    






}



export default (MainDescription);
