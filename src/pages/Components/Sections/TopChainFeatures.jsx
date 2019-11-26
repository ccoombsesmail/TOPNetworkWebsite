import React from "react";


import "../Components.css"
import "../ChainFeatures.css"

import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';
import SmallCard from "components/Card/SmallCard.jsx";



class TopChainFeatures extends React.Component {


    render() {



        return (
        <div> 
          <div className = "chainFeaturesBigScreen">

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

      </div>


      <div className = "chainFeaturesSmallScreen">

            <div className = "featureWrapSmall">

            <div className = "featuresSmall">


              <ScrollAnimation  className = "animate" animateIn="fadeInUp">
              <SmallCard  title = "Zero Gas Fees" subtitle = "Friendly Token Economics For Users and Developers" imgURL = "/gas.png"  /> 
              </ScrollAnimation>
          
          
              <ScrollAnimation className = "animate" animateIn="fadeInUp" delay ="200" >
              <SmallCard imgURL = "/time.png"  title = "Near Instant Finality" subtitle = "Transactions Confirmed in 1-3 Seconds" /> 
              </ScrollAnimation>
          

              </div>



              <div className = "featuresSmall">
              <ScrollAnimation className = "animate"  animateIn="fadeInUp" delay ="400">
              <SmallCard title = "High Throughput" subtitle = "> 10,000 TPS" imgURL = "/exchange.png" />
              </ScrollAnimation>
          
          
              <ScrollAnimation className = "animate"  animateIn="fadeInUp">
              <SmallCard title = "Decentralized" subtitle = "TOP Chain is Completely Permisionless" imgURL = "/nodes.png"/>
              </ScrollAnimation>
              </div>



              <div className = "featuresSmall">

              <ScrollAnimation className = "animate"  animateIn="fadeInUp" delay ="200">
              <SmallCard title = "Smart-Contracts" subtitle = "Scalable Platform and Application Layer Smart-Contracts" imgURL = "/smart.png"/>
              </ScrollAnimation>


              <ScrollAnimation className = "animate"  animateIn="fadeInUp" delay ="400" style>
              <SmallCard title = "Multi-Chain" subtitle = "Pluggable Service Chains For Any Workflow" imgURL = "/blockchain.png" />
              </ScrollAnimation>
          
            </div>
          
          </div>

      </div>


    </div>
          
        )


    }


    






}



export default (TopChainFeatures);
