import React from 'react';
import TodoItem from '../TodoItem/TodoItem';

/** Renders a list of TodoItem components. */
export default function TodoList({
  /** Array of todo objects: { id, title, completed } */
  todos,
  /** Callback when a todo is toggled */
  onToggle,
  /** Callback when a todo is deleted */
  onDestroy
}) {
  return (
    <section className="main">
      <ul className="todo-list">
        {(todos || []).map(todo => (
          <TodoItem
            key={todo.id}
            title={todo.title}
            completed={todo.completed}
            onToggle={() => onToggle && onToggle(todo.id)}
            onDestroy={() => onDestroy && onDestroy(todo.id)}
            onEdit={() => {}}
            onCancel={() => {}}
            onSave={() => {}}
          />
        ))}
      </ul>
    </section>
  );
}
