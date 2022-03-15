import React, {useState} from 'react';

let Todo = () => {

    let [state , setState] = useState({
        todo : {
            note : '',
            status : ''
        },
        todos : [],
        filteredTodos : []
    });

    let updateInput = (event) => {
        setState({
            ...state,
            todo : {
                ...state.todo,
                [event.target.name] : event.target.value
            }
        });

    };

    let addNote = (event) => {
        event.preventDefault();
        setState({
            ...state,
            todos: [...state.todos , state.todo]
        });
    };

    let filterTodos = (text) => {
        state.todos.filter(() => {
            if(text === 'All'){
                setState({
                    ...state,
                    // eslint-disable-next-line array-callback-return
                    filteredTodos: state.todos
                })
            }
            if(text === 'Active'){
                setState({
                    ...state,
                    // eslint-disable-next-line array-callback-return
                    filteredTodos: state.todos.filter(todo => {
                        if(todo.status === 'Active') return todo;
                    })
                })
            }
            if(text === 'Completed'){
                setState({
                    ...state,
                    // eslint-disable-next-line array-callback-return
                    filteredTodos: state.todos.filter(todo => {
                        if(todo.status === 'Completed') return todo;
                    })
                })
            }
        })
    };

    return (
        <>
            <pre>{JSON.stringify(state.todo)}</pre>
            <pre>{JSON.stringify(state.todos)}</pre>
            <div className="layout-column align-items-center justify-content-start">
                <section className="layout-row align-items-center justify-content-center mt-30">
                    <form onSubmit={addNote}>
                        <input
                            value={state.todo.note}
                            onChange={updateInput}
                            name="note"
                            data-testid="input-note-name" type="text" className="large mx-8"
                            placeholder="Note Title"/>
                        <input
                            value={state.todo.status}
                            onChange={updateInput}
                            name="status"
                            data-testid="input-note-status" type="text" className="large mx-8"
                            placeholder="Note Status"/>
                        <button className="" data-testid="submit-button">Add Note</button>
                    </form>
                </section>

                <div className="mt-50">
                    <ul className="tabs">
                        <li className="tab-item slide-up-fade-in" data-testid="allButton" onClick={() => filterTodos('All')}>All</li>
                        <li className="tab-item slide-up-fade-in" data-testid="activeButton" onClick={() => filterTodos('Active')}>Active</li>
                        <li className="tab-item slide-up-fade-in" data-testid="completedButton" onClick={() => filterTodos('Completed')}>Completed</li>
                    </ul>
                </div>
                <div className="card w-40 pt-30 pb-8">
                    <table>
                        <thead>
                        <tr>
                            <th>Title</th>
                            <th>Status</th>
                        </tr>
                        </thead>
                        <tbody data-testid="noteList">
                        {
                            state.filteredTodos.map(todo => {
                                return (
                                    <tr key={todo.note}>
                                        <td>{todo.note}</td>
                                        <td>{todo.status}</td>
                                    </tr>
                                )
                            })
                        }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
};
export default Todo;