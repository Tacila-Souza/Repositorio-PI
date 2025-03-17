from flask import Flask, jsonify, request  # Certifique-se de importar o 'request'
from flask_cors import CORS
from models import db
from routes import auth_bp  # Importando o Blueprint de rotas

# Criação da instância do Flask
app = Flask(__name__)

# Configurações do banco de dados e segurança
app.config['SECRET_KEY'] = 'minhasupersecreta123'  # Para sessões
app.config['SQLALCHEMY_DATABASE_URI'] = 'sqlite:///site.db'  # Usando SQLite
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = False

# Habilitar o CORS para todas as rotas
CORS(app)

# Inicializando o banco de dados
db.init_app(app)

# Registrando o Blueprint para as rotas de autenticação e projetos
app.register_blueprint(auth_bp)

# Endpoint para registrar o projeto
@app.route('/api/projects', methods=['POST'])
def register_project():
    try:
        data = request.get_json()  # Acessando os dados enviados no corpo da requisição
        print(data)  # Apenas para verificar no console

        # Lógica de criação do projeto...

        return jsonify({"message": "Projeto criado com sucesso!"}), 201
    except Exception as e:
        return jsonify({"message": f"Erro ao registrar o projeto: {str(e)}"}), 500

# Rodando a aplicação Flask
if __name__ == '__main__':
    app.run(debug=True)
