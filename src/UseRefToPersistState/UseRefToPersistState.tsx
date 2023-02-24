import { useState, useRef, useEffect } from 'react';

const UseMemoExample = () => {
  const [name, setName] = useState('');
  // const [renderCount, setRenderCount] = useState(0);
  const renderCount = useRef(0);

  useEffect(() => {
    // setRenderCount((prev) => prev + 1);
    renderCount.current++;
  });

  return (
    <div className="mc">
      <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
      <div>Меня зовут {name}</div>
      {/* <div>Количество ререндеров {renderCount}</div> */}
      <div>Количество ререндеров {renderCount.current}</div>
    </div>
  );
};

export default UseMemoExample;
