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
  const [selectedIndex, setSelectedIndex] = useState(0);

  const handleChange = (e, value) => setValue(value);

  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
    setOpen(true);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
    setOpen(false);
  };

  const handleMenuClick = (e, i) => {
    setAnchorEl(null);
    setOpen(false);
    setSelectedIndex(i);
  };

  const menuOptions = [
    {
      name: 'Services',
      link: '/services'
    },
    {
      name: 'Custom software developement',
      link: '/customsoftware'
    },
    {
      name: 'Mobile App Development',
      link: '/mobileapps'
    },
    {
      name: 'Website Developement',
      link: '/websites'
    },
    {
      name: 'Revolution ',
      link: '/revolution'
    },
    {
      name: 'About Us',
      link: '/about'
    },
    {
      name: 'Contact Us',
      link: '/contact'
    },
    {
      name: 'Estimate',
      link: '/estimate'
    }
  ];

  // this persist the tab to be hilighted even if the user refresh the page
  useEffect(() => {
    // if (window.location.pathname === '/' && value !== 0) {
    //   setValue(0);
    // } else if (window.location.pathname === '/services' && value !== 1) {
    //   setValue(1);
    // } else if (window.location.pathname === '/revolution' && value !== 2) {
    //   setValue(2);
    // } else if (window.location.pathname === '/about' && value !== 3) {
    //   setValue(3);
    // } else if (window.location.pathname === '/contact' && value !== 4) {
    //   setValue(4);
    // } else if (window.location.pathname === '/estimate' && value !== 5) {
    //   setValue(5);
    // }

    switch (window.location.pathname) {
      case '/':
        if (value !== 0) {
          setValue(0);
        }
      case '/services':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(0);
        }
        break;
      case '/customsoftware':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(1);
        }
        break;
      case '/mobileapps':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(2);
        }
        break;
      case '/websites':
        if (value !== 1) {
          setValue(1);
          setSelectedIndex(3);
        }
        break;
      case '/revolution':
        if (value !== 2) {
          setValue(2);
        }
        break;
      case '/about':
        if (value !== 3) {
          setValue(3);
        }
        break;
      case '/contact':
        if (value !== 4) {
          setValue(4);
        }
        break;
      case '/estimate':
        if (value !== 5) {
          setValue(5);
        }
        break;
      default:
        break;
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

            <Menu
              id="simple-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{ onMouseLeave: handleClose }}
              classes={{ paper: classes.menu }}
              elevation={0}
            >
              {menuOptions.map((option, i) => (
                <MenuItem
                  key={option}
                  component={Link}
                  to={option.link}
                  classes={{ root: classes.menu }}
                  onClick={(e) => {
                    handleMenuClick(e);
                    setValue(1);
                    handleClose();
                  }}
                  selected={i === selectedIndex && value === 1}
                >
                  {option.name}
                </MenuItem>
              ))}
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
  },
  menu: {
    backgroundColor: '#0B72B9',
    color: 'white',
    borderRadius: '0px'
  }
}));
