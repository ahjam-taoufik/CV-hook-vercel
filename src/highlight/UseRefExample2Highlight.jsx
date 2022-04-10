import React from 'react';
import Highlight from 'react-highlight';

const UseRefExample2Highlight = () => {
  return (
    <Highlight language="jsx">
         Hook useRef  (Example 2)
      {`  
                                   // inspect code in console

      import { useState, useEffect, useRef } from 'react'

        function UseRefExample2() {
          const [name, setName] = useState('')

          const renders = useRef(1)
          const prevName = useRef('')

          useEffect(() => {

            renders.current = renders.current + 1
            prevName.current = name
          }, [name])

          return (
            <div>
              <h1>Renders: {renders.current}</h1>
              <h2>Prev Name State: {prevName.current}</h2>
              <input
                type='text'
                value={name}
                onChange={(e) => setName(e.target.value)}
                className='form-control mb-3'
              />
            </div>
          )
        }

        export default UseRefExample2

      
      `}
    </Highlight>
  );
};

export default UseRefExample2Highlight;
