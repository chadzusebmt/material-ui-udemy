import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, Menu, MenuItem, Tab, Tabs, Typography } from '@material-ui/core';
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

function Header(props) {
  const classes = useStyles();

  const [value, setValue] = useState(0);

  // for the dropdown
  const [anchorEl, setAnchorEl] = useState(null);
  const [open, setOpen] = useState(false);

  const handleChange = (e, value) => setValue(value);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  // this persist the tab to be hilighted even if the user refresh the page
  useEffect(() => {
    if (window.location.pathname === '/' && value !== 0) {
      setValue(0);
    } else if (window.location.pathname === '/services' && value !== 1) {
      setValue(1);
    } else if (window.location.pathname === '/revolution' && value !== 2) {
      setValue(2);
    } else if (window.location.pathname === '/about' && value !== 3) {
      setValue(3);
    } else if (window.location.pathname === '/contact' && value !== 4) {
      setValue(4);
    } else if (window.location.pathname === '/estimate' && value !== 5) {
      setValue(5);
    }
  }, [value]);

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disbaleGutters>
            <Typography variant="h3" color="secondary">
              <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                Logo
              </Button>
            </Typography>

            <Tabs value={value} onChange={handleChange} className={classes.tabContainer} indicatorColor="primary">
              <Tab label="Home" className={classes.tab} component={Link} to="/" />
              <Tab
                aria-owns={anchorEl ? 'simple-menu' : undefined}
                aria-haspopup={anchorEl ? 'true' : undefined}
                onMouseOver={(event) => handleClick(event)}
                label="Services"
                className={classes.tab}
                component={Link}
                to="/services"
              />
              <Tab label="The revolution" className={classes.tab} component={Link} to="/revolution" />
              <Tab label="About Us" className={classes.tab} component={Link} to="/about" />
              <Tab label="Contact Us" className={classes.tab} component={Link} to="/contact" />
            </Tabs>

            <Button variant="contained" color="secondary" className={classes.button} component={Link} to="/estimate">
              Free Estimate
            </Button>

            <Menu id="simple-menu" anchorEl={anchorEl} open={open} onClose={handleClose} MenuListProps={{ onMouseLeave: handleClose }}>
              <MenuItem onClick={handleClose}>Custom Software Development</MenuItem>
              <MenuItem onClick={handleClose}>Mobile App Development </MenuItem>
              <MenuItem onClick={handleClose}>Website Development</MenuItem>
            </Menu>
          </Toolbar>
        </AppBar>
      </ElevationScroll>
      <div className={classes.toolbarMargin} />
    </React.Fragment>
  );
}

export default Header;

//* Styles
const useStyles = makeStyles((theme) => ({
  //this will access the margin from the material theme and apply it on the toolbar
  toolbarMargin: {
    ...theme.mixins.toolbar
  },
  tabContainer: {
    marginLeft: 'auto'
  },
  logoContainer: {
    padding: 0,
    // this will remove the opacity when you hover on the button
    '&:hover': {
      backgroundColor: 'transparent'
    }
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
