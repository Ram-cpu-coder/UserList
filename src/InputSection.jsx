"use client";
import React from "react";

import { Label, Select } from "flowbite-react";

const InputSection = () => {
  return (
    <div className="max-w-md">
      <div className="mb-2 block">
        <Label htmlFor="countries" value="Select your country" />
      </div>
      <Select id="countries" required>
        <option>Male</option>
        <option>Female</option>
      </Select>
    </div>
  );
};

export default InputSection;
