import { useState, useRef } from "react";

function App() {
  const [arraySize, setArraySize] = useState(1);
  const [grid, setGrid] = useState([]);
  const canvasRef = useRef(null);




const displayGrid = () => {
  for(let i; i < grid.length; i++){
  }
}

const createGrid = () => {
  const array = [];
  for (let i = 0; i < arraySize; i++) {
    array[i] = [];
    for (let j = 0; j < arraySize; j++) {
      array[i][j] = 
        {
          active: "false"
        };
    }
  }
  setGrid(array);
}

const handleClick = () => {
  createGrid();
  displayGrid();
}
  return (
    <div className="justify-center mx-auto">
      <div className="flex items-center justify-between mx-auto">
        <p className="text-6xl font-open-sans">Union find</p>
      </div>
        <input 
        type="number" 
        min="1" 
        max="100" 
        className="bg-dark-grey mx-auto pl-6"
        value={arraySize}
        onChange={(event) => setArraySize(event.target.value)}
        />
      <button onClick={handleClick} className="pl-6">Enter</button>
      {/* GRID DISPLAY */}
      <canvas 
        className="w-[500px] h-[500px] bg-black" 
        ref={canvasRef}>

      </canvas>


    </div>
  );
}

export default App;
