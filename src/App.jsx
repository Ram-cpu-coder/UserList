import { useState } from "react";
import "./App.css";
import InputSection from "./InputSection";
import OutputTable from "./OutputTable";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className="flex flex-col justify-center items-center h-[auto] w-[85vw] mt-5">
        <h1 className="text-5xl font-bold">User List</h1>
        <hr className="w-full m-2" />
        <InputSection />
      </div>
      <OutputTable />
    </div>
  );
}

export default App;
