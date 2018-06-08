import { call, put, takeEvery } from 'redux-saga/effects';
import { GET_NODES_REQUEST } from 'app/redux/constants';
import {
  getNodesSuccess,
  getNodesFailed,
} from 'app/redux/actions/nodes';

import api from 'app/utils/api';

export function* getNodesSaga() {
  try {
    const response = yield call(api.nodes);
    yield put(getNodesSuccess(response));
  } catch (e) {
    yield put(getNodesFailed(e));
  }
}

export default function* () {
  yield takeEvery(GET_NODES_REQUEST, getNodesSaga);
}
