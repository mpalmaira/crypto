
interface BitcoinState {
  isLoading: boolean;
  bitcoin: null | {
    prices: number[][]
  };
  hasError: boolean;
  bitcoinHourly: null | {
    prices: number[][]
  };
  bitcoinCurrent: null | {
    bitcoin:{
      usd: number;
      usd_24h_vol: number;
    }
  };
}

interface Action<Payload>{
  type: string;
  payload?: Payload
}

const initialState: BitcoinState
 = {
  isLoading: false,
  bitcoin: null,
  hasError: false,
  bitcoinHourly: null,
  bitcoinCurrent: null,
};

export const GOT_BITCOIN_SUCCESS = "GOT_BITCOIN_SUCCESS";
export const GOT_BITCOIN_PENDING = "GOT_BITCOIN_PENDING";
export const GOT_BITCOIN_ERROR = "GOT_BITCOIN_ERROR";
function bitcoinReducer(state = initialState, action:Action) {
  switch (action.type) {
    case GOT_BITCOIN_PENDING:
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case GOT_BITCOIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        hasError: false,
        ...action.payload,
      };
    case GOT_BITCOIN_ERROR:
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
}
export default bitcoinReducer;
