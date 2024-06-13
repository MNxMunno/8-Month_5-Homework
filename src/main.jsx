import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { store } from "./context/store";
import { BrowserRouter } from "react-router-dom";

const App = lazy(() => import("./App"));

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Suspense
      fallback={
        <>
          <h2>Loading...</h2>
        </>
      }
    >
      <Provider store={store}>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>
);
