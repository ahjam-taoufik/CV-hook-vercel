import { useState, useEffect } from 'react'


function useFetch(url, options) {
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [data, setData] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url, options)
        const data1 = await response.json()

        setData(data1)
        setLoading(false)
      } catch (error1) {
        setError(error1)
        setLoading(false)
      }
    }

    fetchData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return { data, loading, error }
}

export default useFetch
