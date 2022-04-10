import React from 'react';
import Highlight from 'react-highlight';

const CustomHookExample1Highlighit = () => {
  return (
    <Highlight language="jsx">
         Hook CustomHook   (Example1)
      {`  
                           

        import useFetch from '../hooks/useFetch'

          function CustomHookExample1() {
            const { data, loading } = useFetch(
              'https://jsonplaceholder.typicode.com/posts',
              {}
            )

            if (loading) {
              return <h3>Loading...</h3>
            }

            return (
              
              <div>
                {data.map((post) => (
                  <h3 key={post.id}>{post.title}</h3>
                ))}
              </div>


            )
          }

          export default CustomHookExample1

          /////////////////////////////
          /////////////////////////////
          // useFetch

        import { useState, useEffect } from 'react'

        function useFetch(url, options) {
          const [loading, setLoading] = useState(true)
          const [error, setError] = useState(null)
          const [data, setData] = useState(null)

          useEffect(() => {
            const fetchData = async () => {
              try {
                const response = await fetch(url, options)
                const data = await response.json()

                setData(data)
                setLoading(false)
              } catch (error) {
                setError(error)
                setLoading(false)
              }
            }

            fetchData()
            // eslint-disable-next-line react-hooks/exhaustive-deps
          }, [])

          return { data, loading, error }
        }

        export default useFetch





      `}
    </Highlight>
  );
};

export default CustomHookExample1Highlighit;
