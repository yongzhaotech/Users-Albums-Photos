import * as React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware, { SagaMiddleware } from "redux-saga";
import RootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"
import App from "./App";
import RootSaga from "./saga";
import * as serviceWorker from "./serviceWorker";

const config = {
  key: "mavennet-ui-assignment",
  storage,
},
  sagaMiddleware: SagaMiddleware = createSagaMiddleware(),
  store: any = createStore(
    persistReducer(config, RootReducer),
    applyMiddleware(sagaMiddleware)
  );

sagaMiddleware.run(RootSaga);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("application-root")
);

serviceWorker.unregister();
