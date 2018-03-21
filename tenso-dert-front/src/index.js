import React from "react"
import ReactDOM from "react-dom"
import { Provider } from "react-redux"
import registerServiceWorker from "./registerServiceWorker"

// Own
import store from "store/storeCreator"
import App from "./App"

ReactDOM.render(
  (<Provider store={store}>
    <App />
  </Provider>),
  document.getElementById("root"))
registerServiceWorker()
