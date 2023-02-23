import { useState, useRef, useEffect } from 'react';

const UseRefCase = () => {
  const [name, setName] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);
  const prevName = useRef('');

  function confirmName() {
    if (inputRef.current) setName(inputRef.current.value);
  }

  useEffect(() => {
    prevName.current = name;
  }, [name]);

  return (
    <div className="mc">
      <div>
        <input ref={inputRef} type="text" />
        <button onClick={confirmName}>Подтвердить имя</button>
      </div>
      <div>Меня зовут {name}</div>
      <div>Раньше меня звали {prevName.current}</div>
    </div>
  );
};

export default UseRefCase;
