import React, { useState, useEffect, useReducer, useContext } from 'react';
import httpClient from './utils/httpClient';
import { usePlanetContext } from './utils/context';


const initialState = {
  loading: true,
  error: null,
  result:null
}

const ACTIONS = {
  LOADING: 'LOADING',
  ERROR: 'ERROR',
  FETCH_DATA: 'FETCH_DATA'
}


function dataFetchReducer(state, action) { 

  switch (action.type) { 
    case ACTIONS.LOADING:
      return {
        loading: true,
        error: null,
        result:null
      }
    case ACTIONS.ERROR:
       return {
         loading: true,
         error: action.payload.error,
         result: null,
       };
    case ACTIONS.FETCH_DATA:
      return {
        result: action.payload.response,
        loading: false,
        error:null
      }
      
    default:
      return state;
  }



}

export const useFetch = url => {
 
  const [state, dispatch] = useReducer(dataFetchReducer, initialState);

  /** 
   * 
   * the useState related codes were commented out because you've refactored the component to use useReducer instead of useState.
   * useState is a hook that lets you add React state to function components, and is great for when you have standalone values.
   * In contrast, useReducer is usually preferable to useState when you have complex state logic that involves multiple sub-values. It also lets you optimize performance for components that trigger deep updates because you can pass dispatch down instead of callbacks.
   * In your code, since the state involves multiple sub-values (loading, result, error), using useReducer provides a more optimal and clean solution. That's why the useState related code is no longer needed and has been commented out.
   */

  // const [loading, setloading] = useState(true);
  // const [result, setResult] = useState(null);
  // const [error, setError] = useState(null);

  useEffect(() => {
    dispatch({ type: ACTIONS.LOADING });
    //setloading(true);
    const fetchApiData = async () => {
      try {
        const { data } = await httpClient.get(url);
        dispatch({ type: ACTIONS.FETCH_DATA, payload: { response: data } });
        //setResult(data);
      } catch (error) {
        dispatch({ type: ACTIONS.ERROR, payload: { error: error.message } });
        //setError(error.message);
      } //finally {
      //setloading(false);
      //}
    };
    fetchApiData();
  }, [url]);

  // return [loading, result, error];
  return [state.loading, state.result, state.error];
}

const App = () => {
  // const [loading, result, error] = useFetch('/planets');
  const { loading, result, error } = usePlanetContext();
  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error.message}</div>;
  const people = result ? result : null;

  return (
    <div className="App">
      <h1>{JSON.stringify(people)}</h1>
    </div>
  );
}

export default App;
