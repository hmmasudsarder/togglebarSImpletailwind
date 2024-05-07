import { useState } from "react";
import "./App.css";

function App() {
  const [select, setSelect] = useState(false);
  return (
    <div className="">
      <div
        onClick={() => setSelect(!select)}
        className={`flex w-20 h-10 bg-gray-600 m-12 rounded-full text-right font-bold ${
          select ? "bg-green-200" : "bg-black text-white"
        }`}
      >
        <span className="">{select ? "DARK" : "White"}</span>
        <div
          className={`h-10 w-10 bg-white rounded-full transition-all duration-500 cursor-pointer ${
            select ? "-ml-10" : ""
          }`}
        ></div>
      </div>
    </div>
  );
}

export default App;
