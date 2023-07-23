import { async } from 'q';
import React, { useState, useEffect} from 'react'


const useFetch = url => { 

  const [loading, setloading] = useState(true);
  const [result, setResult] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => { 
    setloading(true);
    const fetchApiData = async () => { 
      
    }

  },[])

}

const App = () => {
  return (
    <div className="App">

      <h1>App</h1>
  
    </div>
  );
}

export default App;
