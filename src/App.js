import "./App.css";
import Users from "./components/Users";
import { UserContextProvider, useUserContext } from "./context/userContext";

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-md-4 mt-5">
            <UserContextProvider>
              <Users />
            </UserContextProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
