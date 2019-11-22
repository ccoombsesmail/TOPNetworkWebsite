import React from "react";


import "../Components.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



class CommunicationsServices extends React.Component {


    render() {



        return (


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
          
              <ScrollAnimation animateIn="fadeInRight" delay ="400" duration = "2" >
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
          
        )


    }


    






}



export default (CommunicationsServices);
