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
import "./comp.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";
import MainDescription from "./Sections/MainDescription.jsx"
import TrilemmaTech from "./Sections/TrilemmaTech"





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
      <ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
        <h1 className = "centerTitle"> What Is TOP Network? </h1>
        <h3 className = "centerSubTitle"> TOP Network Is A Full-Stack Blockchain Platform Consisting of Three Comprehensive Layers That Together Can Support The Development and Operation of Real-World Decentralized Applications </h3>
      </ScrollAnimation>
</div>



<MainDescription/>




          
<div className = "center-div1">

  <ScrollAnimation animateIn="fadeInUp"  animateOut="fadeOut" animatePreScroll = "false">
    <h1 className = "centerTitle" style = {{color: "white"}}> TOP Chain Features </h1>
    <h3 className = "centerSubTitle" style = {{color: "white"}}> TOP Chain Is A Blazing Fast and Completely Permisionless Public Chain With Carefully Crafted Token Economics  </h3>         

  </ScrollAnimation>
         

</div>




<div className = "featureWrap">

  <div className = "features">
    <ScrollAnimation animateIn="fadeInUp">
    <SmallCard title = "Zero Gas Fees" subtitle = "Friendly Token Economics For Users and Developers" imgURL = "/gas.png"  /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInUp" delay ="200" >
    <SmallCard imgURL = "/time.png"  title = "Near Instant Finality" subtitle = "Transactions Confirmed in 1-3 Seconds" /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInUp" delay ="400">
    <SmallCard title = "High Throughput" subtitle = "> 10,000 TPS" imgURL = "/exchange.png" />
    </ScrollAnimation>

  </div>

  <div className = "features">

    <ScrollAnimation animateIn="fadeInUp">
    <SmallCard title = "Decentralized" subtitle = "TOP Chain is Completely Permisionless" imgURL = "/nodes.png"/>
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInUp" delay ="200">
    <SmallCard title = "Smart-Contracts" subtitle = "Scalable Platform and Application Layer Smart-Contracts" imgURL = "/smart.png"/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInUp" delay ="400">
    <SmallCard title = "Multi-Chain" subtitle = "Pluggable Service Chains For Any Workflow" imgURL = "/blockchain.png" />
    </ScrollAnimation>

  </div>

</div>

<div className = "center-div1"  style = {{marginTop: "100px"}}>
<ScrollAnimation animateIn="fadeInUp"  animatePreScroll = "false">
  
  <h1 className = "centerTitle" style = {{color: "white"}}> Solving The Blockchain Scalability Trilemma </h1>

  <h3 className = "centerSubTitle" style = {{color: "white"}}> TOP Network overcomes the blockchain scalability trilemma through innovative comprehensive horizontal scale-out techniques </h3>

  </ScrollAnimation>


</div>


<TrilemmaTech/>

        
<div className = "center-div3">

  <ScrollAnimation animateIn="fadeInUp"  animateOut="fadeOut" animatePreScroll = "false">
  <h1 className = "centerTitle" style = {{color: "white"}}> TOP Network Service Layer </h1>
  <h3 className = "centerSubTitle" style = {{color: "white"}}> Services For Simple, Flexible, and Scalable DApp Development </h3>    

  </ScrollAnimation>
         

</div>
<div className = "contract-div">
<img alt = "" className = "contract-pic" src = {require("../../assets/img/contract.png")}/>

  <div  id = "featureWrapContract" className = "featureWrap">

  <div className = "features">
    <ScrollAnimation animateIn="fadeInUp">
    <SmallCard  title = "Platform Contracts" subtitle = "Extremely Secure Platform Level Contracts For Value Transfer" imgURL = "/smart.png"  /> 
    </ScrollAnimation>



    <ScrollAnimation animateIn="fadeInUp" delay ="400">
    <SmallCard title = "Application Contracts" subtitle = "Flexible and Secure Application Layer Contracts For Complex Business Logic" imgURL = "/smartphone.png" />
    </ScrollAnimation>

  </div>
  </div>

</div>



<ScrollAnimation animateIn="fadeInUp"   duration = "2" >
<div className = "center-div2">
  
<ScrollAnimation animateIn="fadeInUp"  duration = "2" >

  <h1 className = "centerTitle" style = {{color: "white"}}> Full-Stack Decentralized Cloud Communications Services </h1>
  <h3 className = "centerSubTitle" style = {{color: "white"}}> TOP Also Provides An Open, Full-Stack Decentralized Communications Mesh Network, Allowing Developers To Easily Integrate Low-Cost Communications Functions Into Their Apps</h3>    
     
  </ScrollAnimation>

</div>
</ScrollAnimation>


<div className = "featureWrap">

  <div className = "features">
    <ScrollAnimation animateIn="fadeInLeft" duration = "2" delay = "400">
    <SmallCard title = "Virtual Private Network" subtitle = "No Centralized Servers" imgURL = "/vpn.png"  /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInLeft" delay ="200" duration = "2" >
    <SmallCard imgURL = "/call.png"  title = "VoIP" subtitle = "Low-Cost Internet Calling" /> 
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInRight" delay ="400" duration = "2">
    <SmallCard title = "Video Calling" subtitle = "Low-Cost Video Chat" imgURL = "/video.png" />
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInRight" delay ="400" duration = "2" delay = "400">
    <SmallCard title = "IoT Data Sharing" subtitle = "Decentralized Edge Computing and Data Transfer" imgURL = "/iot.png" />
    </ScrollAnimation>

  </div>

  <div className = "features">

    <ScrollAnimation animateIn="fadeInLeft" delay = "400"  duration = "2">
    <SmallCard title = "Storage" subtitle = "Decentralized Storage Network" imgURL = "/cloud.png"/>
    </ScrollAnimation>


    <ScrollAnimation animateIn="fadeInLeft"  duration = "2" >
    <SmallCard title = "Chat" subtitle = "Decentralized Messaging" imgURL = "/chat.png"/>
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInRight"   duration = "2">
    <SmallCard title = "CDN" subtitle = "Fast and Efficient Content Distribution Network" imgURL = "/network.png" />
    </ScrollAnimation>

    <ScrollAnimation animateIn="fadeInRight" delay ="400"  duration = "2">
    <SmallCard title = "Live-Streaming" subtitle = "Decentralized Live-Stream Service" imgURL = "/live.png" />
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
