import { useEffect } from "react"
import TaskCard from "../components/TaskCard"
import { useTasks } from "../context/TaskContext"

function TasksPage() {

  const { tasks, loadTasks } = useTasks();

  //El useEffect es una funcion que se ejecuta una vez carga la pagina

  useEffect(() => {
    loadTasks();
  }, [])


  return (
    <div>
      <h1 className="text-5xl text-white font-bold text-center ">Tasks</h1>
      <div className="grid grid-cols-3 gap-2">
        {tasks.map(task => (
          <TaskCard task={task} key={task.id}></TaskCard>
        ))}
      </div>

    </div>
  )
}

export default TasksPage