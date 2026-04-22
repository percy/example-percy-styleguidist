import React from 'react';
import classNames from 'classnames';

function pluralize(count, word) {
  return count === 1 ? word : word + 's';
}

/** Footer with active count, filter links, and clear completed button. */
export default function TodoFooter({
  /** Number of active (incomplete) todos */
  activeCount,
  /** Number of completed todos */
  completedCount,
  /** Current filter: 'all', 'active', or 'completed' */
  showTodos,
  /** Callback to clear all completed todos */
  onClearCompleted,
  /** Callback to change the filter */
  onShowTodos
}) {
  return (
    <footer className="footer">
      <span className="todo-count">
        <strong>{activeCount}</strong>
        {pluralize(activeCount, ' item')} left
      </span>

      <ul className="filters">
        {['all', 'active', 'completed'].map(filter => (
          <li key={filter}>
            <a
              style={{ cursor: 'pointer' }}
              onClick={() => onShowTodos(filter)}
              className={classNames({ selected: showTodos === filter })}>
              {filter[0].toUpperCase()}{filter.substring(1)}
            </a>
          </li>
        ))}
      </ul>

      {completedCount > 0 ? (
        <button
          style={{ fontWeight: 'bold' }}
          className="clear-completed"
          onClick={onClearCompleted}>
          Clear completed
        </button>
      ) : null}
    </footer>
  );
}
