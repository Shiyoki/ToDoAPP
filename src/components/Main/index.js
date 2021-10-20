import React, {Component} from "react";
import {flowRight as compose} from 'lodash';
import { withTodos, withToggleTodo, withToggleAllTodos, withRemoveTodo } from "../querys";
import { BrowserRouter as Router, withRouter} from "react-router-dom";


//Estan reflejadas las funciones para poder anotar las tareas a realizar 
export class Main extends Component {
    render() {
      const {
        todos,
        toggleTodo,
        toggleAllTodos,
        removeTodo,
        location
      } = this.props;

      return todos && todos.length ? (

        <section className="ml-28 mt-3">
          <input
            className="toggle-all"
            type="checkbox"
            onChange={() =>
              todos.some(todo => todo.completed === false)
                ? toggleAllTodos({ completed: true })
                : toggleAllTodos({ completed: false })
            }
            checked={false}
          />
          <ul className="todo-list">
            {todos
              .filter(todo => {
                if (location.pathname === "/completed") {
                  return todo.completed;
                }
                if (location.pathname === "/active") {
                  return !todo.completed;
                }
                return true;
              })
              .map(todo => (
                <li
                  key={todo.id}
                  className={todo.completed ? "completed" : undefined}
                >
                  <div className="view">
                    <input
                      className="border border-gray-300 rounded mt-2 p-2"
                      onChange={() =>
                        toggleTodo({ id: todo.id, completed: !todo.completed })
                      }
                      checked={todo.completed}
                      type="checkbox"
                    />
                    <label>{todo.text}</label>
                    <button
                      onClick={() => removeTodo(todo.id)}
                      className="destroy"
                    />
                  </div>
                  <input className="border border-gray-300 rounded mt-2 p-2" onChange={() => { }} value={todo.text} />
                </li>
              ))}
          </ul>
        </section>
      ) : null;
    }
  }
  
  Main = compose(
    withRouter,
    withTodos,
    withToggleTodo,
    withToggleAllTodos,
    withRemoveTodo
  )(Main);
  