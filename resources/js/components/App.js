import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import Posts from "./Posts";
import CreatePost from "./CreatePost";
import EditPost from "./EditPost";

function App(){
    return (
        <BrowserRouter>
            <>
                <Nav />
                <div className="container mt-5">
                    <Switch>
                        <Route path="/" exact component={Posts} />
                        <Route path="/new" exact component={CreatePost} />
                        <Route path="/post/:id/edit" exact component={EditPost} />
                    </Switch>
                </div>
            </>
        </BrowserRouter>
    );
}

export default App;

if (document.getElementById('root')) {
    ReactDOM.render(<App />, document.getElementById('root'));
}