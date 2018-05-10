import React, { Component } from 'react';
import { connect } from 'react-redux';

import Grid from 'material-ui/Grid';

import Note from '../Note';

import { fetchNotes } from '../../store/actions/';

class AllNotes extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  renderCards() {
    let id;
    return this.props.notes
      .map((note) => {
        const { text, date } = note;
        id += 1;
        return (
          <Grid item xs={12} md={4} zeroMinWidth>
            <br />
            <Note id={id} date={date} text={text} />
          </Grid>
        );
      })
      .reverse();
  }

  render() {
    return (
      <div
        style={{
          margin: '0 5%',
        }}
      >
        <Grid container spacing={24} justify="space-around">
          {this.renderCards()}
        </Grid>
      </div>
    );
  }
}

function mapStateToProps({ notes }) {
  return { notes };
}

export default connect(mapStateToProps, { fetchNotes })(AllNotes);
