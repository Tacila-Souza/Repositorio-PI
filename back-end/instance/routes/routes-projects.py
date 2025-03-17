from flask import Blueprint, jsonify, request
from models import db, User, Project
from datetime import datetime

# Criação de Blueprint para as rotas
auth_bp = Blueprint('auth', __name__)

# Rota para listar todos os projetos
@auth_bp.route('/api/projects', methods=['GET'])
def get_projects():
    try:
        projects = Project.query.all()
        projects_list = [{"id": p.id, "name": p.name, "start_date": p.start_date, "students": p.students} for p in projects]
        return jsonify(projects_list), 200
    except Exception as e:
        return jsonify({"message": f"Erro ao listar projetos: {str(e)}"}), 500

# Rota para criar um novo projeto
@auth_bp.route('/api/projects', methods=['POST'])
def create_project():
    data = request.get_json()

    # Validar dados
    if not data.get('name') or not data.get('students') or not data.get('supervisor'):
        return jsonify({"message": "Nome, alunos e orientador são obrigatórios!"}), 400

    try:
        # Criação do novo projeto
        new_project = Project(
            name=data['name'],
            start_date=datetime.strptime(data['start_date'], "%Y-%m-%d") if 'start_date' in data else datetime.utcnow(),
            logo=data.get('logo', ''),
            students=data['students'],
            supervisor=data['supervisor'],
            problem_description=data['problem_description'],
            solution_description=data['solution_description'],
            images=data.get('images', ''),
            documentation=data.get('documentation', ''),
            user_id=data['user_id']  # Associa o projeto a um usuário
        )
        
        db.session.add(new_project)
        db.session.commit()
        
        return jsonify({"message": "Projeto criado com sucesso!"}), 201
    except Exception as e:
        db.session.rollback()  # Garantir rollback em caso de erro
        return jsonify({"message": f"Erro ao criar projeto: {str(e)}"}), 500

# Rota para editar um projeto
@auth_bp.route('/api/projects/<int:id>', methods=['PUT'])
def update_project(id):
    data = request.get_json()
    project = Project.query.get_or_404(id)

    # Atualizando os dados do projeto
    project.name = data.get('name', project.name)
    project.start_date = datetime.strptime(data.get('start_date', project.start_date.strftime("%Y-%m-%d")), "%Y-%m-%d")
    project.logo = data.get('logo', project.logo)
    project.students = data.get('students', project.students)
    project.supervisor = data.get('supervisor', project.supervisor)
    project.problem_description = data.get('problem_description', project.problem_description)
    project.solution_description = data.get('solution_description', project.solution_description)
    project.images = data.get('images', project.images)
    project.documentation = data.get('documentation', project.documentation)

    try:
        db.session.commit()
        return jsonify({"message": "Projeto atualizado com sucesso!"}), 200
    except Exception as e:
        db.session.rollback()  # Garantir rollback em caso de erro
        return jsonify({"message": f"Erro ao atualizar projeto: {str(e)}"}), 500

# Rota para excluir um projeto
@auth_bp.route('/api/projects/<int:id>', methods=['DELETE'])
def delete_project(id):
    project = Project.query.get_or_404(id)

    try:
        db.session.delete(project)
        db.session.commit()
        return jsonify({"message": "Projeto deletado com sucesso!"}), 200
    except Exception as e:
        db.session.rollback()  # Garantir rollback em caso de erro
        return jsonify({"message": f"Erro ao deletar projeto: {str(e)}"}), 500

# Rota para listar todos os usuários (admins ou como necessário)
@auth_bp.route('/api/users', methods=['GET'])
def get_users():
    try:
        users = User.query.all()
        users_list = [{"id": u.id, "username": u.username, "email": u.email} for u in users]
        return jsonify(users_list), 200
    except Exception as e:
        return jsonify({"message": f"Erro ao listar usuários: {str(e)}"}), 500

# Rota para criar um novo usuário (registrar)
@auth_bp.route('/api/users', methods=['POST'])
def create_user():
    data = request.get_json()

    # Validar dados
    if not data.get('username') or not data.get('email') or not data.get('password'):
        return jsonify({"message": "Nome de usuário, e-mail e senha são obrigatórios!"}), 400

    try:
        # Criação do novo usuário
        new_user = User(username=data['username'], email=data['email'], password=data['password'])
        
        db.session.add(new_user)
        db.session.commit()

        return jsonify({"message": "Usuário registrado com sucesso!"}), 201
    except Exception as e:
        db.session.rollback()  # Garantir rollback em caso de erro
        return jsonify({"message": f"Erro ao registrar usuário: {str(e)}"}), 500
