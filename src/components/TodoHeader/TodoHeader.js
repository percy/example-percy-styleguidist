import React, { useState } from 'react';

const ENTER_KEY = 13;

/** Text input for adding new todos. Renders the header section with the input field. */
export default function TodoHeader({
  /** Callback when a new todo is submitted */
  onNewTodo
}) {
  let [value, setValue] = useState('');

  return (
    <header className="header">
      <h1>todos</h1>
      <input
        autoFocus={true}
        className="new-todo"
        placeholder="What needs to be done?"
        value={value}
        onChange={e => setValue(e.target.value)}
        onKeyDown={e => {
          if (e.keyCode !== ENTER_KEY) return;
          e.preventDefault();
          let title = value.trim();
          if (title && onNewTodo) {
            onNewTodo(title);
            setValue('');
          }
        }}
      />
    </header>
  );
}
