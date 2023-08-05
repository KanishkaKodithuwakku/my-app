import React, { useState } from "react";
import "./App.css";
import Layouts from "./components/Layouts";
import NavigationBar from "./components/NavigationBar";
import TitleBar from "./components/TitleBar";
import Vans from "./components/Vans";

function App() {
const [category, setCategory] = useState(null);
  
  return (
    <>
      <Layouts>
        <TitleBar title={`Explorer Our Van Options`} />

        <NavigationBar setCategory={setCategory} />

        <Vans category={category} />
      </Layouts>
    </>
  );
}

export default App;
