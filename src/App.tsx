import React, { useCallback, useEffect, useState } from 'react';
import './App.scss';

const App: React.FC = (): JSX.Element => {
  const [state, setState] = useState('');
  const hola = useCallback((): void => console.log(hola), []);
  useEffect(() => {
    setState('hola');
    hola();
  }, [hola, setState, state]);
  return (
    <div className="App">
      <header className="App-header">
        <p>En construcción</p>
      </header>
    </div>
  );
};

export default App;
