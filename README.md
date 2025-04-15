🏥 Sistema de Agendamento Médico
🚀 Descrição
Sistema de agendamento médico simples com funcionalidades de cadastro de pacientes e médicos, agendamento de consultas, e filtros de busca por especialidade, médico, paciente e data.

🛠 Tecnologias
NestJS: Framework para Node.js, usado para construir a API.

PostgreSQL: Banco de dados relacional utilizado para persistência.

Docker: Usado para containerizar a aplicação e o banco de dados.

Swagger: Para documentação automática da API.

Class-Validator: Para validações de dados.

TypeORM: ORM para interação com o banco de dados PostgreSQL.

📦 Módulos principais
users: Cadastro de pacientes e médicos

appointments: Agendamentos de consultas

specialties: Especialidades médicas (ex: cardiologia, ortopedia)

🔧 Funcionalidades
Cadastro de usuários (paciente ou médico): Permite registrar médicos e pacientes no sistema.

CRUD de agendamentos: Permite criar, atualizar, buscar e excluir agendamentos.

Filtro de agendamentos por médico ou paciente: Permite buscar agendamentos de um médico ou paciente específico.

Filtro por data e especialidade: Permite buscar agendamentos de uma data ou especialidade específica.

Validação de horário livre antes de agendar: Verifica se o horário desejado para o agendamento já está ocupado.

📝 Como rodar o projeto

🐳 Docker
Iniciar o banco de dados e o NestJS com Docker:

Crie e inicie os containers do PostgreSQL e do NestJS:

```bash
docker-compose up --build
```

Acessar a API:

A API ficará disponível no endereço http://localhost:3000.

Swagger:

A documentação da API está disponível no Swagger em http://localhost:3000/api.

🚀 Rodar Localmente

1. Clonar o repositório

```bash
git clone https://github.com:torresgdev/medical_api.git
cd medical_api
```

2. Instalar as dependências
   Instale as dependências do projeto NestJS:

```bash
npm install
```

3. Rodar a aplicação
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

---

🧪 Testando a API

Criar um Usuário Dr.

```bash
{
  "name": "Dr. João Silva",
  "email": "joao@exemplo.com",
  "password": "senha123",
  "role": "doctor"
}
```

Criar um Usuário Paciente.

```bash
{
  "name": "Kleber Bezerra",
  "email": "klb@exemplo.com",
  "password": "senha123",
  "role": "patient"
}
```

Criar uma especialização.

```bash
{
    "name": "Oftalmologia",
    "description": "Especialidade médica focada no sistema ocular",
  }
```

Criar uma consulta.

```Bash
{
  "patientId": 1,
  "doctorId": 1,
  "specialtyId": 1,
  "date": "2025-04-20T14:00:00Z"
}
```
