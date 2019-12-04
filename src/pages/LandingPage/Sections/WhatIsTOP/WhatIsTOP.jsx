import React from "react";


import styles from "./WhatIsTOP.module.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



class WhatIsTOP extends React.Component {




    render() {

        return (

         
    <div className = {styles.Wrapper}>
        <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">

            <h1 className = {styles.Title}> What Is TOP Network? </h1>

            <h3 className = {styles.SubTitle}> TOP Network Is A State of The Art Full-Stack Blockchain
             Platform Consisting of Three Comprehensive Layers That Together Can
            Truly Support The Development and Operation of Real-World Decentralized Applications
             </h3>

        </ScrollAnimation>
    </div>

        )


    }






}



export default (WhatIsTOP);
