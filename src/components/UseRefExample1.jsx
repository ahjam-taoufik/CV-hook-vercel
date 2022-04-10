import { useRef } from 'react';
import UseRefExample1Highlight from '../highlight/UseRefExample1Highlight';

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
   <>

    <div className='margingHighlight'>
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
    <UseRefExample1Highlight/>
   </>

  );
}

export default UseRefExample1;
