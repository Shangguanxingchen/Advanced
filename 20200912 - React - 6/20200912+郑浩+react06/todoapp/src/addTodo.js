import React, { useState } from 'react';
import { useDispatch } from "react-redux";

function AddTodo() {
  const [val, setVal] = useState("");
  const dispatch = useDispatch();
  return <div id="create-todo">
    <input
      id="new-todo"
      placeholder="What needs to be done?"
      autoComplete="off"
      type="text"
      value={val}
      onChange={({ target: { value } }) => {
        setVal(value);
      }}
      onKeyDown={({ keyCode, target }) => {
        let val = target.value;
        if (keyCode === 13 && val.trim()) {
          dispatch({
            type: 'ADD_MESSAGE',
            title: val
          });
          setVal("");
        }
      }}
    />
  </div>
};

export default AddTodo;