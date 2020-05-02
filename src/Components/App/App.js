import React, { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import {Route, Switch} from 'react-router';
import {BrowserRouter as Router} from 'react-router-dom';

import Header from '../Header';
import Footer from '../Footer';
import Todos from '../Todos';
import Home from '../Home';
import Archive from '../Archive';

import './App.css';

const App = () => {
    const [todos, setTodos] = useState(JSON.parse(localStorage.getItem('data')) || []);

    const createToDo = ({ title, date, status, estimated_time, description }) => {
        
        let newToDo = {
            id: todos.length + 1,
            title,
            date,
            status,
            estimated_time,
            description,
            completed: false
        };
        
        const data = [...todos, newToDo];
        setTodos(data);
        localStorage.setItem('data', JSON.stringify(data));
    };

    console.log(todos);

    const deleteToDo = (id) => {
        const newArray = todos.filter((el) => el.id !== id);
            
        setTodos(newArray);
        localStorage.setItem('data', JSON.stringify(newArray));
    };

    const doneToDo = (id) => {
        const mappedTodos = todos.map((el) => ({
            ...el,
            completed: el.id === id ? !el.completed : el.completed
        }));

        setTodos(mappedTodos);
    };

    return (
        <div className="App">
            <Router>
                <Header />
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/todos">
                        <Todos 
                            doneToDo={doneToDo}
                            deleteToDo={deleteToDo}
                            createToDo={createToDo}
                            todos={todos}
                        />
                    </Route>
                    <Route path="/archive">
                        <Archive />
                    </Route>
                </Switch>
                <Footer />
            </Router>
        </div>
    );
};

export default App;

