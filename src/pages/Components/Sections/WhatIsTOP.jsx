import React from "react";


import "../Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



class WhatIsTOP extends React.Component {


    styles = {

        textAlign: "center",
        paddingTop: "300px",
        paddingBottom: "100px"
    }


    render() {



        return (

         
                    <div style = {this.styles}>
                        <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
                            <h1 className = "centerTitle"> What Is TOP Network? </h1>
                            <h3 className = "centerSubTitle"> TOP Network Is A Full-Stack Blockchain Platform Consisting of Three Comprehensive Layers That Together Can Support The Development and Operation of Real-World Decentralized Applications </h3>
                        </ScrollAnimation>
                    </div>

        )


    }


    






}



export default (WhatIsTOP);
