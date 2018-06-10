import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import nodes from 'app/redux/reducers/nodes';
import wallet from 'app/redux/reducers/wallet';

export default function createReducer(asyncReducers) {
  return combineReducers({
    form,
    nodes,
    wallet,
    ...asyncReducers,
  });
}
