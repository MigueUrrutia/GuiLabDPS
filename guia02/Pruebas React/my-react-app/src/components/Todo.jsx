import React from 'react';
const Todo = ({todo, index, deleteTodo}) => {
    return (
        <>
        <div className='todo-item'>
            <h3>{todo}</h3>
            <button className='eliminar' onClick={() => deleteTodo(index)}>x</button>
            </div>
            </>
    )
}
export default Todo;