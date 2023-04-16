import React, { useEffect } from "react";
import "./App.css";
import NavBar from "../../components/nav-bar/nav-bar";
import { APP_TITLE, PAGES } from "./App.constants";

function App() {
  useEffect(() => {
    document.title = APP_TITLE;
  }, []);

  return (
    <div>
      <NavBar pages={PAGES}></NavBar>
    </div>
  );
}

export default App;
