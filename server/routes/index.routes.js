//Archivo para almacenar todo el grupo de rutas y sus funciones que ejecutara al recibir las peticiones de mi aplicacion
import { Router } from "express";
import {pool} from "../db.js";


const router = Router();

router.get("/ping",async(req,res)=>{
    const result= await pool.query("SELECT 77+33 as result")
    res.json(result[0])
})
export default router;