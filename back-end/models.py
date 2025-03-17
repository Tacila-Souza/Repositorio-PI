from flask_sqlalchemy import SQLAlchemy
from datetime import datetime

############################### CONFIG BANCO DE DADOS ###############################
db = SQLAlchemy()

# Modelo de Usuário (User)
class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(120), unique=True, nullable=False)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(60), nullable=False)
    
    # Relacionamento: um usuário pode ter vários projetos
    projects = db.relationship('Project', backref='author', lazy=True)

    def __repr__(self):
        return f"<User {self.username}>"

# Modelo de Projeto (Project)
class Project(db.Model):
    id = db.Column(db.Integer, primary_key=True)  # ID do projeto
    name = db.Column(db.String(255), nullable=False)  # Nome do projeto
    start_date = db.Column(db.Date, nullable=False, default=datetime.utcnow)  # Data de início com valor padrão
    logo = db.Column(db.String(255), nullable=True)  # Logo (nome do arquivo da imagem ou URL)
    students = db.Column(db.String(255), nullable=False)  # Alunos (como uma string de nomes ou outra estrutura)
    supervisor = db.Column(db.String(255), nullable=False)  # Orientador
    problem_description = db.Column(db.Text, nullable=False)  # Descrição da problemática
    solution_description = db.Column(db.Text, nullable=False)  # Descrição da solução
    images = db.Column(db.String(255), nullable=True)  # Imagens (URL ou nome do arquivo)
    documentation = db.Column(db.String(255), nullable=True)  # Link para documentação (ou nome do arquivo)
    
    # Chave estrangeira para associar o projeto a um usuário (autor)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)

    def __init__(self, name, start_date, logo, students, supervisor, problem_description, solution_description, images, documentation, user_id):
        self.name = name
        self.start_date = start_date
        self.logo = logo
        self.students = students
        self.supervisor = supervisor
        self.problem_description = problem_description
        self.solution_description = solution_description
        self.images = images
        self.documentation = documentation
        self.user_id = user_id

    def __repr__(self):
        return f"<Project {self.name}>"
