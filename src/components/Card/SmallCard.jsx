import React from "react";

import styles from "./SmallCardStyles.module.css"

const smallcard = (props) => {


   /*  const styles = {

        wrapper: {
        boxShadow: "4px 5px 4px #000000",
        transition: "0.3s",
        borderRadius: "15px", 
        color: "black",
        backgroundColor: "white",
        width: "22vw",
        height: "25vh",
        marginLeft: "10px",
        textAlign: "center"
        },

        contents: {
        display: "inline-flex",
        marginTop: "10%"



        }

    } */

    let img2 = props.imgURL
    

    return (


        <div className = {styles.wrapper} style = {{margin: props.margin + "px", color: props.color, float: props.float}}>

        <div className = {styles.contents}   >
         <img alt = "" className = {styles.icon} src = {require("../../assets/img" + img2)} />  
    
    
            <h2> {props.title} </h2>
            <h3> {props.subtitle} </h3>
        </div>
        </div>


    )


}



export default smallcard