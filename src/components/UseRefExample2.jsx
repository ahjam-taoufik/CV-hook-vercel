import { useState, useEffect, useRef } from 'react'
import UseRefExample2Highlight from '../highlight/UseRefExample2Highlight'
function UseRefExample2() {
  const [name, setName] = useState('')

  const renders = useRef(1)
  const prevName = useRef('')

  useEffect(() => {

    renders.current = renders.current + 1
    prevName.current = name
  }, [name])

  return (
     <>
    
    <div className='margingHighlight'>
      <h1>Renders: {renders.current}</h1>
      <h2>Prev Name State: {prevName.current}</h2>
      <input
        type='text'
        value={name}
        onChange={(e) => setName(e.target.value)}
        className='form-control mb-3'
      />
    </div>
      <UseRefExample2Highlight/>
   
     </>
  )
}

export default UseRefExample2
