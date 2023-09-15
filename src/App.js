import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';
import About from './components/About';

function App() {
  return (
    <>
      <Navbar title = "LEARN REACT"/>
      <div className="container my-5">
      {/* <TextForm/> */}
      <About/>
      </div>
    </>
  );
}

Navbar.propTypes = {title:PropTypes.string.isRequired}
export default App;
