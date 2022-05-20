import './App.css';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';
import Login from './pages/Login';

function App() {
  return (
    <>
      <Navbar>
        <Home></Home>
        <About></About>
        <Contact></Contact>
        <Services></Services>
        <Login></Login>
      </Navbar>
      
    </>
  );
}

export default App;
