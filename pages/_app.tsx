import Card from "@components/Card";
import store, { persistor } from "@redux/store";
import "@styles/global.css";
import { AppProps } from "next/app";
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";

function MyApp({ Component, pageProps }: AppProps): JSX.Element {
    return (
        <Provider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <Card>
                    <Component {...pageProps} />
                </Card>
            </PersistGate>
        </Provider>
    );
}

export default MyApp;
