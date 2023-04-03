import { useTasks } from "../context/TaskContext"
import { useNavigate } from "react-router-dom"


export default function TaskCard({ task }) {

    const { deleteTask, toggleTaskDone } = useTasks()
    const navigate = useNavigate()
    const handleDone = async () => {
        await toggleTaskDone(task.id)
    }

    return (
        <div className="bg-slate-300 rounded-md p-4">
            <header className="flex justify-between">
                <h2 className="text-xl font-bold">{task.title}</h2>
                <span>{task.done == 1 ? "✓" : "✗"}</span>
            </header>

            <p className="text-xs">{task.description}</p>

            <span>{task.createAt}</span>
            <div className="flex gap-x-1">
                <button className="bg-red-500 px-2 py-2 text-white " onClick={() => {
                    console.log("Eliminando tarea...")
                    deleteTask(task.id)
                }}>Delete</button>
                <button className="bg-yellow-500 px-2 py-2 text-white " onClick={() => navigate(`/edit/${task.id}`)}>Edit</button>
                <button className="bg-green-500 px-2 py-2 text-white " onClick={() => {
                    handleDone(task.done)

                }}>Toggle Task</button>
            </div>
        </div>
    )
}
