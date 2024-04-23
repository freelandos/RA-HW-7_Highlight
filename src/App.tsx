import { useState } from "react";
import { List } from "./components/List";
import { data } from "./data";
import "./App.css";

function App() {
  const [list] = useState(data);

  return <List list={list} />
}

export default App;