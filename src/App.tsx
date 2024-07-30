import { useEffect, useState } from 'react';

import reactLogo from './assets/react.svg';

import viteLogo from '/vite.svg';

function App() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then((res) => res.json())
      .then((res) => setTodos(res.todos));
  }, []);

  return (
    <>
      <div>
        <a href='https://vitejs.dev' target='_blank'>
          <img src={viteLogo} className='logo' alt='Vite logo' />
        </a>
        <a href='https://react.dev' target='_blank'>
          <img src={reactLogo} className='logo react' alt='React logo' />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className='card'>
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
      </div>
      <div className='read-the-docs'>
        {todos.length && <p>Todo List: {todos.length}</p>}
      </div>
    </>
  );
}

export default App;
