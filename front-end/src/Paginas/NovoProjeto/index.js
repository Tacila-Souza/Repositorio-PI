import React, { useState } from "react";
import ApiProjeto from "../../Services/api-cadastro-projeto"; // Importando a função de requisição
import "bootstrap/dist/css/bootstrap.min.css";
import "./NovoProjeto.css";

function NovoProjeto({ onClose }) {
  const [projectData, setProjectData] = useState({
    name: "",
    creationDate: { month: "01", year: "2024" },
    logo: null,
    students: "",
    advisor: "",
    problem: "",
    solution: "",
    images: [],
    documentation: "",
    isFeatured: false,
    featuredPosition: "",
    author: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;

    setProjectData((prev) => {
      if (name === "month" || name === "year") {
        return { ...prev, creationDate: { ...prev.creationDate, [name]: value } };
      } else if (type === "checkbox") {
        return { ...prev, [name]: checked };
      } else if (type === "file") {
        return { ...prev, [name]: files ? Array.from(files) : [] };
      }
      return { ...prev, [name]: value };
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Chamando o método criarProjeto da API e passando os dados do formulário
      const resultMessage = await ApiProjeto.criarProjeto(projectData);
      setMessage(resultMessage);
    } catch (error) {
      setMessage(`Erro ao adicionar o projeto: ${error.message}`);
    }
  };

  return (
    <div className="modal-overlay">
      <div className="modal-container">
        <div className="modal-header">
          <h5 className="modal-title">Adicionar Novo Projeto</h5>
          <button className="btn-close" onClick={onClose}></button>
        </div>

        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Nome do Projeto</label>
              <input
                type="text"
                className="form-control"
                id="name"
                name="name"
                value={projectData.name}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label className="form-label">Data de Criação</label>
              <div className="d-flex gap-2">
                <select
                  name="month"
                  value={projectData.creationDate.month}
                  onChange={handleChange}
                  className="form-select"
                >
                  {[..."01 02 03 04 05 06 07 08 09 10 11 12".split(" ")].map((m, i) => (
                    <option key={i} value={m}>
                      {new Date(2000, i).toLocaleString("pt-BR", { month: "long" })}
                    </option>
                  ))}
                </select>
                <select
                  name="year"
                  value={projectData.creationDate.year}
                  onChange={handleChange}
                  className="form-select"
                >
                  {Array.from({ length: new Date().getFullYear() - 1999 }, (_, i) => 2000 + i).map((year) => (
                    <option key={year} value={year}>{year}</option>
                  ))}
                </select>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="logo" className="form-label">Logo</label>
              <input
                type="file"
                className="form-control"
                id="logo"
                name="logo"
                onChange={handleChange}
              />
            </div>

            <div className="mb-3">
              <label htmlFor="students" className="form-label">Alunos</label>
              <input
                type="text"
                className="form-control"
                id="students"
                name="students"
                value={projectData.students}
                onChange={handleChange}
                required
              />
            </div>

            <div className="mb-3">
              <label htmlFor="problem" className="form-label">Problemática</label>
              <textarea
                className="form-control"
                id="problem"
                name="problem"
                value={projectData.problem}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <label htmlFor="solution" className="form-label">Solução</label>
              <textarea
                className="form-control"
                id="solution"
                name="solution"
                value={projectData.solution}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <div className="mb-3">
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="isFeatured"
                  name="isFeatured"
                  checked={projectData.isFeatured}
                  onChange={handleChange}
                />
                <label className="form-check-label" htmlFor="isFeatured">
                  Destaque na Home
                </label>
              </div>
            </div>

            <div className="modal-footer">
              <button type="button" className="btn btn-secondary" onClick={onClose}>Fechar</button>
              <button type="submit" className="btn btn-primary">Adicionar Projeto</button>
            </div>
          </form>
          {message && <div className="alert alert-info mt-3">{message}</div>}
        </div>
      </div>
    </div>
  );
}

export default NovoProjeto;
