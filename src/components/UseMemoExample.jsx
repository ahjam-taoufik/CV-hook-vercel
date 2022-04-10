import { useState, useEffect, useRef, useMemo } from 'react'
import UseMemoExampleHighlighit from '../highlight/UseMemoExampleHighlighit'

function useMemoExample() {
  const [number, setNumber] = useState(1)
  const [incriment, setInc] = useState(0)

  
  const sqrt = useMemo(() => getSqrt(number), [number])

  const renders = useRef(1)

  useEffect(() => {
    renders.current = renders.current + 1
  })

  const onClick = () => {
    setInc((prevState) => {
      console.log(prevState + 1)
      return prevState + 1
    })
  }
   console.log(incriment);

  return (
    <>
     <div className='margingHighlight'>
      <input
        type='number'
        value={number}
        onChange={(e) => setNumber(e.target.value)}
        className='form-control w-25'
      />

      <h2 className='my-3'>
        The sqrt of {number} is {sqrt}
      </h2>

      <button onClick={onClick} className='btn btn-primary'>
        set incriment var
      </button>

      <h3>Renders: {renders.current}</h3>
    </div>
       <UseMemoExampleHighlighit/>
    </>
  )
}

function getSqrt(n) {

  console.log('sqrt Function Called!')
  return Math.sqrt(n)
}

export default useMemoExample
