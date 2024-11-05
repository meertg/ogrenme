import React, { useState } from 'react';

function UseCounter() {
  const [count, setCount] = useState(0);

  function UseCounter() {
    setCount(count + 1);
  }

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={UseCounter}>
        Click me
      </button>
    </div>
  );
}

export default UseCounter