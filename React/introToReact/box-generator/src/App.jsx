import './App.css';
import { useState } from 'react';

const App = () => {

  const [inputValue, setInputValue] = useState('')
  const [backgroundcolor, setBackgroundColor] = useState('')

  onChange(inputEntry); {
    if (inputEntry) {
      this.setState({ inputValue: inputEntry, backgroundcolor: { inputValue } }) // here I want to change the color to red
    } else {
      this.setState({ inputValue: inputEntry, backgroundcolor: '' }) // leave empty for default
    }
  }


  return (
    <div>
      {/* const { backgroundcolor } = state */}
      <input
        value={inputValue}
        onChange={(e) => this.onChange(e.target.value)}
      />
      <div style={{ backgroundColor: backgroundcolor }}>
        <h1>background color to change here!</h1>
      </div>
    </div>
  );

}

export default App;