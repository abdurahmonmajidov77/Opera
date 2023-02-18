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
        <h3>Telefon raqamingizni qoldiring va biz sizga tez orada aloqaga chiqamiz</h3>
        <input placeholder='+99893 000 00 00'/>
        <buttn>Yuborish</buttn>
        <p>Yoki siz bizga o'zingaz aloqaga chiqishingiz mumkin</p>
        <h4>+99893 535 00 44</h4>
      </div>
    </div>
  );
}

export default App;
