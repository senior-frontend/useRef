import { useRef } from 'react';

const UseRefOnElement = () => {
  const inputRef = useRef<HTMLInputElement>(null);

  function focus() {
    if (inputRef.current) inputRef.current.focus();
  }

  function blur() {
    if (inputRef.current) inputRef.current.blur();
  }

  return (
    <div className="mc">
      <input ref={inputRef} type="text" />
      <div className="mc_btns">
        <button onClick={focus}>Focus</button>
        <button onClick={blur}>Blur</button>
      </div>
    </div>
  );
};

export default UseRefOnElement;
