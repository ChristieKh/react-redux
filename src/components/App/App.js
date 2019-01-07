import React, {Component} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";


import './App.css';

export default class App extends Component {
    state = {
        todoData: [
            {label: 'Drink Coffee', important: false, id: 1},
            {label: 'Make awesome App', important: true, id: 2},
            {label: 'Have a lunch', important: false, id: 3},
        ]
    };

    deleteItem = (id) => {
        this.setState(({todoData}) => {
            const indx = todoData.findIndex((el) => el.id === id);
            const newArray = [...todoData.slice(0, indx), ...todoData.slice(indx + 1)];
            return {
                todoData: newArray
            }
        });
    };

    addItem = (text) => {

    };

    render() {
        return (
            <div className="todo-app">
                <AppHeader toDo={1} done={3}/>
                <div className="top-panel d-flex">
                    <SearchPanel/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={this.state.todoData}
                          onDeleted={this.deleteIte} />
                <ItemAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
};
