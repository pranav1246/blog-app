
import './App.css';
import Header from './components/Header';
// import Sidebar from './components/SideNav';
import AuthForm from './components/account/Login';
import DataProvider from './context/DataProvider';
import HomePage from './components/Home';
import CreatePost from './components/CreatePost';
import UpdatePost from './components/UpdatePost';
import Footer from './components/Footer';
import { BrowserRouter,Routes,Route } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <header>
    <Header />
    </header>
    <main>
    <DataProvider >
   
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
     <footer>
      <Footer />
    </footer>
     </BrowserRouter>
  );
}

export default App;
