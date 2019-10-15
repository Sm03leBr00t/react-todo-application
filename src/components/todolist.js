import React from 'react'

import { v4 } from "uuid";

import Todo from "./todo";

export default function TodoList() {
  const todos = [
    {
      "id": v4(),
      "value": "Buy milk",
      "done": false
    },
    {
      "id": v4(),
      "value": "Play with doge",
      "done": false  
    }
  ]

  return (
    <div>
      <div className="hero is-info">
        <div className="hero-body has-text-centered">
          <p className="title is-1">Todos</p>
        </div>
      </div>

      <section className="section">
        <div className="container">
          {todos.map(todo => (
            <Todo key={todo.id} todo={todo}/>
          ))}
        </div>
      </section>
    </div>
  )
}
