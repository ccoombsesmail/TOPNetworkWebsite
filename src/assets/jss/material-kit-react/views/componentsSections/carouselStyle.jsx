
const carouselStyle = {
  section: {
    padding: "70px 0",
    "@media (min-width: 576px)": {
      padding: "0",

    },
  },
  
  container: {
    "@media (min-width: 576px)": {
      maxWidth: "100%"
    },
    "@media (min-width: 768px)": {
      maxWidth: "720px"
    },
    "@media (min-width: 992px)": {
      maxWidth: "960px"
    },
    "@media (min-width: 1200px)": {
      maxWidth: "2140px"
    }
  },
  
  marginAuto: {
    marginLeft: "auto !important",
    marginRight: "auto !important"
  }
 
};

export default carouselStyle;
