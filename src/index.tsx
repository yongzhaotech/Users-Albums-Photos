import * as React from "react";
import ReactDOM from "react-dom";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { createEpicMiddleware } from "redux-observable";
import RootReducer from "./reducer";
import { persistStore, persistReducer } from "redux-persist";
import { PersistGate } from "redux-persist/integration/react";
import storage from "redux-persist/lib/storage"
import App from "./App";
import RootEpic from "./epics";
import * as serviceWorker from "./serviceWorker";

const config = {
  key: "mavennet-ui-assignment",
  storage,
},
  epicMiddleware: any = createEpicMiddleware(),
  store: any = createStore(
    persistReducer(config, RootReducer),
    composeWithDevTools(applyMiddleware(epicMiddleware))
  );

epicMiddleware.run(RootEpic);

ReactDOM.render(
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistStore(store)}>
      <App />
    </PersistGate>
  </Provider>,
  document.getElementById("application-root")
);

serviceWorker.unregister();
