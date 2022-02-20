import './styles.css';
import { Todo, TodoList } from './classes';
import {crearTodoHtml} from './js/componentes';
export const todoList = new TodoList();

//todoList.todos.forEach(todo => crearTodoHtml(todo));

todoList.todos.forEach(crearTodoHtml);


/*
const tarea= new Todo('Aprende JavaScript');
todoList.nuevoTodo (tarea);

console.log(tarea);

crearTodoHtml(tarea);*/


//import { saludar } from './js/componentes';
//let nombre=prompt('Escriba su nombre:  ');
//saludar(nombre);


//const saludar = (nombre) =>{
    //console.log('Creando etiqueta H1');

    //const h1= document.createElement('h1');
    //h1.innerText = `Hola ${nombre}`;

    //document.body.append(h1);
//}

