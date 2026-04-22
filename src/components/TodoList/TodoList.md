A list of todo items.

With mixed todos:

```jsx
<TodoList
  todos={[
    { id: 1, title: 'Buy groceries', completed: false },
    { id: 2, title: 'Walk the dog', completed: true },
    { id: 3, title: 'Write tests', completed: false }
  ]}
  onToggle={id => console.log('toggle', id)}
  onDestroy={id => console.log('destroy', id)}
/>
```

Empty list:

```jsx
<TodoList todos={[]} />
```
