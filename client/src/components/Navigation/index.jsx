import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';

const styles = {
  root: {
    flexGrow: 1,
  },
  flex: {
    flex: 1,
    fontSize: 24,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

const Navigation = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton className={classes.menuButton} color="inherit" aria-label="Menu">
            <Icon> home</Icon>
          </IconButton>
          <Typography variant="title" color="inherit" className={classes.flex}>
            Riary
          </Typography>
          <Button href="/auth/google" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
};

Navigation.propTypes = {
  classes: PropTypes.obj,
};

export default withStyles(styles)(Navigation);
