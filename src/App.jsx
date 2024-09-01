import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Head />
        <Body />
      </div>
    </Provider>

    /* 
    head
    body
    - Sidebar
      - Menu Items
    - Main Container
      - Button List
      - Video container
      - Video Card
    -

    */
  );
}

export default App;
