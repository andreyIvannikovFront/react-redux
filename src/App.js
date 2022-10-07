import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import Header from './components/Header';
import Main from './components/Main';
import About from './Pages/About';
import Home from './Pages/Home';
import './App.css';


const routers = [
  { path: '/', element: <About />  },
  { path: '/home', element: <Home />  },
]

const router = createBrowserRouter(routers)

function App() {
  return (
    <>
        <div className='app'>
          <Header />  
          <Main>
            <RouterProvider router={router} />
          </Main>
         
        </div>
    </>
  );
}

export default App;
