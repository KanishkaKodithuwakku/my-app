import React, { useState, useEffect } from 'react';
import httpClient from './utils/httpClient';

const useFetch = url => { 

  const [loading, setloading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { 
    setloading(true);
    const fetchApiData = async () => { 

      try {
        const { data } = await httpClient.get(url);
        setResult(data);
      } catch (error) {
        setError(error.message);
      } finally { 
        setloading(false);
      }
    }
    fetchApiData();
  }, [url])
  
  return [loading, result, error];

}

const App = () => {
  const [loading, result, error] = useFetch('/planets');
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
