//El nucleo de mi programa, es el que contiene los middlewares que comunican de mis otros archivos al index y los ejecuta
import express from "express";
import cors from "cors"
import {PORT} from "./config.js"
import indexRoutes from './routes/index.routes.js'
import taskRoutes from "./routes/tasks.routes.js"


const app=express();


//MIDDLEWARES
app.use(cors())
app.use(express.json())
app.use(indexRoutes)
app.use(taskRoutes)



app.listen(PORT)
console.log(`Listening on port ${PORT}`)
