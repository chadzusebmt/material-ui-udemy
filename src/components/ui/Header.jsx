import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, Tab, Tabs, Typography } from "@material-ui/core";
import { makeStyles } from '@material-ui/styles';




function ElevationScroll(props){
    const {children} = props;
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
    });

    return React.cloneElement(children, {
        elevation: trigger ? 4 : 0
    })
}


const useStyles = makeStyles(theme => ({
  //this will access the margin from the material theme and apply it on the toolbar
  toolbarMargin:{
    ...theme.mixins.toolbar,
  },
  tabContainer:{
    marginLeft: "auto"
  },
  tab:{
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: "25px",
  }
}));

function Header(props) {
  const classes = useStyles();

  return(
    <React.Fragment>
    <ElevationScroll>
       <AppBar position="fixed" color="primary">
         <Toolbar disbaleGutters>
          <Typography variant="h3" color="secondary"> Logo </Typography>  

          <Tabs className={classes.tabContainer}>
            <Tab label="Home" className={classes.tab}></Tab>
            <Tab label="Services" className={classes.tab}></Tab>
            <Tab label="The revolution" className={classes.tab}></Tab>
            <Tab label="About Us" className={classes.tab}></Tab>
            <Tab label="Contact Us" className={classes.tab}></Tab>
          </Tabs>
        </Toolbar>
       </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin }/>
    </React.Fragment>
  )
}

export default Header;
