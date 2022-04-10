import React from 'react';
import Highlight from 'react-highlight';

const UseRefExample3Highlight = () => {
  return (
    <Highlight language="jsx">
         Hook useRef  (Example 3)
      {`  
                                   // inspect code in console

        import { useState } from 'react'
        import Todo from './Todo'

        function UseRefExample3() {
          const [showTodo, setShowTodo] = useState(true)

          return (
            <div>
              {showTodo && <Todo />}
              <button
                className='btn btn-primary'
                onClick={() => setShowTodo(!showTodo)}
              >
                Toggle Todo
              </button>
            </div>
          )
        }

        export default UseRefExample3
         ////////////////////////////////////
         /////////////////////////////////////  
        // code component Todo.jsx
        import { useState, useEffect, useRef } from 'react';

          function Todo() {
            const [loading, setLoading] = useState(false);
            const [todo, setTodo] = useState({});

            const isMounted = useRef(true)

            useEffect(() => {
              setLoading(true);
              fetch('https://jsonplaceholder.typicode.com/todos/1')
                .then((res) => res.json())
                .then((data) => {
                  setTimeout(() => {
                    if (isMounted.current) {
                    setTodo(data);
                    setLoading(false);
                    }
                  }, 3000);
                });

              // Runs when component is unmounted
              return () => {
                console.log('unmounted');
                isMounted.current = false
              }
            }, []);

            return loading ? <h3>Loading...</h3> : <h1>{todo.title}</h1>;
          }

          export default Todo;
              
      `}
    </Highlight>
  );
};

export default UseRefExample3Highlight;
