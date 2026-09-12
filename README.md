# Project Name = DevStack - Build Your Ideal Development Stack

## -----Description---------------------

DevStack is a platform where developers can browse through diff technologies across different categories (Frontend, Backend, Database, Languages, Styling, DevOps) and create their personalized tech stack.

## Technologies Used

- **React 19**
- **TypeScript**
- **Tailwind CSS 4**
- **Vite**
- **React Toastify**
- **JavaScript (ES6+)** - Modern JavaScript features

## ✨ Key Features

1. **Technology Grid** - Browse through 12+ technologies with detailed information including ratings, difficulty levels, and special badges (Popular, Fast, Essential, etc.)

2. **Real-time card Render with prpos** - Add and remove technologies to build your custom stack.

### 1. What is JSX, and why is it used in React?

JSX is a syntax extension tof HTML-like code inside JavaScript. It looks like HTML but gets compiled to JavaScript function calls.

### 2. What is the difference between props and state?

**Props** are like function parameters - they're passed from a parent component to a child component and are read-only. **State** is data that belongs to a component and can change over time. When state changes, React re-renders the component.

### 3. What does the `useState` hook do, and where did you use it in this project?

useState is a React hook that lets functional components have state. In this TechnologyGrid component, we used `useState<string[]>([])` to manage `selectedIds` - the list of technology IDs that users have added to their stack.

### 4. What does the `useEffect` hook do, and why did you need it to load the JSON data?

`useEffect` runs code after a component renders - perfect for side effects like data fetching.

### 5. Why does every item in a `.map()` list need a unique `key` prop?

The `key` prop helps React identify which items have changed, been added, or removed.

### 6. What is conditional rendering? Show one place you used it (example: the empty stack message).

Conditional rendering means showing or hiding UI elements based on conditions. In YourStack component, we check `if (isEmpty)` and render "Your stack is empty" message when no technologies are selected. Similarly, in TechnologyCard, conditionally display "Added to Stack" or "Add to Stack" based on the `isSelected` prop, and only show the "Remove All" button when the stack has items.

### 7. How do you pass data from a parent component to a child component, and how does a child send something back to the parent?

To pass data downward, you use **props**: `<Child data={parentData} />`. The child receives it and can display it. To send data back upward, the parent passes a **callback function** as a prop: `<Child onAction={handleAction} />`, and TechnologyGrid passes `selectedStack` array and `onRemove` callback to YourStack. When users click the remove button, YourStack calls `onRemove(tech.id)` which updates the parent's state.
