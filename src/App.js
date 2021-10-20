import React, {Component} from 'react';
import {BrowserRouter} from "react-router-dom";

import Header from "./components/Header/Header";
import Pages from "./pages/Pages";

import './App.css';

class App extends Component {

    componentDidMount() {
        // window.addEventListener('resize', () => {
        //     let height = window.innerHeight
        //     let devTools = document.getElementById('dev-tools')
        //     devTools.innerText = height
        //
        //     // let splash = document.getElementById('h--splash')
        //     // splash.style.height = height + 'px'
        // })
    }

    render() {

        return (
            <BrowserRouter>

                {/*<div id={"dev-tools"}>*/}
                {/*    0*/}
                {/*</div>*/}

                <Header />

                <Pages />

            </BrowserRouter>
        )

    }

}


export default App;
