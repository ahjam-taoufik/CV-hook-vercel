import React from 'react';
import Highlight from 'react-highlight';

const ToggleComponentHighlighit = () => {
  return (
    <Highlight language="jsx">
         Hook CustomHook  ToggleHook
      {` 
      
      import { useToggle } from './../hooks/useToggle';

        const ToggleComponent=()=> {
        const [value, toggleValue] = useToggle(false)

        return (
            <div>
            <div>{value.toString()}</div>
            <button onClick={toggleValue}>Toggle</button>
            <button onClick={() => toggleValue(true)}>Make True</button>
            <button onClick={() => toggleValue(false)}>Make False</button>
            </div>
        )
        }

        export default ToggleComponent
        
        /////////////////////////////
        ///////////////////////////
        // useToggle.js

        import { useState } from "react"

        export  const useToggle=(defaultValue)=> {

        const [value, setValue] = useState(defaultValue)

        function toggleValue(val) {
            setValue(currentValue =>
            typeof val === "boolean" ? val : !currentValue
            )
        }

        return [value, toggleValue]
        }
      `}
    </Highlight>
  );
};

export default ToggleComponentHighlighit;
