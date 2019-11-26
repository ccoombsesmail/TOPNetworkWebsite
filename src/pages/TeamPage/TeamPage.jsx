import React from "react";
import classNames from "classnames";

import { withStyles } from "@material-ui/core/styles";
import styles from "../../assets/jss/material-kit-react/views/componentsSections/teamImagesStyle.jsx";
import componentsStyle from "assets/jss/material-kit-react/views/components.jsx";
import "./TeamPage.css"

import Header from "components/Header/Header.jsx";
import HeaderLinks from "components/Header/HeaderLinks.jsx";
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import image from "../../assets/img/blockchain.png"
import Parallax from "components/Parallax/Parallax.jsx";
import ScrollAnimation from 'react-animate-on-scroll';




class TeamPage extends React.Component {

render() {


    const {classes} = this.props
      return (

        <div style = {{backgroundColor: "white"}}>
          <Header
            brand="TOP Network"
            rightLinks={<HeaderLinks />}
            fixed
            color="black"
            changeColorOnScroll={{
              height: 700,
              color: "black"
            }}
        
          />

<Parallax image={require("assets/img/team1.jpg")}>
          <div className={classes.container} >
            <GridContainer>
              <GridItem>
                <div className={classes.brand}>
                <ScrollAnimation animateIn="fadeIn">

                    <h1 className={classes.title}  >TOP Network Team</h1>
                    <h3 className={classes.subtitle} >A World-Class Development Team </h3>

</ScrollAnimation>
                </div>
              </GridItem>
            </GridContainer>
          </div>
        </Parallax>



        <div className={classNames(classes.main, classes.mainRaised)}>




        <GridContainer style = {{marginTop: "600px", marginLeft: "200px",  width: "80%"}}>
            <GridItem xs={12} sm={2}>
              
              <img
                src={image}
                alt="..."
                className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid                }
              />
              <h4>Steve Image</h4>
            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={image}
                alt="..."
                className={
                    classes.imgRaised +
                    " " +
                    classes.imgRoundedCircle +
                    " " +
                    classes.imgFluid                }
              />
             <h4>Noah Image</h4>

            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />

                <h4>Taylor Image</h4>

            </GridItem>
            <GridItem xs={12} sm={2} className={classes.marginLeft}>
              <img
                src={image}
                alt="..."
                className={
                  classes.imgRaised +
                  " " +
                  classes.imgRoundedCircle +
                  " " +
                  classes.imgFluid
                }
              />

                <h4>Peter Image</h4>

            </GridItem>
          </GridContainer>

          </div>

          </div>
            )

        }

}


export default withStyles(styles, componentsStyle)(TeamPage)

