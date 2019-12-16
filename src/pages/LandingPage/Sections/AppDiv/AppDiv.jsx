import React from "react";

import styles from "./AppDiv.module.css"
import image1 from "../../../../assets/img/wallet.png"
import image2 from "../../../../assets/img/bitvpn1.png"
import image3 from "../../../../assets/img/exchange1.jpg"



import "animate.css/animate.min.css";
import ScrollAnimation from 'react-animate-on-scroll';



const AppDiv = (props) =>  {





        return (

         
            <div className = {styles.Wrapper}>

                <ScrollAnimation  className = {styles.flexItem} animateIn="fadeInUp"  animatePreScroll = "false"  >
                <img alt = "" src = {image1} className = {styles.Content}/>
                <h1 className = {styles.Title} > HiWallet </h1>
                <h3 className =  {styles.SubTitle} > Secure Multi-Chain Ecosystem Wallet  </h3>         
                </ScrollAnimation> 

                <ScrollAnimation className = {styles.flexItem} animateIn="fadeInUp"  animatePreScroll = "false" delay ="200">
                <img alt = "" src = {image2} className = {styles.Content}/>
                <h1 className = {styles.Title} > BitVPN </h1>
                <h3 className =  {styles.SubTitle} >The First Decentralized VPN  </h3>         
                </ScrollAnimation> 

                <ScrollAnimation className = {styles.flexItem} animateIn="fadeInUp"  animatePreScroll = "false" delay ="400">
                <img alt = "" src = {image3} className = {styles.Content}/>
                <h1 className = {styles.Title} > FlashEx </h1>
                <h3 className =  {styles.SubTitle} > Secure Ecosystem Exchange  </h3>         
                </ScrollAnimation> 


              
          
                   
          
          </div>

        )




}



export default (AppDiv);
