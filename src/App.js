import './App.css';
import TopNavBar from './Navbar';
import Vans from './Vans';
import Container from "react-bootstrap/Container";


function App() {
  return (
    <Container>
    
        <TopNavBar/>

        <Vans />
      
    </Container>
  );
}

export default App;

