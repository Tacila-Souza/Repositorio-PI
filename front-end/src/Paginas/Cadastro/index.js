import Navbar from "../../Componentes/Navbar";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import axios from "axios";

function Cadastro() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Hook para redirecionar

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validação simples antes de enviar os dados
    if (!username || !email || !password) {
      alert("Por favor, preencha todos os campos.");
      return;
    }

    try {
      const response = await axios.post("http://127.0.0.1:5000/api/register", {
        username,
        email,
        password,
      });
      alert(response.data.message || "Cadastro realizado com sucesso!");
      navigate("/Paglogin"); // Redireciona para a página de Paglogin
    } catch (error) {
      if (error.response) {
        // Erro retornado pela API
        alert(`Erro: ${error.response.data.message || "Erro ao se cadastrar"}`);
      } else if (error.request) {
        // Erro de conexão com a API
        alert("Erro ao conectar com o servidor. Verifique se ele está ativo.");
      } else {
        // Outro erro
        alert(`Erro inesperado: ${error.message}`);
      }
    }
  };

  return (
    <>
      <Navbar />
      <div style={{ backgroundColor: "#dfe8ff", height: "650px", display: "flex", justifyContent: "center", alignItems: "center" }}>
        <div>
          <h1>Cadastro</h1>
          <form onSubmit={handleSubmit}>
            <div>
              <input
                type="text"
                placeholder="Nome de usuário"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div>
              <input
                type="password"
                placeholder="Senha"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <button type="submit">Cadastrar</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Cadastro;
