import { useState } from "react";

import "./App.css";
import Main from "./components/Main";
function App() {
  return (
    <div
      className="flex justify-center relative overflow-hidden"
      style={{
        backgroundImage: `url(src/assets/images/your-name-8k.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="container flex-col md:flex-row flex h-screen overflow-hidden">
        <Main />
      </div>
    </div>
  );
}

export default App;
