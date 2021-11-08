import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Index } from "./pages";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";

export const Routes: React.FC = () => {
    return (
        <BrowserRouter>

            <div>
                <Switch>
                    <Route exact path="/" component={Index} />
                    <Route exact path="/home" component={Index} />
                    <Route exact path="/register" component={Register} />
                    <Route exact path="/login" component={Login} />
                </Switch>
            </div>
        </BrowserRouter>
    );
};