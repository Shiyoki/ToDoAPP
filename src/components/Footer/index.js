import React, {Component} from "react";
import {flowRight as compose} from 'lodash';
import { withTodos } from "../querys";
import { BrowserRouter as Router, withRouter, Link} from "react-router-dom";

//Se encuentran los botones para realizar queries y la informacion agregada
export class Footer extends Component {
    render() {
      const { location, todos } = this.props;
      return todos.length ? (
        <footer className="footer">
          <span className="todo-count">
            <strong>0</strong> Tareas
          </span>
          <ul className="filters">
            <li>
              <Link
                className={location.pathname === "/" ? "selected" : undefined}
                to="/"
              >
                Todas
              </Link>
            </li>
            <li>
              <Link
                className={
                  location.pathname === "/active" ? "selected" : undefined
                }
                to="/active"
              >
                Activas
              </Link>
            </li>
            <li className="bg-blue-900">
              <Link
                className={
                  location.pathname === "/completed" ? "completed" : undefined
                }
                to="/completed"
              >
                Completas
              </Link>
            </li>
          </ul>
          <button className="bg-blue-900 hover:bg-blue-800 p-2">Limpiar</button>
        </footer>
      ) : null;
    }
  }
  
  Footer = compose(
    withRouter,
    withTodos  
  )(Footer);