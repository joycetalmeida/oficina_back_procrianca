# Oficina de Backend com Node.js

## Objetivo geral
Ao final da oficina, cada aluno deve conseguir:
- subir um servidor Node.js com Express;
- criar endpoints HTTP (GET, POST, PUT, DELETE);
- conectar um frontend em HTML/CSS/JS com o backend usando `fetch`;
- entender fluxo completo de dados (frontend -> API -> persistencia simples -> resposta).

## Formato
- Duração total: 3 dias
- Cada encontro: 1h45 (105 minutos)
- Abordagem: 80% pratica, 20% explicacao

## Estrutura dos materiais nesta pasta
- `dia1-api-basica/`: primeiro servidor + consumo no frontend
- `dia2-crud/`: API CRUD com persistencia em arquivo JSON
- `dia3-integracao-final/`: mini sistema funcional (frontend + backend)

## Pre-requisitos (instalação)
1. Instalar Node.js LTS (recomendado >= 20)
2. IDE instalada (VS Code, etc)
3. Testar no terminal:
   - `node -v`
   - `npm -v`
4. (Opcional) Instalar Thunder Client no VS Code para testar endpoints

## Dia 1 - API básica e primeira conexão com frontend
Objetivo: entender o que é servidor e API, criar endpoints e consumir com `fetch`.

### Cronograma
- Frontend ja conhecido pela turma
- O que faltava para virar sistema completo
- Conceitos: cliente, servidor, requisição, resposta, JSON

2. Setup guiado
- Criar pasta do backend
- `npm init -y`
- Instalar dependencias: `npm i express cors`
- Instalar dev dependency: `npm i -D nodemon`
- Configurar scripts no `package.json`

3. Primeira API
- Criar `server.js`
- Endpoint `GET /` (mensagem de boas-vindas)
- Endpoint `GET /status` (health check)
- Endpoint `GET /cursos` (array em memoria)

4. Testes manuais
- Navegador e/ou Thunder Client
- Ler status code (200, 404)
- Entender payload JSON

5. Conectar frontend
- Abrir `frontend/index.html`
- Botao para buscar cursos via `fetch`
- Renderizar lista na tela
- Tratar erro com `try/catch`

6. Fechamento
- Recap do fluxo completo
- Mini desafio: adicionar endpoint e exibir novo dado no frontend

Entrega do dia: frontend lendo dados reais da API local.

## Dia 2 - CRUD completo e persistencia simples
Objetivo: criar operações de cadastro, listagem, edição e remoção.

### Cronograma
1. Revisao rapida do dia 1
- Relembrar estrutura de rota
- Reforçar `req` e `res`

2. Modelagem de recurso
- Recurso escolhido: tarefas
- Campos: `id`, `titulo`, `concluida`, `criadaEm`

3. Construir CRUD no backend
- `GET /tarefas`
- `POST /tarefas`
- `PUT /tarefas/:id`
- `DELETE /tarefas/:id`
- Persistir em arquivo `data/tasks.json`

4. Frontend CRUD
- Form de nova tarefa
- Lista de tarefas
- Botões concluir/remover
- Atualização da tela apos cada ação

5. 95-105 min: Fechamento
- Erros comuns (CORS, porta errada, JSON invalido)
- Mini desafio: filtro de tarefas concluidas

Entrega do dia: app de tarefas com persistencia local.

## Dia 3 - Integração final (mini sistema funcional)
Objetivo: juntar tudo em um fluxo de uso real com login simples e area protegida.

### Cronograma
1. Arquitetura final
- Separação frontend/backend
- Fluxo de autenticação simplificada

2. Backend final
- `POST /auth/login`
- `GET /perfil` (rota protegida por token simples)
- `GET /recados`
- `POST /recados`

3. Frontend final
- Tela login
- Guardar token em `localStorage`
- Buscar perfil e recados
- Cadastrar recado

4. Testes e debugging guiado
- Token invalido
- Sem internet/servidor parado
- Requisições mal formadas

5. Encerramento
- Checklist do que cada aluno conseguiu construir
- Proximos passos para evoluir projeto

Entrega do dia: sistema funcional completo frontend + backend.
