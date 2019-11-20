/*eslint-disable*/
import React from "react";
// react components for routing our app without refresh
import { Link } from "gatsby";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Tooltip from "@material-ui/core/Tooltip";

// @material-ui/icons
import { Apps, CloudDownload } from "@material-ui/icons";

// React icons
import { FaTwitter } from 'react-icons/fa';

// core components
import CustomDropdown from "components/CustomDropdown/CustomDropdown.jsx";
import Button from "components/CustomButtons/Button.jsx";

import headerLinksStyle from "assets/jss/material-kit-react/components/headerLinksStyle.jsx";

function HeaderLinks({ ...props }) {
  const { classes } = props;
  return (
    <List className={classes.list}>
      <ListItem className={classes.listItem}>
        <CustomDropdown
          noLiPadding
          buttonText="About"
          buttonProps={{
            className: classes.navLink,
            color: "transparent"
          }}
          buttonIcon={Apps}
          dropdownList={[
            <Link to="/" className={classes.dropdownLink}>
              Team
            </Link>,
             <Link to="/" className={classes.dropdownLink}>
             Ambassedors
           </Link>
           
          ]}
        />
      </ListItem>
      <ListItem className={classes.listItem}>
        <Button
          href="https://www.topnetwork.org/whitepaper"
          color="transparent"
          target="_blank"
          className={classes.navLink}
        >
          <CloudDownload className={classes.icons} /> Whitepaper
        </Button>
      </ListItem>
      

      <ListItem className={classes.listItem}>
      <Button
            href="https://www.hiwallet.org/"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
          Wallet
            </Button>

      </ListItem>

      <ListItem className={classes.listItem}>
      <Button
            href="https://www.topnetwork.org/swap"
            target="_blank"
            color="transparent"
            className={classes.navLink}
          >
          Swap
            </Button>

      </ListItem>

      
     
  
    </List>
  );
}

export default withStyles(headerLinksStyle)(HeaderLinks);
