import React, { Component } from 'react';
import { connect } from 'react-redux';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

import { fetchNotes } from '../../store/actions/';

class AllNotes extends Component {
  //   constructor(props) {
  //     super(props);

  //     this.state = {
  //       Cards: undefined,
  //     };
  //   }

  componentDidMount() {
    this.props.fetchNotes();
  }

  renderCards() {
    let key;
    return this.props.notes.map((note) => {
      const { text, date } = note;
      key += 1;
      return (
        <Grid item xs={12} md={4} zeroMinWidth>
          <br />
          <Card key={key}>
            <CardContent>
              <Typography gutterBottom variant="headline" component="h2">
                {date}
              </Typography>
              <Typography component="p">{`${text.substring(0, 800)}..`}</Typography>
            </CardContent>
            <CardActions>
              <Grid container spacing={8} justify="space-around">
                <Grid item md={3}>
                  <Button size="small">Edit</Button>
                </Grid>
                <Grid item md={3}>
                  <Button size="small">Delete</Button>
                </Grid>
                <Grid item md={3}>
                  <Button size="small">Expand</Button>
                </Grid>
              </Grid>
            </CardActions>
          </Card>
        </Grid>
      );
    });
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
