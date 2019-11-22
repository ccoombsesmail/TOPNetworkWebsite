import React from "react";


import "../Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



class MainDescription extends React.Component {


    render() {



        return (


            <div className = "featureWrap" id="featureWrapTop">

  <div className = "features">
    <ScrollAnimation animateIn="fadeInUp">
    <SmallCard title = "TOP Chain Infrastructure" subtitle = "The First Full-State Sharding Public Chain With Pluggable Side-Chains Capable of Supporting Real-World Applications" imgURL = "/blockchain.png" margin = "100" /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInUp" delay ="200" >
    <SmallCard imgURL = "/nodes.png"  title = "Platform Services" subtitle = "Scalable Smart Contracts, And Decentralized Communications Services Powered By TOP Chain" margin = "100" /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInUp" delay ="400">
    <SmallCard title = "80 Million User App Ecosystem" subtitle = "A Collection of Previously Developed Apps That Will Bring A Combined 80 Million Users To The TOP Network Application Ecosystem" imgURL = "/smartphone.png" margin = "100" />
    </ScrollAnimation>

  </div>
</div>
        )


    }


    






}



export default (MainDescription);
