import React, { useState, useEffect, useRef } from 'react';
import classNames from 'classnames';

const ESCAPE_KEY = 27;
const ENTER_KEY = 13;

/** A single todo item with toggle, edit, and delete actions. */
export default function TodoItem({
  /** The todo title text */
  title,
  /** Whether the todo is completed */
  completed,
  /** Whether this item is currently being edited */
  editing,
  /** Callback when the item enters edit mode */
  onEdit,
  /** Callback to toggle the completed state */
  onToggle,
  /** Callback to cancel editing */
  onCancel,
  /** Callback to save edited title */
  onSave,
  /** Callback to delete the todo */
  onDestroy
}) {
  let [editText, setEditText] = useState(title);
  let editField = useRef(null);

  let handleSubmit = () => {
    let val = editText.trim();
    if (val) {
      onSave(val);
      setEditText(val);
    } else {
      onDestroy();
    }
  };

  useEffect(() => {
    if (editing && editField.current) {
      let len = editField.current.value.length;
      editField.current.focus();
      editField.current.setSelectionRange(len, len);
    }
  }, [editing]);

  return (
    <li className={classNames({ completed, editing })}>
      <div className="view">
        <input
          type="checkbox"
          className="toggle"
          checked={completed}
          onChange={onToggle}
        />
        <label onDoubleClick={() => { onEdit(); setEditText(title); }}>
          {title}
        </label>
        <button className="destroy" onClick={onDestroy} />
      </div>
      <input
        ref={editField}
        className="edit"
        value={editText}
        onBlur={handleSubmit}
        onChange={e => editing && setEditText(e.target.value)}
        onKeyDown={e => {
          if (e.which === ESCAPE_KEY) { setEditText(title); onCancel(); }
          else if (e.which === ENTER_KEY) handleSubmit();
        }}
      />
    </li>
  );
}
