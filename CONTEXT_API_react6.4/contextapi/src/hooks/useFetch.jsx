/* eslint-disable no-shadow */
import { useEffect, useState } from 'react';

// 4 - Custom hooks

export const useFetch = (url) => {
  const [data, setData] = useState(null);

  // 5 - refatorando POST

  const [config, setConfig] = useState(null);
  const [method, setMethod] = useState(null);
  const [callFetch, setCallFetch] = useState(false);

  // 6 -  loading
  const [loading, setLoading] = useState(false);

  //  7 tratamento de erros
  const [error, setError] = useState(null);
  //  8 - desafio 6
  const [itemId, setItemId] = useState(null);

  const httpConfig = (data, method) => {
    if (method === 'POST') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      setMethod(method);
    } else if (method === 'DELETE') {
      setConfig({
        method,
        headers: {
          'Content-type': 'application/json',
        },
      });
      setMethod(method);
      setItemId(data);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      // 6 - loading
      setLoading(true);

      try {
        const res = await fetch(url);
        const json = await res.json();

        setData(json);
      } catch (error) {
        setError('Houve Algum erro ao carregar os dados!');
      }

      setLoading(false);
    };
    fetchData();
  }, [url, callFetch]);

  // 5 - refatorando POST
  useEffect(() => {
    let json;
    const httpRequest = async () => {
      if (method === 'POST') {
        const fetchOptions = [url, config];
        const res = await fetch(...fetchOptions);
        json = await res.json();
      } else if (method === 'DELETE') {
        const deleteUrl = `${url}/${itemId}`;
        const res = await fetch(deleteUrl, config);
        json = await res.json();
      }
      setCallFetch(json);
    };
    httpRequest();
  }, [config, url, method, itemId]);

  return { data, httpConfig, loading };
};
