import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layouts';
import {Route, Routes} from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout />}>
        <Route index element = {<Home />} />
        <Route path='about' element = {<About />} />
      </Route>
      </Routes>
    </>
  );
}

export default App;
