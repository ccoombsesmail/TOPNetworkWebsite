import React from "react";



const smallcard = (props) => {


    const styles = {

        boxShadow: "4px 5px 4px #000000",
        transition: "0.3s",
        borderRadius: "15px", 
        color: "black",
        backgroundColor: "#F8CF03",
        width: "22vw",
        height: "25vh",
        marginLeft: "10px",

    }

    return (

        <div style = {styles}>
        {props.children}
        </div>


    )


}



export default smallcard