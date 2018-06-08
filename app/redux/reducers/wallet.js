import {
  SET_WALLET,
  GET_BALANCE_SUCCESS,
  GET_BALANCE_FAILED,
} from 'app/redux/constants';

export const initialState = {
  wallet: null,
  balance: null,
  debet: null,
  credit: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case SET_WALLET: {
      return {
        ...state,
        wallet: action.payload,
      };
    }
    case GET_BALANCE_SUCCESS: {
      const { balance, debet, credit } = action.payload;
      return {
        ...state,
        balance,
        debet,
        credit,
      };
    }
    case GET_BALANCE_FAILED: {
      return {
        ...state,
        balance: null,
        debet: null,
        credit: null,
      };
    }
    default:
      return state;
  }
}
