import logo from './logo.svg';
import './App.scss';
import Layout from './components/Layouts';
import {Route, Routes} from 'react-router-dom';

function App() {
  return (
    <>
      <Routes>
        <Route path='/' element = {<Layout />}/>
      </Routes>
    </>
  );
}

export default App;
