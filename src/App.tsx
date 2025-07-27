import { Data } from "./data/Todos";
import TodoItem from "./components/todoItem";
import { useState } from "react";

function App() {
  const [todos, setTodos] = useState(Data);

  function setTodoCompleted(id: number, completed: boolean) {
    setTodos((prevTodos) =>
      prevTodos.map(todo => (
        todo.id === id ? { ...todo, completed } : todo
      ))
    );
  };

  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">ToDo List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {todos.map(todo => (
            <TodoItem
              key={todo.id}
              todo={todo}
              onCompletedChange={setTodoCompleted}
            />
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
