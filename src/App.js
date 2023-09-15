import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import PropTypes from 'prop-types'
import TextForm from './components/TextForm';

function App() {
  return (
    <>
      <Navbar title = "LEARN REACT"/>
      <div className="container">
      <TextForm/>
      </div>
    </>
  );
}

Navbar.propTypes = {title:PropTypes.string.isRequired}
export default App;
