import { useRef } from 'react';
import './style.css';

function Navbar() {
    const BarsSide = useRef();
    const btnOpen = useRef();
    const btnClose = useRef();
    btnClose.current.style.dislay = 'none'
    const HandleOpenSide = () =>{
        btnClose.current.style.dislay = 'block'
        btnOpen.current.style.dislay = 'none'
        BarsSide.current.style.dislay = 'block'
    }
    const HandleCloseSide = () =>{
        btnClose.current.style.dislay = 'none'
        btnOpen.current.style.dislay = 'block'
        BarsSide.current.style.dislay = 'none'
    }
  return (
    <>
    <div className="Navbar">
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857963/download_fimwgc.png" alt="" />
        <ul>
            <li><h3>BOSH SAHIFA</h3></li>
            <li><h3>BIZ HAQIMIZDA</h3></li>
            <li><h3>BAJARILGAN ISHLAR</h3></li>
            <li><h3>KONTAKTLAR</h3></li>
            <li><button>UZ</button><button>RU</button></li>
        </ul>
    </div>
    <div className="BarsNav">
        <button onClick={HandleOpenSide} ref='btnOpen'><i className='fa-solid fa-bars'></i></button>
        <button onClick={HandleCloseSide} ref='btnClose'><i className='fa-solid fa-bars'></i></button>
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857963/download_fimwgc.png" alt="" />
    </div>
    <div className="BarsSide" ref='BarsSide'>
        <ul>
            <li><h3>BOSH SAHIFA</h3></li>
            <li><h3>BIZ HAQIMIZDA</h3></li>
            <li><h3>BAJARILGAN ISHLAR</h3></li>
            <li><h3>KONTAKTLAR</h3></li>
            <li><button>UZ</button><button>RU</button></li>
        </ul>
    </div>
    </>
  );
}

export default Navbar;