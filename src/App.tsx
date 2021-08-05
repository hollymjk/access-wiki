import React from 'react';
import {BrowserRouter, Route, RouteComponentProps, Switch} from 'react-router-dom';
import './App.css';
import routes from './config/routes';


const App: React.FunctionComponent<{}> = props => {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    {routes.map((route, index) => {
                        return (
                            <Route
                                key={index}
                                path={route.path}
                                exact={route.exact}
                                render={(props: RouteComponentProps<any>) => (
                                    <route.component
                                        name={route.name}
                                        {...props}
                                        {...route.props}
                                    />
                                )}
                            />
                        );
                    })}
                </Switch>
            </BrowserRouter>
        </div>
    );
};

export default App;
