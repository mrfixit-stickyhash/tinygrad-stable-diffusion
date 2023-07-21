import React, { useEffect, useRef, useState } from "react";
import { setupNet } from "./net"; // Make sure to import the setupNet function

function EfficientNetWebGPU() {
  const canvasRef = useRef(null);
  const [result, setResult] = useState("");

  // ... (rest of the code remains unchanged)

  useEffect(() => {
    // Load the 'tinygrad' package in pyodide
    loadTinygrad();
  }, []);

  return (
    <div>
      <canvas ref={canvasRef} width={1} height={1} style={{ display: "none" }} />
      <button onClick={runModel}>Run EfficientNet with WebGPU</button>
      <div>{result}</div>
    </div>
  );
}

export default EfficientNetWebGPU;
