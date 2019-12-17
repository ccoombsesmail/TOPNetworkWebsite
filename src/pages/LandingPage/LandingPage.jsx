import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// react components for routing our app without refresh
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import "./LandingPage.css"
import "animate.css/animate.min.css";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";

import Header from "components/Header/Header.jsx";
import Footer from "components/Footer/Footer.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
import ScrollAnimation from 'react-animate-on-scroll';


// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import MainDescription from "./Sections/MainDescription/MainDescription.jsx";
import WhatIsTOP from "./Sections/WhatIsTOP/WhatIsTOP.jsx";
import HeaderDiv1 from "./Sections/HeaderDiv1/HeaderDiv1.jsx";
import HeaderDiv2 from "./Sections/HeaderDiv2/HeaderDiv2.jsx";
import HeaderDiv3 from "./Sections/HeaderDiv3/HeaderDiv3.jsx";
import AppDiv from "./Sections/AppDiv/AppDiv.jsx";
import ServiceFrameworks from "./Sections/ServiceFrameworks/ServiceFrameworks.jsx"
import TopChainFeatures from "./Sections/TopChainFeatures/TopChainFeatures.jsx";
import SmartContractDiv from "./Sections/SmartContractDiv/SmartContractDiv.jsx";






class LandingPage extends React.Component {




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
            height: 700,
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
                  <h3 className={classes.subtitle} >A High-Performance Public Blockchain Platform and Decentralized Application Development Framework </h3>

                  </ScrollAnimation>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>







<div className={classNames(classes.main, classes.mainRaised)}>



<WhatIsTOP/>
<MainDescription/> { /* Infrastructure/Services/App Ecosystem */ }
<HeaderDiv1/> { /* Next-Generation Blockchain Infrastructure */ }
<TopChainFeatures />
<HeaderDiv2/> { /* TOP Network Service Layer */ }
<SmartContractDiv/>
<ServiceFrameworks/> { /* Industry Specific Frameworks */ }
<HeaderDiv3/> { /* Application Ecosystem */ } 
<AppDiv/> { /* HiWallet, BitVPN etc.*/ }
<SectionCarousel />

</div>


<Footer />


</div>
    );
  }
}

export default withStyles(componentsStyle)(LandingPage);
