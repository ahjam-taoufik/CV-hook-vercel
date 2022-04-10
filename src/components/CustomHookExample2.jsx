import CustomHookExample2Highlighit from '../highlight/CustomHookExample2Highlighit'
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

    <div className='margingHighlight'>
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
    </div>
    <CustomHookExample2Highlighit/>
    </>
  )
}

export default CustomHookExample2
