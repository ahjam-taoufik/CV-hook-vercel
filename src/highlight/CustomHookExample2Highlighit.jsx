import React from 'react';
import Highlight from 'react-highlight';

const CustomHookExample2Highlighit = () => {
  return (
    <Highlight language="jsx">
         Hook CustomHook   (Example2-LocalStorage)
      {` 
      
      import useLocalStorage from '../hooks/useLocalStorage'

          function CustomHookExample2() {
            const [task, setTask] = useLocalStorage('task', '')
            const [tasks, setTasks] = useLocalStorage('tasks', [])
                  
            
            const onSubmit = (e) => {
          

                e.preventDefault()
                
                const taskObj = {
                  task,
                  completed: false,
                  date: new Date().toLocaleDateString(),
                }
                
                setTasks([...tasks, taskObj])
              
            }

            return (
              <>
                <form onSubmit={onSubmit} className='w-50'>
                  <div className='mb-3'>
                    <label className='form-label'>Task</label>
                    <input
                      className='form-control'
                      type='text'
                      value={task}
                      onChange={(e) => setTask(e.target.value)}
                    />
                  </div>
                  <button type='submit' className='btn btn-primary'>
                    Submit
                  </button>
                </form>

                <hr />

                {tasks.map((task) => (
                  <h3 key={task.date}>{task.task}</h3>
                ))}
              </>
            )
          }

          export default CustomHookExample2 

          //////////////////////////////             
          //////////////////////////////
          //useLocalStorage
                 import { useState } from 'react'

            function useLocalStorage(key, initialValue) {
              const [localStorageValue, setLocalStorageValue] = useState(() =>
                getLocalStorageValue(key, initialValue)
              )

              const setValue = (value) => {
                // Check if function
                const valueToStore =
                  value instanceof Function ? value(localStorageValue) : value
                // Set to state
                setLocalStorageValue(value)
                // Set to local storage
                localStorage.setItem(key, JSON.stringify(valueToStore))
              }

              return [localStorageValue, setValue]
            }

            function getLocalStorageValue(key, initialValue) {
              const itemFromStorage = localStorage.getItem(key)
              return itemFromStorage ? JSON.parse(itemFromStorage) : initialValue
            }

            export default useLocalStorage
                        


      `}
    </Highlight>
  );
};

export default CustomHookExample2Highlighit;
