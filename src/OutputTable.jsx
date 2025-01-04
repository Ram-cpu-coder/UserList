import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
  Select,
  TextInput,
} from "flowbite-react";

const OutputTable = ({
  data,
  isEditing,
  setIsEditing,
  setGender,
  name,
  gender,
  setName,
  handleOnSave,
  avatar,
}) => {
  return (
    <div className="overflow-x-auto w-full max-w-md">
      <Table hoverable>
        <TableHead>
          <TableHeadCell>#</TableHeadCell>
          <TableHeadCell>Avatar</TableHeadCell>
          <TableHeadCell>Name</TableHeadCell>
          <TableHeadCell>Gender</TableHeadCell>
          <TableHeadCell>
            <span className="sr-only">Edit</span>
          </TableHeadCell>
        </TableHead>
        <TableBody className="divide-y">
          {data.map((item, index) => {
            return (
              <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                  {index + 1}
                </TableCell>
                <TableCell>
                  <img src={item.avatar} alt="" className="h-[25px]" />
                </TableCell>
                <TableCell>
                  {isEditing === item.id ? (
                    <TextInput
                      id="name"
                      type="text"
                      sizing="md"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                  ) : (
                    item.name
                  )}
                </TableCell>
                <TableCell>
                  {isEditing === item.id ? (
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
                  ) : (
                    item.gender
                  )}
                </TableCell>
                <TableCell>
                  {isEditing === item.id ? (
                    <a
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() =>
                        handleOnSave({
                          id: item.id,
                          name: name,
                          gender: gender,
                          avatar: avatar,
                        })
                      }
                    >
                      Save
                    </a>
                  ) : (
                    <a
                      className="font-medium text-cyan-600 hover:underline dark:text-cyan-500"
                      onClick={() => {
                        return setIsEditing(item.id);
                      }}
                    >
                      Edit
                    </a>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
};

export default OutputTable;
