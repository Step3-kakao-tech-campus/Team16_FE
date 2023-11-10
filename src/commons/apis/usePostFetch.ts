import { useState } from 'react';

const usePostFetch = (url: string, options: object) => {
  const [data, setData] = useState<Promise<any>>();
  const [error, setError] = useState<Promise<Error>>();
  const [postStatusCode, setStatusCode] = useState<number>(200);
  const [postloading, setLoading] = useState<boolean>(false);

  const postData = async () => {
    try {
      setLoading(true);
      const response = await fetch(url, options);

      if (!response.ok) {
        setStatusCode(response.status);
        return;
      }
      const jsonData = await response.json();
      setData(jsonData);
    } catch (err) {
      setError(err as Promise<Error>);
    } finally {
      setLoading(false);
    }
  };

  return { data, error, postStatusCode, postloading, postData };
};

export default usePostFetch;
