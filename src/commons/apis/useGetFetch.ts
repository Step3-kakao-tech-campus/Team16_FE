import { useState } from 'react';

const useGetFetch = (url: string) => {
  const [data, setData] = useState<Promise<any>>();
  const [error, setError] = useState<Promise<Error>>();
  const [getStatusCode, setErrorStatusCode] = useState<number>();
  const [getLoading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        setErrorStatusCode(response.status);
        return;
      }

      const jsonData = await response.json();
      setData(jsonData);

      // eslint-disable-next-line consistent-return
      return jsonData;
    } catch (err) {
      setError(err as Promise<Error>);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, getStatusCode, getLoading, getData };
};

export default useGetFetch;
