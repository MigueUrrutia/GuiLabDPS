import React, {useState} from "react";
import Todo from "./Todo";

const Form = () => {
    const [todo, setTodo] = useState({})
    const [todos, setTodos] = useState([
        {todo: 'todo 1'},
        {todo: 'todo 2'},
        {todo: 'todo 3'}
    ])
    const handleChange = e => setTodo({[e.target.name]: e.target.value})
    const handleClick = e => {
        if(Object.keys(todo).length === 0 || todo.todo.trim() === '') {
            alert('El campo no puede estar vacio')
            return
        }
        setTodos([...todos, todo])
    }

    const deleteTodo = indice => {
        const newTodos = [...todos]
        newTodos.splice(indice, 1)
        setTodos(newTodos)
    }

    return (
        <>
        <form onSubmit={e => e.preventDefault()}>
            <div className="input-container">
                <input type="text" name="todo"
                placeholder="Agregar tarea" onChange={handleChange} />
                <button title="Agregar"
                className="agregar" onClick={handleClick}>+</button>
            </div>
        </form>
        <h3>Lista</h3>
        {
            todos.map((value, index) => (
                <Todo todo={value.todo} />
            ))
        }
        </>
    )
}
export default Form;