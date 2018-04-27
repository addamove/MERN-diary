import { combineReducers } from 'redux';
import auth from './authReducer';
import notes from './notesReducer';

const App = combineReducers({
  auth,
  notes,
});

export default App;
