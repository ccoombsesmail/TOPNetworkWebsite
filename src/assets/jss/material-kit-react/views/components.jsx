import { container } from "assets/jss/material-kit-react.jsx";

const componentsStyle = {
  container,
  brand: {
    color: "#FFFFFF",
    textAlign: "left",

  },
  title: {
    fontWeight: "600",
    margin: "-10px 10% 0",
    display: "inline-block",
    position: "relative",
    fontSize: "4.0rem",
    color: "#191E26"
  },


  subtitle: {
    fontSize: "1.313rem",
    margin: "10px 10% 0",
    width: "400px", 
    color: "#191E26"


  },

  logo: {

    width: "20px",
  },
  main: {
    background: "#FFFFFF",
    position: "relative",
    zIndex: "3"
  },
  mainRaised: {
    margin: "-60px 30px 0px",
    borderRadius: "6px",
    boxShadow:
      "0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2)",
      

  "@media (max-width: 768px)": {
    margin: "-10px 10px 0px",
  },
  },
  link: {
    textDecoration: "none"
  },
  textCenter: {
    textAlign: "center"
  }
};

export default componentsStyle;
