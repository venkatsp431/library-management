import logo from "./logo.svg";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Components/dashboard";
import { createContext, useEffect, useState } from "react";
import Addbook from "./Components/addBook";
import Editbook from "./Components/editBook";
import { useDispatch, useSelector } from "react-redux";
import { getData } from "./Controllerapi/apifunctions";
// export const Bookcontext = createContext(null);
function App() {
  const { books } = useSelector((state) => state.books);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData());
  }, [dispatch]);
  return (
    <div className="App">
      <Routes>
        <Route exact path="/" element={<Dashboard books={books} />} />
        <Route path="/add" element={<Addbook />} />
        <Route path="/edit" element={<Editbook />} />
      </Routes>
    </div>
  );
}

export default App;
