import React from "react";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { BiMessageSquareAdd } from "react-icons/bi";
import { MdOutlineRadioButtonUnchecked, MdCheckCircleOutline } from "react-icons/md";

export const CompleteIcon = ({ completed }) =>
  completed ? (
    <MdCheckCircleOutline style={{ color: "green", fontSize: "22px" }} />
  ) : (
    <MdOutlineRadioButtonUnchecked style={{ color: "#ccc", fontSize: "22px" }} />
  );

export const AddIcon = ({ onClick }) => (
  <button onClick={onClick} title="Add" style={{ color:"blue", cursor: "pointer", fontSize: "22px" }}>
    <BiMessageSquareAdd />
  </button>
);

export const DeleteIcon = ({ onClick }) => (
  <button onClick={onClick} title="Delete" style={{ color:"red", cursor: "pointer", fontSize: "22px" }}>
    <MdOutlineDeleteSweep />
  </button>
);
