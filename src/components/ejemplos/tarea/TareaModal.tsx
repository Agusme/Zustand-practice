import { FaRegTrashAlt } from "react-icons/fa";
import { useTaskStore } from "../../../store/TareaStore";
import { useState } from "react";

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
              <p className={`ms-2 ${task.completed? 'line-through': ''}`}>{task.taskName} </p>
            </div>
            <button className="btn btn-ghost" onClick={() => deleteTask(task.id)}>
              <FaRegTrashAlt className="text-sky-400" size={21} />
            </button>
          </div>
        ))}
      </div>

    </div>)
}
