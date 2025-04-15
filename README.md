Sistema de Agendamento Médico
Descrição
Este projeto é um Sistema de Agendamento Médico que permite o cadastro de pacientes, médicos e especialidades médicas. A API possibilita o agendamento de consultas, com filtros de pesquisa por médico, paciente, data e especialidade. A validação de horário livre é realizada antes de agendar uma consulta.

Funcionalidades
Cadastro de Usuários:

Pacientes e médicos podem ser cadastrados.

CRUD de Agendamentos:

Criar, listar, editar e remover agendamentos de consultas médicas.

Filtros de Agendamentos:

Filtros por médico, paciente, data e especialidade.

Validação de Horário Livre:

Antes de agendar uma consulta, verifica-se se o horário desejado está disponível.

Tecnologias Utilizadas
NestJS: Framework Node.js para construção de APIs.

PostgreSQL: Banco de dados relacional.

Docker: Contêineres para facilitar o desenvolvimento e deploy.

Clean Architecture: Organização de código seguindo a arquitetura limpa.

Swagger: Documentação interativa da API.

class-validator: Validações de entrada de dados.

Pré-requisitos
Docker: Necessário para rodar o PostgreSQL e a aplicação NestJS.

Node.js: Requerido para o desenvolvimento e testes locais.

PostgreSQL: Banco de dados para persistir dados de agendamentos, usuários e especialidades.

Como Rodar o Projeto

1. Clonar o repositório

```bash
git clone https://github.com/usuario/repositorio.git
cd repositorio
```

2. Construir os containers com o Docker
   Execute o seguinte comando para subir o banco de dados PostgreSQL:

```bash
docker-compose up -d
```

3. Instalar as dependências
   Instale as dependências do projeto NestJS:

```bash
npm install
```

4. Rodar a aplicação
   Agora, você pode iniciar o servidor NestJS:

```bash
npm run start:dev
```

Isso fará o servidor NestJS rodar na URL http://localhost:3000.

5. Acessar a documentação via Swagger
   Após rodar a aplicação, você pode acessar a documentação interativa da API com Swagger em:

```bash
http://localhost:3000/api
```

Endpoints
POST /users
Cadastro de usuários (médico ou paciente).

Body:

```bash
{
  "name": "João Silva",
  "email": "joao@exemplo.com",
  "password": "senha123",
  "role": "patient"
}
```

Resposta: 201 Created

GET /users
Listar todos os usuários.

Resposta: 200 OK

```bash
[
  {
    "id": 1,
    "name": "João Silva",
    "email": "joao@exemplo.com",
    "role": "patient"
  }
]
```
