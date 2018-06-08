import { combineReducers } from 'redux';
import wallet from 'app/redux/reducers/wallet';

export default function createReducer(asyncReducers) {
  return combineReducers({
    wallet,
    ...asyncReducers,
  });
}
