import './App.css';
import { useState } from 'react';
import CreateBoxes from './components/CreateBoxes';
import BoxStyling from './components/BoxStyling';

function App() {
  const [boxes, setBoxes] = useState([]);

  const handleSubmit = (e, color, width, height) => {
    e.preventDefault();
    const newBox = {
      "color": color,
      "width": width,
      "height": height
    }
    setBoxes([...boxes, newBox]);
  }

  return (
    <div>
      <CreateBoxes handleSubmit={handleSubmit} />
      <div style={{
        display: "flex"
      }}>
        {
          boxes.map((box, i) => {
            return <BoxStyling key={i} box={box} />
          })
        }
      </div>
    </div>
  );
}

export default App;