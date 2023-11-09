import { useState } from 'react';

const usePostFetch = (url: string, options: object) => {
  const [data, setData] = useState();
  const [postStatusCode, setStatusCode] = useState<number>();
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
      console.error('Error: ', err);
    } finally {
      setLoading(false);
    }
  };

  return { data, postStatusCode, postloading, postData };
};

export default usePostFetch;
