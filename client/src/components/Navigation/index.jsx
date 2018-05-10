import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import { connect } from 'react-redux';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import IconButton from 'material-ui/IconButton';
import Icon from 'material-ui/Icon';
import LinkButton from '../LinkButton';

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

class Navigation extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return null;
      case false:
        return (
          <Button href="/auth/google" color="inherit">
            Login With Google
          </Button>
        );
      default:
        return [
          <LinkButton to="/create" key="112324" color="inherit">
            Create Note
          </LinkButton>,
          <LinkButton to="/AllNotes" key="124" color="inherit">
            All Notes
          </LinkButton>,
          <LinkButton key="3124" color="inherit">
            Export
          </LinkButton>,
          <LinkButton key="12412" href="/api/logout" color="inherit">
            Logout
          </LinkButton>,
        ];
    }
  }

  render() {
    const { classes } = this.props;
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
            {this.renderContent()}
          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

Navigation.propTypes = {
  classes: PropTypes.obj,
};

function mapStateToProps({ auth }) {
  return { auth };
}

export default connect(mapStateToProps)(withStyles(styles)(Navigation));
