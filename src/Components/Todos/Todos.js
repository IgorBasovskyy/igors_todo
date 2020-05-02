import React from 'react';

import ToDoList from '../ToDoList';
import CreateToDo from '../CreateToDo';
import Filter from '../Filter';

const Todos = ({createToDo, deleteToDo, doneToDo, todos}) => {
    return (
        <>
            <Filter />
            <CreateToDo createToDo={createToDo}/>
            <ToDoList 
                data={todos} 
                deleteToDo={deleteToDo} 
                doneToDo={doneToDo} 
            />
        </>
    );
};

export default Todos;




