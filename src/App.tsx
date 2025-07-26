import { Data } from "./data/Todos"

function App() {
  return (
    <main className="py-10 h-screen">
      <h1 className="font-bold text-3xl text-center">ToDo List</h1>
      <div className="max-w-lg mx-auto">
        <div className="space-y-2">
          {Data.map(todo => (
            <p key={todo.id} className="text-lg">
              {todo.title}
            </p>
          ))}
        </div>
      </div>
    </main>
  )
}

export default App
