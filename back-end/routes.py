from flask import Blueprint, request, jsonify
from flask_bcrypt import Bcrypt
from models import db, User

###############################USUÁRIOS###############################

# Inicializando o Blueprint para as rotas
auth_bp = Blueprint('auth', __name__)
bcrypt = Bcrypt()

# Rota de Cadastro
@auth_bp.route('/api/register', methods=['POST'])
def register():
    data = request.get_json()  # Pega os dados JSON enviados do frontend

    username = data.get('username')
    email = data.get('email')
    password = data.get('password')

    # Verificar se o usuário já existe
    user_exists = User.query.filter_by(username=username).first()
    if user_exists:
        return jsonify({'message': 'Usuário já existe!'}), 400

    # Criptografar senha
    hashed_password = bcrypt.generate_password_hash(password).decode('utf-8')

    # Criar novo usuário
    new_user = User(username=username, email=email, password=hashed_password)
    db.session.add(new_user)
    db.session.commit()

    return jsonify({'message': 'Usuário criado com sucesso!'}), 201

# Rota de Login
@auth_bp.route('/api/login', methods=['POST'])
def login():
    data = request.get_json()  # Pega os dados JSON enviados do frontend
    
    username = data.get('username')
    password = data.get('password')

    user = User.query.filter_by(username=username).first()

    if user and bcrypt.check_password_hash(user.password, password):
        # Em um caso real, você geraria um token JWT aqui, mas por enquanto retornaremos um simples sucesso
        return jsonify({'message': 'Login bem-sucedido!', 'user': {'username': user.username}}), 200

    return jsonify({'message': 'Usuário ou senha inválidos!'}), 401
