import Todo from './Todo'


export default function TodoList({
    todos,
    addTodo,
    completeTodo,
    deleteTodo,
    editTodoText
  }) {
    return (
      <>

      <div className='newtodo'>
        <h1>Create Todo</h1>
        <input
          type="text"
          onKeyDown={(e) => {
            e.key === "Enter" && addTodo(e)
          }}
        />
        </div>
        {todos.length ? (
          <>
<div className="nowlist">

            <h1>Todo Items</h1>
            <span><p>
              {todos
                // .filter((i) => !i.completed)
                .map((todo) => {
                  return (
                    <Todo
                    todo={todo}
                      // key={todo.id}
                      // todo={todo}
                      // completeTodo={completeTodo}
                      // deleteTodo={deleteTodo}
                      // editTodoText={editTodoText}
                    />
                  )
                })}
            </p></span>
            

            </div>

            <div className="neverlist">
            
            {/* <h1>Completed Items </h1>
             */}
            {/* <ul>
              {todos
                .filter((i) => i.completed)
                .map((todo) => {
                  return (
                    <Todo
                      key={todo.id}
                      todo={todo}
                      completeTodo={completeTodo}
                      deleteTodo={deleteTodo}
                      editTodoText={editTodoText}
                    />
                  )
                })}
            </ul> */}
            </div>
          </>
        ) : (
          <h1>No Todos Added Yet</h1>
        )}
      </>
    )
  }