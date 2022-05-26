import { useState } from "react";

type useMutaionResponse = [
  (data: any) => void,
  {
    loading: boolean;
    data?: any;
    error: any;
  }
];

function useMutation(url: string): useMutaionResponse {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState<undefined | any>(undefined);
  const [error, setError] = useState<undefined | any>(undefined);

  function mutation(data?: any) {
    setLoading(true);
    fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json().catch(() => {}))
      .then(setData)
      .catch(setError)
      .finally(() => setLoading(false));
  }

  return [
    mutation,
    {
      loading,
      data,
      error,
    },
  ];
}

export default useMutation;
