//Creador e iniciador de mi base de datos para la aplicacion web
import {createPool} from 'mysql2/promise';

export const pool= createPool({
    host: 'localhost',
    user: 'root',
    password: 'Andymacnab1',
    database: 'tasksdb',
    port: 3306
})
