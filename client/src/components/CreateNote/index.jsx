import React, { Component } from 'react';

import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Card, { CardContent } from 'material-ui/Card';
import Button from 'material-ui/Button';

import axios from 'axios';
import dayjs from 'dayjs';

import TodaysNote from './TodaysNote';

class CreateNote extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      value: event.target.value,
    });
  }

  render() {
    const handleClick = () => {
      if (this.state.value.replace(/\s/g, '') !== '') {
        axios.post('/api/save_note', {
          text: this.state.value,
          date: dayjs().format('dddd DD - MM - YYYY '),
        });
        this.setState({
          value: '',
        });
      }
    };

    return (
      <div>
        <Grid container spacing={24} justify="center">
          <Grid item xs={12} md={8}>
            <TodaysNote />
          </Grid>
          <Grid item xs={10} md={8}>
            <Card>
              <CardContent>
                <TextField
                  value={this.state.value}
                  onChange={this.handleChange}
                  label="Create your note"
                  multiline
                  rows="12"
                  fullWidth
                  margin="normal"
                />
              </CardContent>
            </Card>
            <br />
            <Grid container justify="flex-end">
              <Button onClick={handleClick} variant="raised" size="medium" color="primary">
                Save
              </Button>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default CreateNote;
