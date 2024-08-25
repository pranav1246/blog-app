
import './App.css';
import Header from './components/Header';
// import Sidebar from './components/SideNav';
import AuthForm from './components/account/Login';
import DataProvider from './context/DataProvider';
import HomePage from './components/Home';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
    <main>
    <DataProvider >
    <header>
    <Header />
    </header>
    <div className="content">
    <Routes>
    <Route path='/auth' element={<AuthForm />} />
    <Route path='/' element={<HomePage />} />
    <Route path='/create' element={<CreatePost />} />
    <Route path='/update/:id' element={<UpdatePost />} />
     </Routes>
      </div>
    </DataProvider>
     </main>
     </BrowserRouter>
  );
}

export default App;
