import { useState } from "react";
import "./App.css";
import InputSection from "./InputSection";
import OutputTable from "./OutputTable";

function App() {
  const [gender, setGender] = useState("Male");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [data, setData] = useState([
    { name: "Ram", gender: "Male", avatar: "avatar" },
  ]);

  const handleOnAdd = () => {
    const newUser = { name: name, gender: gender, avatar: avatar };
    setData((prev) => [...prev, newUser]);
    setGender("Male");
    setName("");
  };
  // console.log(data);
  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className=" min-h-[100vh] flex flex-col items-center justify-between">
        <div className="flex flex-col justify-center items-center h-[auto] w-[85vw] mt-5">
          <h1 className="text-5xl font-bold">User List</h1>
          <hr className="w-full m-2" />
          <InputSection
            setGender={setGender}
            name={name}
            gender={gender}
            setName={setName}
            handleOnAdd={handleOnAdd}
          />
          <OutputTable data={data} />
        </div>
        <div className="italic">Created By Ram Kumar Dhimal</div>
      </div>
    </div>
  );
}

export default App;
