// custom hook in reactjs need to start with the word 'use';

import { useState, useEffect } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const abortCont = new AbortController();

        setTimeout(() => {
            fetch(url, { signal : abortCont.signal})
              .then(res => {
                if (!res.ok) {
                   throw Error("Could Not Fetch Data for that Resource");
                }
                return res.json();
              })
              .then(data => {
                setData(data);
                setIsPending(false);
                setError(null);
              }) 
              .catch(err => {
                if (err.name == 'AbortError') {
                  console.log("fetch aborted");
                }
                else {
                  setIsPending(false);
                  setError(err.message);
              }
              } )
                
        }, 1000);

        // cleanup function
      return () => abortCont.abort();

      }, [url]);

  
return { data, isPending, error };

}

export default useFetch;
