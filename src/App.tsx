import { Data } from "./data/Todos";
import TodoItem from "./components/todoItem";

function App() {
  return (
    <main className="py-10 h-screen space-y-5">
      <h1 className="font-bold text-3xl text-center">ToDo List</h1>
      <div className="max-w-lg mx-auto bg-slate-100 rounded-md p-5">
        <div className="space-y-2">
          {Data.map(todo => (
            <TodoItem todo={todo}/>
          ))}
        </div>
      </div>
    </main>
  );
};

export default App;
