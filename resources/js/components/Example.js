import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./Home";
import createPosts from "./createPosts";
import EditPosts from "./EditPosts";
import Navbar from "./navbar";
import { Fragment } from "react";

function Example() {
    return (
        <Fragment>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/addPosts" exact component={createPosts} />
                <Route path="/edit/:id" exact component={EditPosts} />
            </Switch>
        </Fragment>
    );
}

export default Example;

if (document.getElementById("example")) {
    ReactDOM.render(
        <Router>
            <Example />
        </Router>,
        document.getElementById("example")
    );
}
