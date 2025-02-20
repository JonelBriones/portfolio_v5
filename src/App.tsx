import { useState } from "react";

import "./App.css";
import Main from "./components/Main";
function App() {
  const [count, setCount] = useState(0);
  return (
    <div
      className="flex place-items-center justify-center  bg-red-50 relative"
      style={{
        backgroundImage: `url(src/assets/images/your-name-8k.jpg)`,
        backgroundSize: "cover",
        height: "100vh",
      }}
    >
      <div className="w-7xl border">
        <Main />
      </div>
    </div>
  );
}

export default App;
