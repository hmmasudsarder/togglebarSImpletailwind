import { useState } from "react";
import "./App.css";

function App() {
  const [select, setSelect] = useState(false)
  return (
    <>
     <div onClick={() => setSelect(!select)} className={`flex w-20 h-10 bg-gray-600 m-10 rounded-full ${select ? 'bg-green-400' : ''}`}>
      <span className={`h-10 w-10 bg-white rounded-full ${select ? 'ml-8' : ''}`}></span>
     </div>
    </>
  );
}

export default App;
