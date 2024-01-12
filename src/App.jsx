import React, { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls } from "@react-three/drei";
import { Pool } from "./Pool";

const Scene = () => {
  return (
    <>
    {/* <Environment preset="city"/> */}
      <Pool />
      <ambientLight intensity={Math.PI /1.2}   />
    </>
  );
};

const App = () => {
  const [background, setBackground] = useState("");

  const handleBackgroundChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setBackground(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div className="app-container">
      <h1 className="title">+Pool Gen</h1>
      <div className="frame-container" style={{ backgroundImage: `url(${background})` }}>
        <Canvas camera={{ fov: 70, position: [0, 3, 8] }}>
          <OrbitControls />
          <Scene />
        </Canvas>
      </div>
      <footer>
        <input
          type="file"
          onChange={handleBackgroundChange}
          id="file-upload"
        />
        <label htmlFor="file-upload">
          Change Background
        </label>
      </footer>
    </div>
  );
};

export default App;
