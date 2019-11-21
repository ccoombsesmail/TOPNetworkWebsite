import React from "react";
// react component for creating beautiful carousel
// @material-ui/core components
// @material-ui/icons

import "../comp.css"
import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



class TrilemmaTech extends React.Component {


    render() {



        return (

<div>
            <ScrollAnimation animateIn="fadeInRight">
            <div className = "left-div">
            <img alt = "" className = "img2" src = {require("assets/img/layerscaling1.png")} />
            <div className = "description-div">
              <h1 className = "maindescription"> Multi-Layer Scaling</h1>
              <h3 className = "subdescription"> Layer-0: Gossip Based p2p Overlay Network </h3>
              <h3 className = "subdescription"> Layer-1: State, Compute, Network Sharding </h3>
              <h3 className = "subdescription"> Layer-2: State-Channels, Service Chains</h3>
  
            </div>
            </div>
            </ScrollAnimation>



<ScrollAnimation animateIn = "fadeInLeft">
<div className = "left-div">
<div className = "description-div2">
  <h1 className = "maindescription"> Multi-Level Sharding</h1>
  <h3 className = "subdescription"> Two-Layer State Sharding  </h3>
  <h3 className = "subdescription"> Three-Layer Compute Sharding </h3>
  <h3 className = "subdescription"> Three-Layer Network Sharding</h3>
</div>
<img alt = "" className = "img2" src = {require("assets/img/shardingmulti.png")} />
</div>

</ScrollAnimation>




            <ScrollAnimation animateIn="fadeInRight">
  
  <div className = "left-div">
  
  <img alt = "" className = "img2" src = {require("assets/img/lattice1.png")} />
  
  <div className = "description-div">
    <h1 className = "maindescription">DAG-Based Lattice Data Structure </h1>
    <h3 className = "subdescription"> Unit-Lattice: Parallel Consensus On Account Chains</h3>
    <h3 className = "subdescription"> Block-Lattice: Shard Synchronization </h3>
  
  </div>
  </div>
  </ScrollAnimation>
  
  </div>
        )


    }


    






}



export default (TrilemmaTech);
