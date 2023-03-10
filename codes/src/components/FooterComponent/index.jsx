import './style.css';

function FooterComponent() {
  return (
    <div className="FooterComponent">
        <h1>Biz aloqadamiz</h1>
        <p>Ma'lumotlaringizni qoldiring va biz tez orada siz bilan bog'lanamiz</p>
        <div className="FooterCompBox">
            <div className="FooterCompTexts">
                <h2>+998 99 020 52 60</h2>
                <h4>Bizning manzilimiz:</h4>
                <p>Tashkent shaxar, Olmazor tumani, Kichik halqa yo'li, 72 A uy.</p>
                <div className="FooterCompIcons">
                    <i className='fa-brands fa-facebook'></i>
                    <i className='fa-brands fa-instagram'></i>
                    <i className='fa-brands fa-telegram'></i>
                </div>
            </div>
            <form className="FooterCompInbox">
                <input type="text" placeholder='Ism/Familiya'/>
                <input type="text" placeholder='+99893 000 00 00'/>
                <button>Yuborish</button>
            </form>
        </div>
    </div>
  );
}

export default FooterComponent;