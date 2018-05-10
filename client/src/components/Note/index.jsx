import React from 'react';

import Card, { CardActions, CardContent } from 'material-ui/Card';
import Typography from 'material-ui/Typography';
import Button from 'material-ui/Button';
import Grid from 'material-ui/Grid';

const Note = props => (
  <Card key={props.id}>
    <CardContent>
      <Typography gutterBottom variant="headline" component="h2">
        {props.date}
      </Typography>
      <Typography component="p">{`${props.text.substring(0, 800)}..`}</Typography>
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
);

export default Note;
