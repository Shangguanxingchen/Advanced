import React, { useState } from "react";
import { useDispatch } from "react-redux";

function Li(props) {
  const dispatch = useDispatch();
  let { data } = props;
  let { id, title, done } = data;
  const [edit, setEdit] = useState(false);
  const [val, setVal] = useState(title);
  return <li className={edit ? "editing" : ""}>
    <div className={`todo ${done ? "done" : ""}`}>
      <div className="display">
        <input
          className="check" type="checkbox" checked={done}
          onChange={({ target }) => {
            dispatch({
              type: "CHANGEDONE_MESSAGE",
              id,
              done: target.checked
            })
          }}
        />
        <div
          className="todo-content"
          onDoubleClick={({ target }) => {
            target.focus();
            setEdit(true);
          }}
        >{title}</div>
        <span
          className="todo-destroy"
          onClick={() => {
            dispatch({
              type: "DELETE_MESSAGE",
              id
            });
          }}
        ></span>
      </div>
      <div className="edit">
        <input className="todo-input" type="text" value={val}
          onChange={({ target }) => {setVal(target.value)}}
          onBlur={() => {
            if (val.trim()) {
              dispatch({
                type: "EDIT_MESSAGE",
                id,
                val
              });
            } else {
              setVal(title)
            }
            setEdit(false);
          }}
        />
      </div>
    </div>
  </li>
};

export default Li; 