import "./App.css";
import { Route, Routes } from "react-router-dom";
import Customers from "./pages/Customers";
import Favourites from "./pages/Favourites";
import Navbar from "./components/Navbar";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from './redux/reducers/index'

const store = createStore(reducer);

function App() {
  return (
    <div style={{padding: '0px 30px'}}>
      <Provider store={store}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Customers />} />
          <Route path="/favourites" element={<Favourites />} />
        </Routes>
      </Provider>
    </div>
  );
}

export default App;
