import "./App.css";
import { useState } from "react";

function App() {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [task, setTask] = useState([]);

  const handlerSubmit = (e) => {
    e.preventDefault();

    setTask([...task, { title, desc }]);
    setTitle("");
    setDesc("");
  };

  const deleteHandler = (index) => {
    let deleteTask = [...task];
    deleteTask.splice(index, 1);
    setTask(deleteTask);
  };

  const editHandler = (index) => {
    let edit = [...task];
    const editedTitle = prompt("Edit Title", edit[index].title);
    edit[index].title = editedTitle;

    const editedDesc = prompt("Edit Description", edit[index].desc)
    edit[index].desc = editedDesc;
    setTask(edit);
  };

  let renderTask = <h2>No Task Available</h2>;

  if (task.length > 0) {
    renderTask = task.map((task, index) => {
      return (
        <>
          <div className="bg-white p-4 rounded-lg shadow-md mb-4 border border-gray-200 flex flex-row justify-between">
            <h3 className="text-lg font-semibold text-gray-800">
              {task.title}
            </h3>
            <p className="text-sm text-gray-600 mt-2">{task.desc}</p>
            <div className="space-x-1">
              <button
                onClick={() => {
                  editHandler(index);
                }}
                className="bg-indigo-500 text-white"
              >
                Edit
              </button>
              <button
                onClick={() => {
                  deleteHandler(index);
                }}
                className="bg-red-500 text-white"
              >
                Delete
              </button>
            </div>
          </div>
        </>
      );
    });
  }
  return (
    <div>
      <h1 className="bg-indigo-400 text-white p-5 text-5xl font-bold text-center">
        My Todo List
      </h1>
      <form onSubmit={handlerSubmit}>
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Task"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <input
          type="text"
          className="text-2xl border-zinc-800 border-4 m-8 px-4 py-2"
          placeholder="Enter Description"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
        />
        <button className="bg-black text-white px-4 py-3 text-2xl font-bold rounded m-5">
          Submit
        </button>
      </form>

      <hr />

      <div className="p-5 bg-slate-50 mt-2 text-slate-950">{renderTask}</div>
    </div>
  );
}

export default App;
