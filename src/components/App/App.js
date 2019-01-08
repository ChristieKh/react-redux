import React, {Component} from 'react';
import AppHeader from "../AppHeader/AppHeader";
import SearchPanel from "../SearchPanel/SearchPanel";
import TodoList from "../TodoList/TodoList";
import ItemStatusFilter from "../ItemStatusFilter/ItemStatusFilter";
import ItemAddForm from "../ItemAddForm/ItemAddForm";


import './App.css';

export default class App extends Component {

    maxId = 100;

    state = {
        todoData: [
            this.createTodoItem('Drink Coffee'),
            this.createTodoItem('Make awesome App'),
            this.createTodoItem('Have a lunch')
        ],
        term: ''
    };

    createTodoItem(label) {
        return {
            label,
            important: false,
            done: false,
            id: this.maxId++
        }
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
        const newItem = this.createTodoItem(text);

        this.setState(({todoData}) => {
            const newArray = [...todoData, newItem];
            return {
                todoData: newArray
            }
        })
    };

    toggleProperty(array, id, propName) {
        const indx = array.findIndex((el) => el.id === id);
        const oldItem = array[indx];
        const newItem = {...oldItem, [propName]: !oldItem[propName]};

        return [...array.slice(0, indx), newItem,
            ...array.slice(indx + 1)];
    }

    onToggleImportant = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'important')}
        });
    };

    onToggleDone = (id) => {
        this.setState(({todoData}) => {
            return {todoData: this.toggleProperty(todoData, id, 'done')}
        });
    };

    onSearchChange = (term) => {
        this.setState({term})
    };

    search = (items, term) => {
        if (items.length === 0) {
            return items;
        }
        return items.filter((item) => {
            return item.label
                .toLowerCase()
                .indexOf(term.toLowerCase()) > -1
        })
    };

    render() {
        const {todoData, term} = this.state;
        const doneCount = todoData.filter((el) => el.done).length;
        const todoCount = todoData.length - doneCount;
        const visibleItems = this.search(todoData, term);
        return (
            <div className="todo-app">
                <AppHeader toDo={todoCount} done={doneCount}/>
                <div className="top-panel d-flex">
                    <SearchPanel onSearchChange={this.onSearchChange}/>
                    <ItemStatusFilter/>
                </div>

                <TodoList todos={visibleItems}
                          onDeleted={this.deleteItem}
                          onToggleImportant={this.onToggleImportant}
                          onToggleDone={this.onToggleDone}/>
                <ItemAddForm onAddItem={this.addItem}/>
            </div>
        );
    }
};
