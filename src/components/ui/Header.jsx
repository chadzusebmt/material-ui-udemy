import React, { useState, useEffect } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { Button, Menu, MenuItem, Tab, Tabs, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';
import { Link } from 'react-router-dom';

// Media query
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

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

  // media query hook
  const theme = useTheme();
  const matches = useMediaQuery(theme.breakpoints.down('md'));
  // end

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

  const tabs = (
    <React.Fragment>
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
    </React.Fragment>
  );

  return (
    <React.Fragment>
      <ElevationScroll>
        <AppBar position="fixed" color="primary">
          <Toolbar disbaleGutters>
            <Typography variant="h3" color="secondary">
              <Button component={Link} to="/" className={classes.logoContainer} onClick={() => setValue(0)} disableRipple>
                <svg className={classes.logo} id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 480 139">
                  <style>{`.st0{fill:none}.st1{fill:#fff}.st2{font-family:Raleway; font-weight:300}.st6{fill:none;stroke:#000;stroke-width:3;stroke-miterlimit:10}`}</style>
                  <path d="M448.07-1l-9.62 17.24-8.36 14.96L369.93 139H-1V-1z" />
                  <path className="st0" d="M-1 139h479.92v.01H-1z" />
                  <text transform="translate(261.994 65.233)" className="st1 st2" fontSize="57">
                    Arc
                  </text>
                  <text transform="translate(17.692 112.015)" className="st1 st2" fontSize="54">
                    Development
                  </text>
                  <path className="st0" d="M382.44 116.43l47.65-85.23 8.36-14.96M369.83 139l-.01.01L362 153" />
                  <path
                    d="M438.76 15.76l-56.42 100.91c-12.52-10.83-20.45-26.82-20.45-44.67 0-32.58 26.42-59 59-59 6.23 0 12.24.97 17.87 2.76z"
                    fill="#0b72b9"
                  />
                  <path d="M479.89 72c0 32.58-26.42 59-59 59-14.73 0-28.21-5.4-38.55-14.33l56.42-100.91c23.85 7.57 41.13 29.89 41.13 56.24z" />
                  <g id="Group_186" transform="translate(30.153 11.413)">
                    <g id="Group_185">
                      <g id="Words">
                        <path id="Path_59" className="st1" d="M405.05 14.4l-.09 80.38-7.67-.01.06-52.25-29.4 52.21-7.94-.01 45.04-80.32z" />
                      </g>
                    </g>
                  </g>
                  <path className="st0" d="M457-17l-8.93 16-9.62 17.24-8.36 14.96L369.93 139l-.01.01L361 155" />
                </svg>
              </Button>
            </Typography>
            {matches ? null : tabs}
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
    ...theme.mixins.toolbar,
    marginBottom: '3em',
    [theme.breakpoints.down('md')]: {
      marginBottom: '2em'
    },
    [theme.breakpoints.down('xs')]: {
      marginBottom: '1.25em'
    }
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
  logo: {
    height: '7em',
    // this means when you switch to the small screen the height will chamge to 4em
    [theme.breakpoints.down('md')]: {
      height: '6em'
    },
    [theme.breakpoints.down('xs')]: {
      height: '5.5em'
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
