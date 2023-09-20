import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, Typography } from "@material-ui/core";
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
            </Toolbar>
       </AppBar>
    </ElevationScroll>
    <div className={classes.toolbarMargin }/>
    </React.Fragment>
  )
}

export default Header;
