import React from "react";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Typography } from "@material-ui/core";

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


function Header(props) {
  return(
    <ElevationScroll>
       <AppBar position="fixed" color="primary">
         <Toolbar>
          <Typography variant="h3" color="secondary"> Logo </Typography>  
            </Toolbar>
       </AppBar>
    </ElevationScroll>
  )
}

export default Header;
