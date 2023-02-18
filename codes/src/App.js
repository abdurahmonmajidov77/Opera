import './App.css';
import Header from './components/HeaderComponent';
import Navbar from './components/NavbarComponent';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <button className='Tel'><i className='fa-solid fa-phone-volume'></i></button>
      <div className='modalTel'>
        
      </div>
    </div>
  );
}

export default App;
