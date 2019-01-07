import React from 'react';
import AppHeader from "./AppHeader";
import SearchPanel from "./SearchPanel";
import TodoList from "./TodoList";

const App = () => {

        const TodoData = [
            {label: 'Drink Coffee' , important: false, id: 1},
            {label: 'Make awesome App' , important: true, id: 2},
            {label: 'Have lunch' , important: false, id: 3},
        ];

        return (
            <div>
                <AppHeader/>
                <SearchPanel/>
                <TodoList todos={TodoData}/>
            </div>
        );
};

export default App;
