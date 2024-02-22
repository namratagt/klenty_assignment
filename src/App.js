import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./components/Login";
import Cart from "./components/Cart";
import Home from "./components/Home";
import store from "./store/store";
import { Provider } from "react-redux";
function App() {
  const baseUrl = "http://localhost:8000";
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout baseUrl={baseUrl} />}>
              <Route index element={<Home baseUrl={baseUrl} />} />
            </Route>
            <Route path="/login" element={<Login />} />
            <Route path="/cart" element={<Cart baseUrl={baseUrl} />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;
