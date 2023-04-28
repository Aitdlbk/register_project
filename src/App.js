import React from "react";
import './styles/index.css';
import {SnackbarProvider} from "notistack";

import Router from "./Router";
import UserContextProvider from "./components/UserContextProvider";
import {Provider} from "react-redux";
import {store} from "./store";

function App() {
    return (
        <Provider store={store}>
            <SnackbarProvider maxSnack={3}>
                <div className="App">
                    <UserContextProvider>
                        <Router/>
                    </UserContextProvider>
                </div>
            </SnackbarProvider>
        </Provider>
    );
}

export default App;
