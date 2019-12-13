import React from "react";
// react component for creating beautiful carousel
import Carousel from "react-slick";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// @material-ui/icons
// core components
import GridContainer from "components/Grid/GridContainer.jsx";
import GridItem from "components/Grid/GridItem.jsx";
import Card from "components/Card/Card.jsx";
import carouselStyle from "assets/jss/material-kit-react/views/componentsSections/carouselStyle.jsx";
import image1 from "assets/img/flashex.png";
import image2 from "assets/img/mainlaunch.png";
import image3 from "assets/img/hack.png";
import ScrollAnimation from 'react-animate-on-scroll';

class SectionCarousel extends React.Component {
  render() {
    const { classes } = this.props;
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false
    };
    return (
      <div className={classes.section}>
        <ScrollAnimation animateIn="fadeInUp">
        <div style = {{textAlign: "center", paddingTop: "300px", paddingBottom: "100px", fontSize: "3vw"}}>
        <h1 className = "center"> Latest News </h1>
        </div>
        </ScrollAnimation>
        <div className={classes.container}>
          <GridContainer>
            <GridItem xs={12} sm={12} md={10} className={classes.marginAuto}>
              <Card carousel>
                <Carousel {...settings}>
                  <div>
                    <a href="https://medium.com/top-network/buy-and-lock-top-tokens-for-a-chance-at-a-free-iphone-11-fiat-principle-guaranteed-af3a475df191">
                    <img
                      src={image1}
                      alt="First slide"
                      className="slick-image"
                    />
                     </a>
                  </div>
                  <div>
                    <a href="https://medium.com/@topnetwork/top-network-mainnet-launch-bringing-millions-of-users-to-blockchain-d38769d3a6be">
                    <img
                      src={image2}
                      alt="First slide"
                      className="slick-image"
                    />
                     </a>
                  </div>
                  <div>
                    <a href="https://medium.com/top-network/gear-up-for-hack-to-the-moon-in-prague-to-win-12k-euros-e9d76bb3e6db">
                    <img
                      src={image3}
                      alt="First slide"
                      className="slick-image"
                    />
                     </a>
                  </div>
                </Carousel>
              </Card>
            </GridItem>
          </GridContainer>
        </div>
      </div>
    );
  }
}

export default withStyles(carouselStyle)(SectionCarousel);
