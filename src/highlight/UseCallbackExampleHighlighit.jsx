import React from 'react';
import Highlight from 'react-highlight';

const UseCallbackExampleHighlighit = () => {
  return (
    <Highlight language="jsx">
         Hook useCallback + React.memo
      {`  
                                   // inspect code in console

          import React, { useState, useCallback } from 'react'

          function UseCallbackExample() {
            const [tasks, setTasks] = useState([])

            const addTask = useCallback(() => {
              setTasks((prevState) => [...prevState, 'Some Task'])
            }, [setTasks])

            

            return (
              <div>
                <Button addTask={addTask} />
                {tasks.map((task, index) => (
                  <p key={index}>{task}</p>
                ))}
              </div>
            )
          }

          const Button = React.memo(({ addTask }) => {
            console.log('Button rendered')
            return (
              <div>
                <button className='btn btn-primary' onClick={addTask}>
                  Add Task
                </button>
              </div>
            )
          })

          export default UseCallbackExample
     

       
              
      `}
    </Highlight>
  );
};

export default UseCallbackExampleHighlighit;
