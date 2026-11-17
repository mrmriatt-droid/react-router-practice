import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    async function fetchData() {
      try {
        setLoading(true);
        setError("");

        const response = await fetch(url);

        if (response.status === 404) {
          setData(null);
          return;
        }

        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, [url, retry]);

  function refetch() {
    setRetry((prev) => prev + 1);
  }

  return { data, loading, error, refetch };
}
export default useFetch;
