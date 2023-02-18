import { useRef } from 'react';
import './App.css';
import Header from './components/HeaderComponent';
import Navbar from './components/NavbarComponent';

function App() {
  const OpenModalUp = useRef()
  const ModalTel = useRef()
  const CloseModalUp = useRef()
  const OpenModal = () =>{

  }
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <button onClick={OpenModal} ref={OpenModalUp} className='Tel'><i className='fa-solid fa-phone-volume'></i></button>
      <button onClick={OpenModal} ref={CloseModalUp} className='TelUp'><i className='fa-solid fa-xmark'></i></button>
      <form className='modalTel' ref={ModalTel}>
        <h3>Telefon raqamingizni qoldiring va biz sizga tez orada aloqaga chiqamiz</h3>
        <input placeholder='+99893 000 00 00' required type="number"/>
        <button type='submit'>Yuborish</button>
        <p>Yoki siz bizga o'zingaz aloqaga chiqishingiz mumkin</p>
        <h4>+99893 535 00 44</h4>
      </form>
    </div>
  );
}

export default App;
