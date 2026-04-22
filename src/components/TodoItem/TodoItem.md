A single todo item with toggle and delete actions.

Active todo:

```jsx
<TodoItem
  title="Buy groceries"
  completed={false}
  onToggle={() => {}}
  onDestroy={() => {}}
  onEdit={() => {}}
  onCancel={() => {}}
  onSave={() => {}}
/>
```

Completed todo:

```jsx
<TodoItem
  title="Walk the dog"
  completed={true}
  onToggle={() => {}}
  onDestroy={() => {}}
  onEdit={() => {}}
  onCancel={() => {}}
  onSave={() => {}}
/>
```
