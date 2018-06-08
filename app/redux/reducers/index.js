import { combineReducers } from 'redux';
import nodes from 'app/redux/reducers/nodes';
import wallet from 'app/redux/reducers/wallet';

export default function createReducer(asyncReducers) {
  return combineReducers({
    nodes,
    wallet,
    ...asyncReducers,
  });
}
