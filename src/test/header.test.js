import React from "react";
import { screen, render } from "@testing-library/react";
import App from "../App";
import Header from "../components/Header"

//Test unit, minimo detecta si la aplicacion tiene un titulo de carga al entrar

describe("App", ()=>{
    it("must display a title", () =>{
        render(<App />);
        expect(screen.queryByText(/is loading/i)).toBeInTheDocument()
    });

})

