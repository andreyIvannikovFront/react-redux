import {
  Routes,
  Route,
} from "react-router-dom";
import Header from './components/Header';
import Main from './components/Main';
import About from './Pages/About';
import Heroes from './Pages/Home';
import Hero from './Pages/Hero';
import './App.css';




function App() {
  return (
    <>
      <div className='app'>
        <Header />
        <div className='wrapper'>
          <Main>
            <Routes>
              <Route path='/' element={<About />}></Route>
              <Route path='/heroes' element={<Heroes />}></Route>
              <Route path='/hero/:id' element={<Hero />}></Route>
            </Routes>
          </Main>
        </div>
      </div>
    </>
  );
}

export default App;
