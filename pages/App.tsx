import React, { lazy, Suspense, useContext } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import {
    Router,
    Redirect,
    Route,
    Switch
} from 'react-router-dom';
import AppShell from './AppShell';
import {
    AuthContext,
    AuthProvider
} from '../components/AuthContext';
import Home from "./landing";
import Login from './Login';
import Signup from './Signup';
import Dashboard from "./admin/dashboard";
/*import FourOFour from './pages/FourOFour';
import Home from './pages/Home';*/

/*const Dashboard = lazy(() => import('./pages/Dashboard'));
const Inventory = lazy(() => import('./pages/Inventory'));
const Account = lazy(() => import('./pages/Account'));
const Settings = lazy(() => import('./pages/Settings'));
const Users = lazy(() => import('./pages/Users'));*/

import { createMemoryHistory } from 'history';
const history = createMemoryHistory();

const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URI,
    request: operation => {
        const token = localStorage.getItem('token');
        if (token) {
            operation.setContext({
                headers: { Authorization: `Bearer ${token}` }
            });
        }
    },

    //todo: possibly undefined
    onError: ({ networkError, graphQLErrors }) => {
        if (graphQLErrors) {
            const unauthorizedErrors = graphQLErrors.filter(
                // @ts-ignore
                error => error.extensions.code === 'UNAUTHENTICATED'
            );
            if (unauthorizedErrors.length) {
                // @ts-ignore
                window.location = '/login';
            }
        }
    }
});

const LoadingFallback = () => (
    <AppShell>
        <div className="p-4">Loading...</div>
    </AppShell>
);

const UnauthenticatedRoutes = () => (
    <Switch>
        <Route path="/login">
            <Login />
        </Route>
        <Route path="/signup">
            <Signup />
        </Route>
        <Route exact path="/">
            <Home />
        </Route>
        <Route path="*">
            {/*<FourOFour />*/}
        </Route>
    </Switch>
);

const AuthenticatedRoute = (children: any, ...rest: any) => {
    const auth = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={() =>
                auth.isAuthenticated() ? (
                    <AppShell>{children}</AppShell>
                ) : (
                    <Redirect to="/" />
                )
            }
        ></Route>
    );
};

const AdminRoute = (children: any, ...rest: any) => {
    const auth = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={() =>
                auth.isAuthenticated() && auth.isAdmin() ? (
                    <AppShell>{children}</AppShell>
                ) : (
                    <Redirect to="/" />
                )
            }
        ></Route>
    );
};

const AppRoutes = () => {
    return (
        <>
            <Suspense fallback={<LoadingFallback />}>
                <Switch>
                   {/* <AuthenticatedRoute path="/dashboard">
                        <Dashboard />
                    </AuthenticatedRoute>

                    <AdminRoute path="/inventory">
                        <Inventory />
                    </AdminRoute>

                    <AuthenticatedRoute path="/account">
                        <Account />
                    </AuthenticatedRoute>

                    <AuthenticatedRoute path="/settings">
                        <Settings />
                    </AuthenticatedRoute>*/}

                    <AdminRoute path="/admin">
                        <Dashboard />
                    </AdminRoute>

                    <UnauthenticatedRoutes />
                </Switch>
            </Suspense>
        </>
    );
};

function App() {
    return (
        //todo TS ignore foro apollo provider client
        // @ts-ignore
        <ApolloProvider client={client}>
            <Switch>
                <AuthProvider>
                    <div className="bg-gray-100">
                        <AppRoutes />
                    </div>
                </AuthProvider>
            </Switch>
        </ApolloProvider>
    );
}

export default App;
