import React from "react";
import { Routes, Route } from "react-router-dom";
import "./App.css";
import Effects from "./components/useEffect/Effects";
import MainRouter from "./components/reactRouter/MainRouter";
import Render from "./components/conditionalRender/Render";
import LazyMain from "./components/lazy/LazyMain";
import Counter from "./components/useMemo/Counter";
import CallbackCounter from './components/useCallback/CallbackCouter'
import Parent from './components/ReactMemo/Parent'
import ComponentA from "./components/useContext/ContextA";
import Suhairqus from "./components/suhair/Suhairqus";
import UseReduser from "./components/useReducer/UseReduser";


function App() {
  return <>
  <UseReduser />
  </>;
}

export default App;
