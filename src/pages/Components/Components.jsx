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
import Button from "components/CustomButtons/Button.jsx";
import Parallax from "components/Parallax/Parallax.jsx";
// sections for this page
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import SectionCarousel from "./Sections/SectionCarousel.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import "./comp.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";





class Components extends React.Component {


scrollEvent = () => {



}


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
                  <h6 className={classes.title} id="scale" >TOP Network</h6>
                  <h3 className={classes.subtitle} id="scale" >A High-Performance Public Blockchain Platform and Decentralized Communications Infrastructure
                  </h3>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>

        <div className={classNames(classes.main, classes.mainRaised)}>


          <div className = "center-div">
          <ScrollAnimation animateIn="fadeInUp"  animateOut="fadeOut" animatePreScroll = "false">
          <h1 className = "centerTitle"> TOP Chain is a full-state sharded public chain that can support real-world applications </h1>
          <h3 className = "centerSubTitle"> TOP Network overcomes the blockchain scalability trilemma through innovative scaling techniques, including full-state sharding </h3>
          </ScrollAnimation>

          </div>
          <ScrollAnimation animateIn="fadeInRight">

          <div className = "left-div">


          <img className = "img2" src = {require("assets/img/layerscaling1.png")} />
          <div className = "description-div">
            <h1 className = "maindescription"> Multi-Layer Scaling</h1>
            <h3 className = "subdescription"> Layer-0: Gossip Based p2p Overlay Network </h3>
            <h3 className = "subdescription"> Layer-1: State, Compute, Network Sharding </h3>
            <h3 className = "subdescription"> Layer-2: State-Channels, Service Chains</h3>

          </div>

          </div>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" >

          <div className = "left-div">


          <div className = "description-div">
            <h1 className = "maindescription"> Multi-Level Sharding</h1>
            <h3 className = "subdescription"> Two-Layer State Sharding  </h3>
            <h3 className = "subdescription"> Three-Layer Compute Sharding </h3>
            <h3 className = "subdescription"> Three-Layer Network Sharding</h3>

          </div>
          <img className = "img2" src = {require("assets/img/shardingmulti.png")} />


          </div>
          </ScrollAnimation>



          


          <ScrollAnimation animateIn="fadeInRight">

<div className = "left-div">

<img className = "img2" src = {require("assets/img/lattice1.png")} />

<div className = "description-div">
  <h1 className = "maindescription">DAG-Based Lattice Data Structure </h1>
  <h3 className = "subdescription"> Unit-Lattice: Parallel Consensus On Account Chains</h3>
  <h3 className = "subdescription"> Block-Lattice: Shard Synchronization </h3>

</div>


</div>
</ScrollAnimation>


      

          {/* 
          A picture of the images in text instead of seperate components. Scales better on mobile
          <div className = "center-div">

         <img className = "img1" src = {require("assets/img/tech.png")} />
      
          </div>
          */}


            <div className = "center-div1">
          <ScrollAnimation animateIn="fadeInUp"  animateOut="fadeOut" animatePreScroll = "false">
          <h1 className = "centerTitle"> TOP Network Features </h1>
          </ScrollAnimation>

          </div>

          <div className = "featureWrap">

          <div className = "features">
          <ScrollAnimation animateIn="fadeInUp">
          <SmallCard>Zero Gas Fees </SmallCard>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay ="200">

            <SmallCard >Zero Gas Fees </SmallCard>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay ="400">

            <SmallCard>Zero Gas Fees </SmallCard>
            </ScrollAnimation>

          </div>

          <div className = "features">
          <ScrollAnimation animateIn="fadeInUp">
          <SmallCard>Zero Gas Fees </SmallCard>
          </ScrollAnimation>
          <ScrollAnimation animateIn="fadeInUp" delay ="200">

            <SmallCard >Zero Gas Fees </SmallCard>
            </ScrollAnimation>
            <ScrollAnimation animateIn="fadeInUp" delay ="400">

            <SmallCard>Zero Gas Fees </SmallCard>
            </ScrollAnimation>

            
          </div>

          </div>

          <ScrollAnimation animateIn="fadeInUp">

          <div className = "center-div">

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
