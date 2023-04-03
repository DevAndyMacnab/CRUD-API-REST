//Formik sera utilizado en lugar de un useState para manejar los estados de los valores ingresados por el usuario
import {Form,Formik} from "formik";
import { useTasks } from "../context/TaskContext.jsx";
import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";

export default function TasksForm() {
  
  const {createTask, getTask, updateTask} = useTasks()
  const params= useParams()
  const navigate=useNavigate()
  const[task,setTask]=useState({
    title:"",
    description:"",
  })

  useEffect(() => {

    const loadTask=async()=>{
      if(params.id){
        const gettingTask= await getTask(params.id)
        setTask({
          title:gettingTask.title,
          description:gettingTask.description,
        })
      }
    }
    loadTask()
  },[])

  return (

    <div>
      <h1>{
      params.id ? "Edit Task": "New Task"
      }</h1>
      <Formik
      initialValues={task}
      enableReinitialize={true}
      onSubmit={async(values,actions)=>{
        console.log(values)
        if(params.id){
          await updateTask(params.id,values)
          navigate("/")
        }else{
          await createTask(values);

        }
        setTask({
          title:"",
          description:""
        })}}
      >
        {({handleChange,handleSubmit,values,isSubmitting})=>(
          <Form onSubmit={handleSubmit}>
          <label>Ingrese el titulo</label>
          <input type="text" name="title" 
            onChange={handleChange}
            value={values.title}
            
          />
          <label>Ingrese la descripcion de la tarea</label>
          <textarea name="description" rows="3" placeholder="Escribe una descripcion"
          onChange={handleChange}
          value={values.description}
          ></textarea>
          <button type="submit"
          disabled={isSubmitting}>{isSubmitting?"Saving...":"Save"}
          </button>
          
        </Form>

        )}  
      </Formik>
    </div>
  )
}
