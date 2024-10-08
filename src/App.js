
import { useState, useEffect } from "react"
import TodoList from "./components/TodoList"
import BarChart from "./components/BarChart"
import Circle from "./components/Circle"
import TimeSeries from "./components/TimeSeries"
import Petal from "./components/Petal"





export default function App() {
  const [todos, setTodos] = useState([])
  
  const addTodo = (e) => {
    const newTodo = { text: e.target.value, id: Date.now(), completed: false }
    setTodos([newTodo, ...todos])

    e.target.value = ''
    console.log(todos);
    // barData = todos.map((todo) => parseInt(todo.text))
  }

  const completeTodo = (id, e) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].completed = !todosCopy[indexOfTodo].completed
    setTodos(todosCopy)
  }
  const editTodoText = (id, e) => {
    const todosCopy = [...todos]

    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy[indexOfTodo].text = e.target.value
    setTodos([...todosCopy])
    e.target.value = ""
  }

  const deleteTodo = (id) => {
    const todosCopy = [...todos]
    const indexOfTodo = todosCopy.findIndex((i) => i.id === id)
    todosCopy.splice(indexOfTodo, 1)
    setTodos([...todosCopy])
  };

  return (
    <div className="App">

      <TodoList
        todos={todos}
        addTodo={addTodo}
        completeTodo={completeTodo}
        editTodoText={editTodoText}
        deleteTodo={deleteTodo}
      />
      <hr></hr>
      <BarChart data={[6, 5, 4, 3, 2, 1]}
        width={700}
        height={300} />
      <Circle />
      <TimeSeries /> 
      <Petal/>




    </div>
  )
}