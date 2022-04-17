import React, { useEffect, useState } from "react";

export const useFetch = ({ api }: { api: string }) => {
  const [data, setData] = useState<any>("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchData = async () => {
    const resp = await fetch(api, {
      method: "GET",
    });
    const result = await resp.json();
    if (!resp.ok) {
      setError("There is an error");
      setLoading(false);
    } else if (!result) {
      setLoading(true);
      setError("");
    } else {
      setData(result);
      setLoading(false);
      setError("");
    }
  };
  useEffect(() => {
    fetchData();
  }, []);

  return { data, loading, error };
};
