import React, { useState } from "react";
import { Search } from "lucide-react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Admin.css";
import NovoProjeto from "../NovoProjeto/index"; // Importação do modal

function Admin() {
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearch = () => {
    console.log("Searching for:", searchTerm);
    // Aqui você pode implementar a lógica de pesquisa futuramente
  };

  const handleAddProject = () => {
    setShowModal(true); // Abre o modal ao clicar no botão
  };

  return (
    <body style={{ backgroundColor: "#dfe8ff" }}>
      <div className="container py-4">
        <div className="card shadow-sm p-4">
          <h1 className="mb-4">Admin de Projetos</h1>

          {/* Botões das funcionalidades */}
          <div className="d-flex gap-3 mb-4">
          <button className="btn btn-primary" onClick={() => setShowModal(true)}>
        Adicionar Novo Projeto
      </button>
            <button className="btn btn-warning">Editar Projeto</button>
            <button className="btn btn-danger">Listar/Excluir Projetos</button>
          </div>

          {/* Barra de pesquisa */}
          <div className="input-group">
            <input
              type="text"
              className="form-control"
              placeholder="Pesquise um projeto"
              value={searchTerm}
              onChange={handleSearchChange}
            />
            <button className="btn btn-secondary" onClick={handleSearch}>
              <Search className="me-2" /> Pesquisar
            </button>
          </div>
        </div>
      </div>

      {/* Modal para adicionar um novo projeto */}
      {showModal && <NovoProjeto onClose={() => setShowModal(false)} />}
    </body>
  );
}

export default Admin;
