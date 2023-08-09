import React, { useEffect } from "react";
import "./App.css";
import Layouts from "./components/Layouts";
import NavigationBar from "./components/NavigationBar";
import TitleBar from "./components/TitleBar";
import Vans from "./components/Vans";
import useFetch from "./utils/useFetch";
import Spinner from "./components/Spinner";
import Alert from "./components/Alert";
import { useFilterReducerThunk } from "./utils/filterReducer.js";

function App() {
  const [state, dispatch] = useFilterReducerThunk();
  const [loading, error, result] = useFetch("/vans");


console.log('current state ',state);


   if (loading) return <Spinner />;
   if (error) return <Alert />;
   const vans = result
     ? result.filter(
         (van) => state.selected === 0 || van.category === state.selected
       )
     : null;


  return (
    <>
      <Layouts>
        <TitleBar title={`Explorer Our Van Options`} />

        <NavigationBar />

        <Vans collection={vans} />
      </Layouts>
    </>
  );
}

export default App;
