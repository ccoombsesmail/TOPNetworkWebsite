import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import "./Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';


import MainDescription from "./Sections/MainDescription.jsx"
import TrilemmaTech from "./Sections/TrilemmaTech"
import WhatIsTOP from "./Sections/WhatIsTOP.jsx";
import GrayCenterTextDiv from "./Sections/GrayCenterTextDiv.jsx";
import PictureDiv from "./Sections/PictureDiv.jsx";
import TopChainFeatures from "./Sections/TopChainFeatures.jsx";
import CommunicationsServices from "./Sections/CommunicationsServices.jsx";
import SmartContractDiv from "./Sections/SmartContractDiv.jsx";





class Components extends React.Component {




  render() {
    const { classes, ...rest } = this.props;
    return (
      <div>
        <Header
          brand="TOP Network"
          rightLinks={<HeaderLinks />}
          fixed
          color="transparent"
          changeColorOnScroll={{
            height: 400,
            color: "black"
          }}
          {...rest}
        />
        <Parallax image={require("assets/img/bg15.jpg")}>
          <div className={classes.container}>
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                <ScrollAnimation animateIn="fadeIn">

                  <h6 className={classes.title}  >TOP Network</h6>
                  <h3 className={classes.subtitle} >A High-Performance Public Blockchain Platform and Decentralized Communications Infrastructure </h3>

                  </ScrollAnimation>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>







<div className={classNames(classes.main, classes.mainRaised)}>



<WhatIsTOP/>

<MainDescription/>

<GrayCenterTextDiv 
divnumber = "first" 
title = "TOP Chain Features" 
subtitle = "TOP Chain Is A Blazing Fast and Completely Permisionless Public Chain With Carefully Crafted Token Economics"/>

<TopChainFeatures/>

<GrayCenterTextDiv  
divnumber = "second" 
title = "Solving The Blockchain Scalability Trilemma" 
subtitle = "TOP Network overcomes the blockchain scalability trilemma through innovative comprehensive horizontal scale-out techniques"/>

<TrilemmaTech/>

<GrayCenterTextDiv 
divnumber = "third" 
title = "TOP Network Service Layer" 
subtitle = "Services For Simple, Flexible, and Scalable DApp Development"/>
       
<SmartContractDiv/>



<PictureDiv 
title = "Full-Stack Decentralized Cloud Communications Services" 
subtitle = "TOP Also Provides An Open, Full-Stack Decentralized Communications Mesh Network, Allowing Developers To Easily Integrate Low-Cost Communications Functions Into Their Apps"/>

<CommunicationsServices/>


<ScrollAnimation animateIn="fadeInUp">
    <div style = {{textAlign: "center", paddingTop: "300px", paddingBottom: "100px"}}>
        <h1 className = "center"> Latest News </h1>
    </div>
</ScrollAnimation>


<SectionCarousel />

</div>


<Footer />


</div>
    );
  }
}

export default withStyles(componentsStyle)(Components);
