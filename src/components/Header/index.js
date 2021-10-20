import { withCreateTodo } from "../querys";
import React, {Component} from "react";


//Se encuentra el titulo de la aplicacion y el input donde se pondra la tarea a realizar
export default class Header extends Component {
    state = { text: "" };
    render() {
      const { createTodo } = this.props;
      return (
        <header className="min-w-max flex flex-col justify-center ">
            <div>
          <h1 className="font-bold text-center text-2xl">Hacer</h1>
          <div className="ml-28 w-full">
            <input
                className=" border border-gray-300 rounded mt-2 p-2"
                onChange={({ target }) =>
                this.setState(({ text }) => ({ text: target.value }))
                }
                onKeyPress={({ key }) => {
                if (key === "Enter") {
                    createTodo({ text: this.state.text });
                    this.setState({ text: "" });
                }
                }}
                value={this.state.text}
                placeholder="¿Qué necesitas hacer?"
            />
          </div>
            </div>
        </header>
      );
    }
  }
  
  Header = withCreateTodo(Header);
  