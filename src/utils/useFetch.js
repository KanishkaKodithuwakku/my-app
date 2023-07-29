import { useEffect, useReducer } from "react";
import httpClient from "./httpClient";

const ACTIONS = {
  LOADING: 'LOADING',
   RESULT:'RESULT',
  ERROR: 'ERROR'
 
}
const insitialState = {
  loading: true,
  result: null,
  error: null

}

function funReducer(state, action) { 
  const { type,payload } = action;
  switch (type) { 
    case ACTIONS.LOADING:
      return {
        loading: true,
        error: null,
        result: null,
      };
    case ACTIONS.RESULT:
      return {
        loading: false,
        result: payload.result,
        error: null,
      };
    case ACTIONS.ERROR:
      return {
        loading: false,
        result: null,
        error: payload.message,
      };
    default:
     return {
       loading: false,
       result: null,
       error: null,
     };
  }
}

/** 
 * With the useReducer hook, all three states are now handled 
 * within a single state, eliminating the need for separate 
 * state areas.
*/


const useFetch = (url) => {

  const [state, dispatch] = useReducer(funReducer, insitialState);
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [result, setResult] = useState(null);

  useEffect(() => {
    //setLoading(true);
    dispatch({ type: ACTIONS.LOADING })
    const resultData = async () => {
      try {
        const { data } = await httpClient.get(url);
        dispatch({ type: ACTIONS.RESULT, payload: { result: data } });
        //setResult(data);
      } catch ({ message }) {
        dispatch(ACTIONS.ERROR, { payload: { message: message } });
        // setError(messsage);
      }// finally {
        //setLoading(false);
     // }
    };
    resultData();
  }, [url])

     return [state.loading, state.result, state.error];
}
export default useFetch;
