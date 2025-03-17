import logonavbar from "../../imagens/logo-navbar.svg";
import iconeusuario from "../../imagens/icone_usuario.svg";
import "./Navbar.css";
import { Link } from 'react-router-dom';

function navbar() {
  return (
    <>
        
    <noscript>You need to enable JavaScript to run this app.</noscript>
    <div id="root"></div>


    <div style={{backgroundColor:'#0A3DBF', height:'22px'}}></div>


    
    <nav className="navbar navbar-expand-sm" style={{ height: '65px', backgroundColor:'white' }}>
      
      <div className="container">

        {/*logo*/}
        <a className="navbar-brand" href="/">
        <img src= {logonavbar} alt="Logo" style={{ height: '45px' }}/>
        </a>

        {/*Links*/}  
        <div style={{ padding: '0 15px 0 15px' }}>
          <Link id="azul1" className="navbar-brand " to='/' style={{ fontWeight: 'bold', padding: '0 15px 0 15px'}}>INÍCIO</Link>
          <Link id="azul1" className="navbar-brand" to='/Etes' style={{ fontWeight: 'bold' , padding: '0 15px 0 15px'}}>ETE´S</Link>
          <Link id="azul1" className="navbar-brand" to='/Projeto' style={{ fontWeight: 'bold' , padding: '0 15px 0 15px'}} >DIRETÓRIO</Link>
          <Link id="azul1" className="navbar-brand" to='/Sobre' style={{ fontWeight: 'bold', padding: '0 15px 0 15px' }} >SOBRE</Link>
        </div>

        {/*Login*/}
        <div className="row justify-content-center" id="icone-login" style={{textAlign:'center', color:'#0a3dbf', margin:'0', padding:'0'}}>
          <div class="">         
            <Link id="azul1" className="navbar-brand" to='/Paglogin' style={{ fontWeight: 'bold', padding: '0 15px 0 15px' }} >
            <img className="img-fluid" src= {iconeusuario} alt="Logo" style={{ height: '35px', margin:"0", padding:"0"}}/>
            </Link>
            <a className="nav-link" id="link-login"  href="/Paglogin"> LOGIN</a>
          </div>
        </div>

      </div>{/*container*/}

    </nav>

    </>
  )
}

export default navbar;



