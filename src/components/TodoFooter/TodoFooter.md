Footer showing the count of remaining items, filter links, and a clear completed button.

With active and completed todos:

```jsx
<TodoFooter
  activeCount={2}
  completedCount={1}
  showTodos="all"
  onClearCompleted={() => {}}
  onShowTodos={() => {}}
/>
```

All todos completed:

```jsx
<TodoFooter
  activeCount={0}
  completedCount={5}
  showTodos="all"
  onClearCompleted={() => {}}
  onShowTodos={() => {}}
/>
```

No completed todos (clear button hidden):

```jsx
<TodoFooter
  activeCount={3}
  completedCount={0}
  showTodos="active"
  onClearCompleted={() => {}}
  onShowTodos={() => {}}
/>
```
