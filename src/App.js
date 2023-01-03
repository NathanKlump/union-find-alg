import { useState, useRef, useEffect } from "react";

function App() {
  const [arraySize, setArraySize] = useState(1);
  const [grid, setGrid] = useState([]);
  const [refObj, setRefObj] = useState({});
  const canvasRef = useRef(null);

  const clearCanvas = () => {
    refObj.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
  }

  const renderGrid = () => {
      for(let row = 0; row < grid.length; row++){
        refObj.moveTo((row * 30),0)
        refObj.lineTo((row * 30), 500);
        refObj.stroke();
        for(let column = 0; column < grid[row].length; column++){
        refObj.moveTo(0,(column*15))
        refObj.lineTo(500,(column*15));
        refObj.stroke();
          (grid[row][column].active === true) ? refObj.fillStyle = 'blue' : refObj.fillStyle = 'white';
          refObj.fillRect((row * 30), (column * 15), 30, 15);
        }
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
    renderGrid();
  }

useEffect(() => {
  setRefObj(canvasRef.current.getContext('2d'));
}, [grid]);

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
      <button onClick={clearCanvas}> Clear </button>
      {/* GRID DISPLAY */}
      <canvas 
        className="w-[610px] h-[610px] bg-black" 
        ref={canvasRef}>

      </canvas>


    </div>
  );
}

export default App;
