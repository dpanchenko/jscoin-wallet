import {
  SET_WALLET,
} from 'app/redux/constants';

export const initialState = {
  wallet: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_WALLET: {
      return {
        ...state,
        wallet: action.payload,
      };
    }
    default:
      return state;
  }
}
