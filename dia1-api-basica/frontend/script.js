const API_URL = 'http://localhost:3333/cursos';

const btnCarregar = document.getElementById('btnCarregar');
const mensagem = document.getElementById('mensagem');
const listaCursos = document.getElementById('listaCursos');

async function carregarCursos() {
  mensagem.textContent = 'Carregando cursos...';
  listaCursos.innerHTML = '';

  try {
    const resposta = await fetch(API_URL);

    if (!resposta.ok) {
      throw new Error(`Falha na requisicao: ${resposta.status}`);
    }

    const cursos = await resposta.json();

    cursos.forEach((curso) => {
      const item = document.createElement('li');
      item.textContent = `${curso.nome} (${curso.nivel})`;
      listaCursos.appendChild(item);
    });

    mensagem.textContent = 'Cursos carregados com sucesso.';
  } catch (erro) {
    mensagem.textContent = 'Nao foi possivel conectar na API.';
    console.error(erro);
  }
}

btnCarregar.addEventListener('click', carregarCursos);
