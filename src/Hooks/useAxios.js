import { useState, useEffect } from 'react';
import axios from 'axios';

export function useGetCardRulings(url) {
  const [httpRequest, setHttpRequest] = useState({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    let cancelRequest = null;

    setHttpRequest((prev) => {
      return { ...prev, loading: true };
    });

    axios
      .get(url, {
        cancelToken: new axios.CancelToken((token) => (cancelRequest = token)),
      })
      .then((response) => {
        setHttpRequest((prev) => {
          return { ...prev, loading: false, data: response.data };
        });
      })
      .catch(() => {
        setHttpRequest((prev) => {
          return { ...prev, loading: false, error: true };
        });
      });

    return () => {
      cancelRequest();
    };
  }, [url]);

  return httpRequest;
}

export function useGetAutoComplete(queryParams) {
  const autoCompleteAPI = 'https://api.scryfall.com/cards/autocomplete';
  const [httpRequest, setHttpRequest] = useState({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    // empty in case it's never set as cancel token and called
    let cancelRequest = () => {};

    // only send request if query has more than 1 character
    if (queryParams.hasOwnProperty('q') && queryParams.q.length > 1) {
      setHttpRequest((prev) => {
        return { ...prev, loading: true, error: false };
      });

      axios
        .get(autoCompleteAPI, {
          params: queryParams,
          cancelToken: new axios.CancelToken(
            (token) => (cancelRequest = token)
          ),
        })
        .then((response) => {
          const cardDetailsAPI = 'https://api.scryfall.com/cards/named';
          const requests = [];

          response.data.data.forEach((name) => {
            requests.push(
              axios.get(cardDetailsAPI, {
                params: {
                  fuzzy: name,
                },
              })
            );
          });

          Promise.all(requests)
            .then((responses) => {
              setHttpRequest((prev) => {
                return { ...prev, loading: false, data: responses };
              });
            })
            .catch(() => {
              setHttpRequest((prev) => {
                return { ...prev, loading: false, error: true };
              });
            });
        })
        .catch((error) => {
          // exclude axios request cancelation as error
          if (error instanceof axios.Cancel) {
            setHttpRequest((prev) => {
              return { ...prev, loading: false, error: false };
            });
          } else {
            setHttpRequest((prev) => {
              return { ...prev, loading: false, error: true };
            });
          }
        });
    }

    return () => {
      cancelRequest();
    };
  }, [queryParams]);

  return httpRequest;
}

export function useGetCardDetails(cardName) {
  const cardDetailsAPI = 'https://api.scryfall.com/cards/named';
  const [httpRequest, setHttpRequest] = useState({
    loading: false,
    error: false,
    data: null,
  });

  useEffect(() => {
    let cancelRequest = null;

    setHttpRequest((prev) => {
      return { ...prev, loading: true };
    });

    axios
      .get(cardDetailsAPI, {
        params: {
          fuzzy: cardName,
        },
        cancelToken: new axios.CancelToken((token) => (cancelRequest = token)),
      })
      .then((response) => {
        setHttpRequest((prev) => {
          return { ...prev, loading: false, data: response.data };
        });
      })
      .catch(() => {
        setHttpRequest((prev) => {
          return { ...prev, loading: false, error: true };
        });
      });

    return () => {
      cancelRequest();
    };
  }, [cardName]);

  return httpRequest;
}
