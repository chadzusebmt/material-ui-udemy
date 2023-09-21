import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, Tab, Tabs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

function ElevationScroll(props) {
  const { children } = props;
  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100
  });

  return React.cloneElement(children, {
    elevation: trigger ? 4 : 0
  });
}

const useStyles = makeStyles((theme) => ({
  //this will access the margin from the material theme and apply it on the toolbar
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  tab: {
    ...theme.typography.tab,
    minWidth: 10,
    marginLeft: '25px'
  },
  button: {
    ...theme.typography.estimate,
    borderRadius: '50px',
    marginLeft: '50px',
    marginLeft: '25px',
    height: '45px'
  }
}));

function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);
  const handleChange = (e, value) => setValue(value);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disbaleGutters>
            <Typography variant="h3" color="secondary">
              Logo
            </Typography>

            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
              <Tab label="Home" className={classes.tab} component={Link} to="/" />
              <Tab label="Services" className={classes.tab} component={Link} to="/services" />
              <Tab label="The revolution" className={classes.tab} component={Link} to="/revolution" />
              <Tab label="About Us" className={classes.tab} component={Link} to="/about" />
              <Tab label="Contact Us" className={classes.tab} component={Link} to="/contact" />
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.button}>
              {' '}
              Free Estimate
            </Button>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;
