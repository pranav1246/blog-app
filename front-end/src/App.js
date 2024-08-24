
import './App.css';
import Header from './components/Header';
import Sidebar from './components/SideNav';
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
       
        Your main content goes here...
      </div>
     </main>
  );
}

export default App;
