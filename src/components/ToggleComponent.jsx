
import ToggleComponentHighlighit from '../highlight/ToggleComponentHighlighit';
import { useToggle } from './../hooks/useToggle';

  const ToggleComponent=()=> {
  const [value, toggleValue] = useToggle(false)

  return (
    <>

     <div className='margingHighlight'>
      <div>{value.toString()}</div>
      <button onClick={toggleValue}>Toggle</button>
      <button onClick={() => toggleValue(true)}>Make True</button>
      <button onClick={() => toggleValue(false)}>Make False</button>
    </div>
    <ToggleComponentHighlighit/>
    </>
  )
}

export default ToggleComponent