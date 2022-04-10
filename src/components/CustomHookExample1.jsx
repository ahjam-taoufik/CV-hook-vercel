import useFetch from '../hooks/useFetch'
import CustomHookExample1Highlighit from './../highlight/CustomHookExample1Highlighit';

function CustomHookExample1() {
  const { data, loading } = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    {}
  )

  if (loading) {
    return <h3>Loading...</h3>
  }

  return (
    <>

    <div className='margingHighlight'>
      {data.map((post) => (
        <h3 key={post.id}>{post.title}</h3>
      ))}
    </div>
     <CustomHookExample1Highlighit/>
    </>


  )
}

export default CustomHookExample1



