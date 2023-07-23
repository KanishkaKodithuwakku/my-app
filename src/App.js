import "./App.css";
import Users from "./components/Users";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <Users />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
