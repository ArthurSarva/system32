CREATE TABLE especialidades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(100) NOT NULL UNIQUE
);

CREATE TABLE medicos (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(150) NOT NULL,
  crm VARCHAR(30) NOT NULL UNIQUE,
  especialidade_id INTEGER NOT NULL,
  FOREIGN KEY (especialidade_id) REFERENCES especialidades(id)
);

CREATE TABLE pacientes (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nome VARCHAR(150) NOT NULL,
  email VARCHAR(150) NOT NULL UNIQUE,
  telefone VARCHAR(20),
  data_nascimento DATE
);

CREATE TABLE consultas (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  paciente_id INTEGER NOT NULL,
  medico_id INTEGER NOT NULL,
  data_hora DATETIME NOT NULL,
  status VARCHAR(30) NOT NULL DEFAULT 'PENDENTE',
  observacoes TEXT,
  criado_em DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
  FOREIGN KEY (paciente_id) REFERENCES pacientes(id),
  FOREIGN KEY (medico_id) REFERENCES medicos(id),
  UNIQUE (medico_id, data_hora)
);
