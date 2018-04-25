import { combineReducers } from 'redux';
import auth from './authReducer';

const App = combineReducers({
  auth,
});

export default App;
