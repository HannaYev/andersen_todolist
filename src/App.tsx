import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { StartPage } from "./components/pages/startPage1/StartPage";
import { Layout } from "./components/pages/layout/Layout";
import { TodosPage } from "./components/pages/todosPage2/TodosPage";
import { ActiveTodosPage } from "./components/pages/activePage3/SummaryPage";
import { useDispatch } from "react-redux";
import { changeName } from "./store/slices/name";
import { replaceAllTodos } from "./store/slices/todos";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    const name = localStorage.getItem("userName");
    const todosJson = localStorage.getItem("todos");
    const todos = JSON.parse(todosJson|| '{}')
    if (name) {
      dispatch(changeName(name));
    }

    if(todos){
      dispatch(replaceAllTodos(todos))
    }
  }, []);

  return (
    <Routes>
      <Route path="/" element={<StartPage />}/>
      <Route path="todos" element={<Layout />}>
        <Route index element={<TodosPage />}></Route>
        <Route path="summary" element={<ActiveTodosPage />}></Route>
      </Route>
    </Routes>
  );
}

export default App;
