import { useEffect, useState } from 'react';

/**
 * Naive fetching hook
 * @param reqFn
 * @returns
 */
function useRequest<ResVM>(reqFn: () => Promise<ResVM>) {
  const [data, setData] = useState<ResVM>();
  const [error, setError] = useState();
  const [isFetching, setIsFetching] = useState(true);

  useEffect(() => {
    setIsFetching(true);
    reqFn()
      .then(setData)
      .catch(setError)
      .finally(() => setIsFetching(false));
  }, [reqFn]);

  return {
    data,
    error,
    isFetching,
  };
}

export default useRequest;
