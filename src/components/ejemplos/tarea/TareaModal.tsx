import { FaRegTrashAlt } from "react-icons/fa";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useTaskStore } from "../../../store/TareaStore";

export default function TareaModal() {

  const { taskList, addTask, deleteTask, toggleTask } = useTaskStore()

  const [inputTask, setInputTask] = useState('')

  const handleAddTask = () => {
    if (inputTask.trim() !== "") {
      addTask(inputTask);
      setInputTask('')
    }
  }
  return (
    <div>
      <h2 className="mt-3 mb-6">Demo</h2>
      <div className="bg-[#E84A94] p-6 rounded-xl shadow-lg max-w-sm mx-auto">
        <label className="floating-label">
          <input type="text" value={inputTask}
            placeholder="Escribe la tarea" className="input input-md text-black" onChange={(e) => setInputTask(e.target.value)} onKeyDown={(e) => { if (e.key === 'Enter') { handleAddTask() } }} />
        </label>
        {taskList.map((task) => (
          <div className="flex mt-4 items-center justify-between" key={task.id}>
            <div className="flex items-center">
              <input
                type="checkbox"
                checked={task.completed}
                className="checkbox text-white border-white"
                onChange={() => toggleTask(task.id)}
              />
              <p className={`ms-2 ${task.completed ? 'line-through' : ''}`}>
                {task.taskName}</p>
            </div>
            <button className="btn btn-ghost" onClick={() => deleteTask(task.id)}>
              <FaRegTrashAlt className="text-sky-400" size={21} />
            </button>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-4">
        <Link to='/tarea-ejemplo'>
          <button className=" btn bg-[#05B5CC] hover:bg-[#147e8c] rounded-full  text-white px-6 py-2 border-none ">
            Ver explicación con código
          </button>
        </Link>
      </div>
    </div>)
}
