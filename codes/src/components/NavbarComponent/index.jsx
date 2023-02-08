import './style.css';

function Navbar() {
    const HandleOpenSide = () =>{

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
        <button onClick={HandleOpenSide}><i className='fa-solid fa-bars'></i></button>
        <img src="https://res.cloudinary.com/dnuh1ejtz/image/upload/v1675857963/download_fimwgc.png" alt="" />
    </div>
    <div className="BarsSide">
        
    </div>
    </>
  );
}

export default Navbar;