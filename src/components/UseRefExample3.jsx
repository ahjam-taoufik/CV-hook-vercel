import { useState } from 'react'
import UseRefExample3Highlight from '../highlight/UseRefExample3Highlight'
import Todo from './Todo'

function UseRefExample3() {
  const [showTodo, setShowTodo] = useState(true)

  return (
    <>
    <div className='margingHighlight'>
      {showTodo && <Todo />}
      <button
        className='btn btn-primary'
        onClick={() => setShowTodo(!showTodo)}
      >
        Toggle Todo
      </button>
    </div>
     <UseRefExample3Highlight/>
    </>
  )
}

export default UseRefExample3
