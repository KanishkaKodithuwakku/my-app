import React, { useState } from "react";
import "./App.css";
import Layouts from "./components/Layouts";
import NavigationBar from "./components/NavigationBar";
import TitleBar from "./components/TitleBar";
import Vans from "./components/Vans";
import useFetch from "./utils/useFetch";
import Spinner from "./components/Spinner";
import Alert from "./components/Alert";

function App() {
  const [loading, result, error] = useFetch("/vans");
  console.log(result);

  // if (loading) return <Spinner />;
  // if (error) return <Alert />;
  // const vans = result ? result : null;
  //const [category, setCategory] = useState(null);

  return (
    <>
      <Layouts>
        <TitleBar title={`Explorer Our Van Options`} />

        {/* <NavigationBar /> */}

        {/* <Vans collection={vans} /> */}
      </Layouts>
    </>
  );
}

export default App;
