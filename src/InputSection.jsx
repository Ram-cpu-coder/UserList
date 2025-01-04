"use client";
import React from "react";

import { Label, Select, TextInput, Button } from "flowbite-react";

const InputSection = ({
  setAvatar,
  gender,
  setGender,
  name,
  setName,
  handleOnAdd,
  avatarSelection,
}) => {
  setAvatar(avatarSelection(gender));

  return (
    <div className="max-w-md w-full">
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput
          id="name"
          type="text"
          sizing="md"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
      </div>
      <div className="mb-2 block">
        <Label htmlFor="gender" value="Gender" />
      </div>
      <Select
        id="gender"
        required
        value={gender}
        onChange={(e) => {
          setGender(e.target.value);
        }}
      >
        <option> </option>
        <option>Male</option>
        <option>Female</option>
        <option>Prefer Not To Say</option>
      </Select>

      <Button className="my-2 w-full" onClick={handleOnAdd}>
        Add User
      </Button>
    </div>
  );
};

export default InputSection;
