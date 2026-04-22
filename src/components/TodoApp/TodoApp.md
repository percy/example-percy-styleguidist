The full TodoMVC application with state management.

Empty state:

```jsx
<TodoApp />
```

With existing todos:

```jsx
<TodoApp
  todos={[
    { title: 'Buy groceries', completed: false },
    { title: 'Walk the dog', completed: true },
    { title: 'Write tests', completed: false }
  ]}
/>
```

Showing only completed todos:

```jsx
<TodoApp
  showTodos="completed"
  todos={[
    { title: 'Buy groceries', completed: false },
    { title: 'Walk the dog', completed: true },
    { title: 'Do laundry', completed: true }
  ]}
/>
```
