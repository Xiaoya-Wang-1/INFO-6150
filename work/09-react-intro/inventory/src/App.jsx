import { useState } from 'react';
import Reorder from './Reorder';
import './index.css';

function App() {
  const [count, setCount] = useState(0);

  const handleReorder = () => {
    setCount(5);
  };

  return (
    <div className="inventory-container">
      <span>Count: {count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)} disabled={!count}> - </button>
      {count === 0 && <Reorder onReorder={handleReorder} />}
    </div>
  );
}

export default App;