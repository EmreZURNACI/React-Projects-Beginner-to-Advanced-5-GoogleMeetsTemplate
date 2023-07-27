import { Provider } from "react-redux";
import { store } from './Store/Store.js';
import MeetsArea from "./MeetsArea.jsx";
function App() {
  return (
    <Provider store={store}>
      <MeetsArea/>
    </Provider>
  );
}

export default App;
