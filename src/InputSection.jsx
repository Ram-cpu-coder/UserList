"use client";
import React from "react";

import { Label, Select, TextInput, Button } from "flowbite-react";

const InputSection = () => {
  return (
    <div className="max-w-md w-full">
      <div className="mb-2 block">
        <Label htmlFor="gender" value="Gender" />
      </div>
      <Select id="gender" required>
        <option>Male</option>
        <option>Female</option>
        <option>Prefer Not To Say</option>
      </Select>
      <div>
        <div className="mb-2 block">
          <Label htmlFor="name" value="Name" />
        </div>
        <TextInput id="name" type="text" sizing="md" />
      </div>
      <Button className="my-2 w-full">Add User</Button>
    </div>
  );
};

export default InputSection;
