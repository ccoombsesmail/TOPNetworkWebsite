/*eslint-disable*/
import React from "react";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// nodejs library that concatenates classes
import classNames from "classnames";
import { List, ListItem, withStyles } from "@material-ui/core";

// @material-ui/icons

import footerStyle from "assets/jss/material-kit-react/components/footerStyle.jsx";

function Footer({ ...props }) {
  const { classes, whiteFont } = props;
  const footerClasses = classNames({
    [classes.footer]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  const aClasses = classNames({
    [classes.a]: true,
    [classes.footerWhiteFont]: whiteFont
  });
  return (
    <footer className={footerClasses}>
      <div style = {{display: "inline-flex", alignText: "left"}} className={classes.container}>
  


      <List style = {{ display: "inline-block"}}  >  
           <ListItem >
             <a
               href="https://www.creative-tim.com/license"
               className={classes.block}
               target="_blank"
             >
               Licenses
             </a>
           </ListItem>
           <ListItem >
             <a
               href="https://www.creative-tim.com/license"
               className={classes.block}
               target="_blank"
             >
               About
             </a>
           </ListItem>
         </List>

         <List >
             
             <ListItem >
               <a
                 href="https://www.creative-tim.com/license"
                 className={classes.block}
                 target="_blank"
               >
                 Stuff
               </a>
             </ListItem>
             <ListItem >
               <a
                 href="https://www.creative-tim.com/license"
                 className={classes.block}
                 target="_blank"
               >
                 Stuff
               </a>
             </ListItem>
           </List>
           <List >
             
             <ListItem >
               <a
                 href="https://www.creative-tim.com/license"
                 className={classes.block}
                 target="_blank"
               >
                 Things
               </a>
             </ListItem>
             <ListItem >
               <a
                 href="https://www.creative-tim.com/license"
                 className={classes.block}
                 target="_blank"
               >
                 Stuff
               </a>
             </ListItem>
           </List>
      
        
      </div>
    </footer>
  );
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired,
  whiteFont: PropTypes.bool
};

export default withStyles(footerStyle)(Footer);
