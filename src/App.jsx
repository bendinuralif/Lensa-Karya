import { useState } from 'react';
import Home from './pages/home';
import Button from './component/Button';
import Navbar from './component/Navbar';

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Navbar />
      <div className='h-screen w-screen flex flex-col justify-center items-center gap-8'>
        <h1 className='text-3xl font-bold underline'>Tes Tailwind</h1>
        <Home />
        <Button />
      </div>
    </div>
  );
}

export default App;
