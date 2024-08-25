
import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideNav';
import AuthForm from './components/account/Login';

function App() {
  return (
    <main>
    <header>
    <Header />
    <div className='sidebar'>
    <Sidebar />
    </div>
    </header>
    
   
    <div className="content">
      <AuthForm />
      </div>
     </main>
  );
}

export default App;
