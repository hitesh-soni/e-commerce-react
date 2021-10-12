import React, { Suspense } from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "store";
import { PageLoader } from "components/Global";
import Routing from "./Routing";
import Intercepter from "helpers/Interceptor";
import "assets/style/App.less";
import "assets/style/index.scss";

function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <Suspense fallback={<PageLoader />}>
          <Intercepter store={store}>
            <Routing />
          </Intercepter>
        </Suspense>
      </PersistGate>
    </Provider>
  );
}

export default App;
