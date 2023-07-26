import React, { useEffect, useState } from "react";
import httpClient from "./httpClient";

const useFetch = (url) => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [result, setResult] = useState(null);

  useEffect(() => {
    setLoading(true);
    const resultData = async () => {
      try {
        const { data } = await httpClient.get(url);
        setResult(data);
      } catch ({ messsage }) {
        setError(messsage);
      } finally {
        setLoading(false);
      }
    };
    resultData();
  }, [url]);

    return { loading, error, result };
}
export default useFetch;
