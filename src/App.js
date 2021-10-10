import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store";
import Routing from "./Routing";
import "assets/style/App.less";
import "assets/style/index.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<p>Loading </p>}>
          <Routing />
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
