import React from 'react';
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";
import ItemStatusFilter from "./ItemStatusFilter";

import '../styles/App.css';


const App = () => {

        const TodoData = [
            {label: 'Drink Coffee' , important: false, id: 1},
            {label: 'Make awesome App' , important: true, id: 2},
            {label: 'Have lunch' , important: false, id: 3},
        ];

    return (
        <div className="todo-app">
            <AppHeader toDo={1} done={3} />
            <div className="top-panel d-flex">
                <SearchPanel />
                <ItemStatusFilter />
            </div>

            <TodoList todos={TodoData} />
        </div>
    );
};

export default App;
