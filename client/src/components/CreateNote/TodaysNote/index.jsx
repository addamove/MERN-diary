import React, { Component } from 'react';
import { connect } from 'react-redux';

import dayjs from 'dayjs';

import Note from '../../Note';

import { fetchNotes } from '../../../store/actions/';

class TodaysNote extends Component {
  componentDidMount() {
    this.props.fetchNotes();
  }

  render() {
    let note = {
      text: '',
      date: '',
    };
    // get today note info
    const today = dayjs().format('dddd DD - MM - YYYY ');
    if (this.props.notes.length > 0) {
      note = this.props.notes.find(note => note.date === today);
    }
    return <Note id="now" date="Today" text={note.text} />;
  }
}

function mapStateToProps({ notes }) {
  return { notes };
}

export default connect(mapStateToProps, { fetchNotes })(TodaysNote);
