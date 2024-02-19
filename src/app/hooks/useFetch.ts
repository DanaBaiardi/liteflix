import { useState, useEffect } from "react";

type Props = {
  url: URL | Request;
};

export const UseFetch = ({ url }: Props) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<null | string>(null);
  const [controller, setController] = useState<null | AbortController>(null);

  useEffect(() => {
    const abortController = new AbortController();
    setController(abortController);
    fetch(url, { signal: abortController.signal })
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch(() => setError("Ocurrió un error"))
      .finally(() => setLoading(false));

    return () => abortController.abort();
  }, []);

  const cancelHandleController = () => {
    if (controller) {
      controller.abort();
      setError("Se ha cancelado la petición");
    }
  };

  return { data, loading, error, cancelHandleController};
};
