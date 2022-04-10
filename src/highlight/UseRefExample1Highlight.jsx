import React from 'react';
import Highlight from 'react-highlight';

const UseRefExample1Highlight = () => {
  return (
    <Highlight language="jsx">
         Hook useRef  (Example 1)
      {`  
                                      // inspect code in console
      import { useRef } from 'react';

        function UseRefExample1() {
        const inputRef = useRef();
        const paraRef = useRef();

        const onSubmit = (e) => {
            e.preventDefault();
            console.log(inputRef.current.value);
            inputRef.current.value = 'Hello';
            inputRef.current.style.backgroundColor = 'pink';
            paraRef.current.innerText = 'Goodbye';
        };

        return (

            <div className='marging'>
            <form onSubmit={onSubmit}>
                <label htmlFor="name">Name</label>
                <input
                type="text"
                ref={inputRef}
                id="name"
                className="form-control mb-2"
                />
                <button type="submit" className="btn btn-primary">
                Submit
                </button>
                <p onClick={() => inputRef.current.focus()} ref={paraRef}>
                Hello
                </p>
            </form>  
            </div>

        );
        }

        export default UseRefExample1;

      
      `}
    </Highlight>
  );
};

export default UseRefExample1Highlight;
