'use strict'
const descricaoAnime = document.querySelector('.descricao-animes');
const listaAnimes = document.querySelectorAll('[id*=min]');

console.log(listaAnimes);


const selecionarDescricao = (evento) => {
  // const anime = evento.target.id;
  // switch (anime) {
  //   case 'min1':
  //     descricaoAnime.classList.toggle('descricao-anime');
  //     break;
  //   case 'min7':
  //     descricaoAnime.classList.toggle('descricao-anime');
  //     descricaoAnime.textContent = 'Dragon Ball Z <br> Cinco anos após vencer o Torneio Mundial de Artes Marciais, Goku tem uma vida pacífica com sua esposa e filho. No entanto, isso muda com a chegada de um misterioso inimigo chamado Raditz, que se apresenta como o irmão perdido de Goku e revela que ele é um guerreiro da raça Saiyan, e que originalmente foi enviado à Terra para conquista-la. Com sua tentativa fracassada de recrutar Goku como aliado, Raditz adverte Goku e seus amigos de que uma nova ameaça se aproxima rapidamente da Terra, uma que poderia mergulhar o planeta em um conflito intergaláctico e fazer os próprios céus tremerem. Uma guerra será travada pelas esferas místicas do dragão, e somente os mais fortes sobreviverão.'
  //     break;
  // }
  // console.log(anime);
}

listaAnimes.forEach(anime => anime.addEventListener("click", selecionarDescricao));

