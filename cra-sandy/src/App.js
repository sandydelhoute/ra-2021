import { useState } from 'react';
import { Paragraphe } from './Paragraphe';
import './styles/main.scss';

function App(props) {
  const [count, setCount] = useState(0);
  function onClickHandler() {
    alert("Handler");
    setCount(prevCount=> prevCount + 1);
  }
  const textButton = "click me";
  return (
    <div className="App">
      <header className="App-header">
        <Paragraphe {...props} textButton={textButton} onClickHandler={onClickHandler} />
        <div>
          {count}
        </div>
      </header>
    </div>
  );
}

export default App;
