import { useState } from "react";
import "./App.css";
import InputSection from "./InputSection";
import OutputTable from "./OutputTable";

function App() {
  const [gender, setGender] = useState("");
  const [randomString, setRandomString] = useState("");
  const [name, setName] = useState("");
  const [avatar, setAvatar] = useState("");
  const [data, setData] = useState([
    { id: "123dfvv", name: "Ram", gender: "Male", avatar: "/male.png" },
  ]);
  const [isEditing, setIsEditing] = useState(false);

  const randomIdGenerator = () => {
    const string =
      "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLAMNOPQRSTUVWXYZ1234567890";
    const len = 10;
    let randomID = "";
    for (let i = 0; i < len; i++) {
      let randomIndex = Math.floor(Math.random() * string.length);
      randomID += string[randomIndex];
      setRandomString(randomID);
    }
  };

  const avatarSelection = (gender) => {
    if (gender === "Male") {
      return "/male.png";
    } else if (gender === "Female") {
      return "/female.png";
    } else if (gender === "Prefer Not To Say") {
      return "/blank.png";
    }
  };

  const handleOnAdd = () => {
    randomIdGenerator();
    const newUser = {
      id: randomString,
      name: name,
      gender: gender,
      avatar: avatar,
    };
    setData((prev) => [...prev, newUser]);
    setGender("");
    setName("");
  };
  const handleOnSave = (updatedUser) => {
    setData((prev) =>
      prev.map((item) =>
        item.id === updatedUser.id ? { ...item, ...updatedUser } : item
      )
    );
    setGender("");
    setName("");
    setIsEditing(false);
  };

  return (
    <div className="flex flex-col justify-center items-center gap-5">
      <div className=" min-h-[100vh] flex flex-col items-center justify-between">
        <div className="flex flex-col justify-center items-center h-[auto] w-[85vw] mt-5 gap-5">
          <h1 className="text-5xl font-bold">User List</h1>
          <hr className="w-full m-2" />
          <InputSection
            setAvatar={setAvatar}
            setGender={setGender}
            name={name}
            gender={gender}
            setName={setName}
            handleOnAdd={handleOnAdd}
            avatarSelection={avatarSelection}
          />
          <OutputTable
            data={data}
            setData={setData}
            isEditing={isEditing}
            setIsEditing={setIsEditing}
            setGender={setGender}
            name={name}
            gender={gender}
            setName={setName}
            handleOnSave={handleOnSave}
            avatar={avatar}
          />
        </div>
        <div className="italic">Created By Ram Kumar Dhimal</div>
      </div>
    </div>
  );
}

export default App;
