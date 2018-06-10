import { call, put } from 'redux-saga/effects';

import { getNodesSaga } from 'app/redux/sagas/nodes';
import {
  getNodesSuccess,
  getNodesFailed,
} from 'app/redux/actions/nodes';
import {
  getBlocksRequest,
} from 'app/redux/actions/wallet';

import api from 'app/utils/api';

const payload = 'test';

const err = new Error('error');

describe('nodes sagas', () => {
  it('getNodesSaga saga with success', () => {
    const gen = getNodesSaga();
    expect(gen.next().value).toEqual(call(api.nodes));
    expect(gen.next(payload).value).toEqual(put(getNodesSuccess(payload)));
    expect(gen.next().value).toEqual(put(getBlocksRequest()));
    expect(gen.next().done).toEqual(true);
  });
  it('getNodesSaga saga with failure', () => {
    const gen = getNodesSaga();
    expect(gen.next().value).toEqual(call(api.nodes));
    expect(gen.throw(err).value).toEqual(put(getNodesFailed(err)));
    expect(gen.next().done).toEqual(true);
  });
});
