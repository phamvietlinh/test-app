import React, { Component } from 'react';
import './App.css';
import Menu from './components/Menu';
import routes from './components/routes';
import {Switch, Route, HashRouter, BrowserRouter as Router} from 'react-router-dom';
import Question_row from './components/Question_row';
// import Select from './components/Select';


class App extends Component {
    

    render() {

        return (
            <HashRouter>    
                <div className="App">
                    <h1 className="text-center">Ôn tập - kiểm tra năng định</h1>
                    <br/>
                    <Menu />
                    
                    
                    {this.showContentMenus(routes)}
                </div>
            </HashRouter>
        );
    }

    showContentMenus = (routes) => {
        var result = null;
        if(routes.length > 0){
            result = routes.map((route, index) => {
                return (<Route key={index} path={route.path} exact={route.exact} component={route.main} />)
            })
        }

        return <Switch>{result}</Switch>
    }
}

export default App;
