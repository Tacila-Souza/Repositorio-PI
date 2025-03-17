import { Link, useNavigate } from "react-router-dom";
import Navbar from "../../Componentes/Navbar";
import React, { useState } from "react";
import "./Paglogin.css";

  //Modal
import Modal from '../../Componentes/Modal';
import NovoProjeto from '../NovoProjeto';



function Paglogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redirecionar

  const handleLogin = (e) => {
    e.preventDefault();
    // Aqui você pode integrar com sua API para autenticação
    // Para fins de demonstração, estamos apenas redirecionando
    navigate("/Admin"); // Redireciona para a página de novo projeto
  };


  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#dfe8ff", height: "650px" }}>
        <div className="container">
          <div className="row justify-content-center pb-3">
            <div className="col-8">
              <h2 style={{ marginTop: "60px", textAlign: "center" }} id="hazul">Fazer Login</h2>
              <form onSubmit={handleLogin}>
                <div className="mb-3 mt-3">
                  <label htmlFor="email">Digite seu e-mail:</label>
                  <input
                    type="email"
                    className="form-control"
                    id="email"
                    placeholder=""
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="mb-3">
                  <label htmlFor="pwd">Digite sua senha:</label>
                  <input
                    type="password"
                    className="form-control"
                    id="pwd"
                    placeholder=""
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                </div>
                <div className="form-check mb-3">
                  <label className="form-check-label">
                    <input className="form-check-input" type="checkbox" name="remember" /> Lembrar-me
                  </label>
                </div>
                <button type="submit" className="btn btn-primary centralizar" id="centralizar">Entrar</button>
              </form>
              <div className="mt-3 mb-3">
                <p className="text-body-secondary">Esqueceu a senha?</p>
                <a href="#" className="px-2">Clique aqui</a>
              </div>
              <div className="text-center" style={{ marginTop: "45px" }}>
                <p className="text-body-secondary">Não se cadastrou ainda?</p>
                <Link to="/cadastro" className="px-2">Crie sua conta</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Paglogin;
