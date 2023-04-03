//Axios es una libreria cliente http basada en promesas que se pueden usar en nodeJs, es la libreria que nos permite conectar nuestro backend con el frontend 
import axios from "axios"
//Peticion al backend para que almacene los datos que le enviamos
export const createTasksRequest= async(task)=>{
     await axios.post("http://localhost:4500/tasks",task);
}
//Peticion al backend para que nos retorne todos los datos almacenados en nuestra base de datos
export const getTasksRequest=async ()=>{
     return await axios.get("http://localhost:4500/tasks");
}

//Peticion al backend para que elimine un dato seleccionado en el frontend
export const deleteTasksRequest=async(id)=>{
     return await axios.delete(`http://localhost:4500/tasks/${id}`)
}

export const getTaskRequest=async(id)=>{
     return await axios.get(`http://localhost:4500/tasks/${id}`)
}

export const updateTaskRequest=async(id,newData)=>{
     return await axios.put(`http://localhost:4500/tasks/${id}`,newData)
}

export const toggleTaskDoneRequest=async (id,done)=>{
     return await axios.put(`http://localhost:4500/tasks/${id}`,{done})
}