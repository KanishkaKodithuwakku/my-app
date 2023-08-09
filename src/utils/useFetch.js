import { useEffect} from "react";
import httpClient from "./httpClient";
import {useVanReducer } from "./vanReducer.js";
import { VAN_ACTIONS } from "../constants/constant";

/** 
 * With the useReducer hook, all three states are now handled 
 * within a single state, eliminating the need for separate 
 * state areas.
*/

const useFetch = (url) => {

  const [state, dispatch] = useVanReducer();
  // const [loading, setLoading] = useState(true);
  // const [error, setError] = useState(null);
  // const [result, setResult] = useState(null);

  useEffect(() => {
    //setLoading(true);
    dispatch({ type: VAN_ACTIONS.LOADING });
    const resultData = async () => {
      try {
        const { data} = await httpClient.get("/vans");
        // console.log("VAN_ACTIONS.LOADING");
        console.log("current running ", data);

        dispatch({ type: VAN_ACTIONS.RESULT, payload: { result: data } });
        //setResult(data);
      } catch ({ message }) {
        dispatch({type:VAN_ACTIONS.ERROR, payload: { message: message } });
        // setError(messsage);
      } // finally {
      //setLoading(false);
      // }
    };
    resultData();
  }, [url, dispatch]);

  //console.log(state)

  const { loading, error, result } = state;
       return [loading, error, result];
}
export default useFetch;
