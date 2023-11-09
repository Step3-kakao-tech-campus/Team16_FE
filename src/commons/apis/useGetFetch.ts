import { useState } from 'react';

const useGetFetch = (url: string) => {
  const [data, setData] = useState<Promise<any>>();
  const [getStatusCode, setErrorStatusCode] = useState<number>();
  const [getLoading, setLoading] = useState<boolean>(false);

  const getData = async () => {
    setLoading(true);
    const response = await fetch(url);

    if (!response.ok) {
      setErrorStatusCode(response.status);
      return;
    }

    const jsonData = await response.json();
    setData(jsonData);
    setLoading(false);

    // eslint-disable-next-line consistent-return
    return jsonData;
  };

  return { data, getStatusCode, getLoading, getData };
};

export default useGetFetch;
