import { Provider } from "react-redux"
import { store } from "./store"
import MainPage from "./page/main"

import "antd/dist/antd.min.css"

function App() {
  return (
    <Provider store={store}>
      <MainPage/>
    </Provider>
  );
}

export default App
