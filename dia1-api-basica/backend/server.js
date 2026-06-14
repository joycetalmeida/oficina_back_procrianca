const express = require('express');
const cors = require('cors');

const app = express();
const PORT = 3333;

app.use(cors());
app.use(express.json());

const cursos = [
  { id: 1, nome: 'HTML e CSS', nivel: 'iniciante' },
  { id: 2, nome: 'JavaScript para Web', nivel: 'iniciante' },
  { id: 3, nome: 'Backend com Node.js', nivel: 'iniciante' }
];

app.get('/', (req, res) => {
  res.json({
    mensagem: 'API da oficina funcionando.',
    dica: 'Use /status e /cursos para testar.'
  });
});

app.get('/status', (req, res) => {
  res.json({
    status: 'ok',
    horario: new Date().toISOString()
  });
});

app.get('/cursos', (req, res) => {
  res.json(cursos);
});

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
