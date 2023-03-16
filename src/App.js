import "./App.css";
import Todo from "./Todo";

function App() {
  return (
    <div className="App w-full h-screen bg-[#111111]">
      <div className="max-w-3xl mx-auto text-white py-10">
        <h1 className="text-3xl font-bold ">ToDo App</h1>
        <Todo />
      </div>
    </div>
  );
}

export default App;
