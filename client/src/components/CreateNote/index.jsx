import React from 'react';
import TextField from 'material-ui/TextField';
import Grid from 'material-ui/Grid';
import Card, { CardActions, CardContent } from 'material-ui/Card';

function CustomizedInputs(props) {
  return (
    <div>
      <Grid container spacing={24} justify="center">
        <Grid item xs={3}>
          <Card>
            <CardContent>
              <TextField label="Create your note" multiline rows="12" fullWidth margin="normal" />
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </div>
  );
}

export default CustomizedInputs;
