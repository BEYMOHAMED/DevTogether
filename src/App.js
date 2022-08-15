import { useState } from 'react';
import Controls from './components/Controls'
import Gauge from './components/Gauge';
import { ValueContext } from './contexts/ValueContext';
import './App.css';

function App() {
  const [val, setVal] = useState(-135);

  return (
    <div className="App">
      <ValueContext.Provider value={{ val, setVal }}>
          <Gauge />
          <Controls/>
      </ValueContext.Provider>
    </div>
  );
}

export default App;
