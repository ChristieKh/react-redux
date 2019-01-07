import React from 'react';
import ReactDOM from 'react-dom';
// import AppHeader from "./components/AppHeader";
// import SearchPanel from "./components/SearchPanel";
// import TodoList from "./components/TodoList";
import App from "./components/App/App";

// export default class App {
//     render() {
//         return (
            {/*<div>*/}
                {/*<AppHeader/>*/}
                {/*<SearchPanel/>*/}
                {/*<TodoList/>*/}
            // </div>
        //
        // );
    // }
//
// }

ReactDOM.render(<App/>, document.getElementById('app'));

module.hot.accept();



