import  Navbar  from "../../Componentes/Navbar";
import "./Projeto.css";

import logonavbar from "../../imagens/logo-navbar2.png";

import img1 from "../../imagens/projeto-img-1.png";
import img2 from "../../imagens/projeto-img-2.png";
import img3 from "../../imagens/projeto-img-3.png";
import img4 from "../../imagens/projeto-img-4.png";
import img5 from "../../imagens/projeto-img-5.png";
import img6 from "../../imagens/projeto-img-6.png";

import pdf from "../../imagens/pdf.png";
import github from "../../imagens/github.png";





function Projeto () {
    return (
        <>

        <Navbar/>

        <body style={{backgroundColor:'#dfe8ff'}}>

            <div className="container " id="hazul">

                <div className="row" style={{padding: '20px 0'}}>

                    <div className="col-lg-5 col-md-12 col-sm-12" style={{margin: ''}}>
                        <img src= {logonavbar} style={{ height: '80px' }}/>
                    </div>

                    <div className="col-lg-7 col-md-12 col-sm-12" style={{margin: '' , background:'' , textAlign:'end'}}>
                        <h2>Projeto: Conect ETE PE</h2>
                        <h2>Conclusão: 2025.1</h2>
                    </div>

                </div>
                
                <div className="row text-center" style={{padding: '20px 50px', margin:'0',backgroundColor: 'white', borderRadius: '20px'}}>
                <h4>Análise e Desenvolvimento de Sistemas - Subsequente, Início: 2024.1</h4>
                <h4>Alunos: Allison Paulino, Joana Dark, Tacila Souza e Thaisy Ferreira </h4>
                <br></br>
                <h4>Mentora: Cleuselite Rilamar</h4>
                <h4>Descrição do projeto:</h4>
                <h4>O Repositório conect ete pe é uma base de dados online que objetiva reunir, de forma organizada e acessível, a produção científica e documental das ETE´S de 
                    toda a RMR, com o intuito de torná-la acessível aos pesquisadores e ao grande público nacional e internacional.</h4>
                </div>

                <div className="row text-center justify-content-center" style={{margin:'30px 0 20px 0'}}>
                    <h4 id="hazul">Projetos em detalhes:</h4>
                </div>


                <div className="row text-center" style={{}}>
                    
                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img1} className="img-fluid img-projeto" style={{}}></img>
                        <h4 id="hazul" className="pt-3" style={{}}>Página inicial</h4>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img2} className="img-fluid img-projeto" style={{}}></img>
                        <h4 id="hazul" className="pt-3" >Página inicial</h4>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img3} className="img-fluid img-projeto" style={{}}></img>
                        <h4 id="hazul" className="pt-3">Página sobre</h4>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img4} className="img-fluid img-projeto" style={{}}></img>
                        <h4 id="hazul" className="pt-3">Página login</h4>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img5} className="img-fluid img-projeto" style={{}}></img>
                        <h4 id="hazul" className="pt-3">Página criar conta</h4>
                        </a>
                    </div>

                    <div className="col-lg-4 col-md-6 col-sm-12" >
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={img6} className="img-fluid img-projeto" style={{}}></img>
                        <h4 id="hazul" className="pt-3">Página do projeto</h4>
                        </a>
                    </div>

                </div>{/*ROW IMAGENS 1*/}

                
                <div className="row justify-content-center" style={{marginTop:'20px'}}>

                <div className="row text-center justify-content-center" style={{marginBottom:'20px'}}>
                    <div className="col-10">
                    <h4 id="hazul" style={{display:'block', backgroundColor:'white' , borderRadius:'10px', padding:'5px '}}>Clique nos ícones abaixo para acessar as documentações</h4>
                    </div>
                    
                </div>


                    <div className="col-lg-3 col-sm-12 " style={{backgroundColor:'#0A3BBA', borderRadius:'10px', color:'white', padding:'10px 75px'}}>   
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={pdf} className="img-fluid align-items-start" style={{height: '30px', paddingRight:'10px'}}></img>
                        <h6 style={{display:'inline', color:'white'}}>Documentação</h6>
                        </a>
                    </div>

                <div className="col-1"></div>

                    <div className="col-lg-3 col-sm-12" style={{backgroundColor:'#0A3BBA', borderRadius:'10px', color:'white', padding:'10px 85px'}}>   
                        <a href="" url="" style={{textDecoration: 'none', margin:'0', padding:'0'}} >
                        <img src={github} className="img-fluid align-items-start" style={{height: '30px', paddingRight:'10px'}}></img>
                        <h6 style={{display:'inline', color:'white'}}>Código fonte</h6>
                        </a>
                    </div>


                </div>


                <div className="row p-3">
                     <div className="col-12"> 

                     </div>
                </div>

    
            </div>{/*CONTAINER*/}
  

        </body>
    
      
        </>
    )
}

export default Projeto;