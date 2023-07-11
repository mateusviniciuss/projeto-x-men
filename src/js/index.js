// alert("Um pequeno resumo dos personagens será mostrado quando você apertar Enter");

// olha ctrl e barra comenta em linha, né massa.

// quando passar o mouse em cima do personagem, seleciona-lo
// verificar quando o usuario passar o mouse em cima deles

const personagens= document.querySelectorAll('.personagem');


// adicionar classe selecionado no personagem que o usuario passe o mouse p1

personagens.forEach(personagem=> {
    personagem.addEventListener('mouseenter', () =>{


        if (window.innerWidth < 450) {
                window.scrollTo({top: 0, behavior: 'smooth' });
        }


// verificar se ja exise um personagem selecinado, se sim, devemos remover a seleçao
        removerSelecaoDoPersonagem();
// p2
        personagem.classList.add('selecionado');
// pegar o elemento do personagem grande e adicionar as informaçoes nele

        alterarImagemPersonagemSelecionado(personagem);

        // alterar o nome do personagem grande

        alterarNomePersonagemGrande(personagem);

        // alterar a descricao do personagem grande
        alterarDescricaoPersonagemGrande(personagem);

        
    })
});
 




function alterarNomePersonagemGrande(personagem) {
        const nomePersonagem = document.getElementById('nome-personagem');

        nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarDescricaoPersonagemGrande(personagem) {
        const descricaoPersonagem = document.getElementById('descricao-personagem');

        descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarImagemPersonagemSelecionado(personagem) {
        const imagemPersonagemGrande = document.querySelector('.personagem-grande');
        // alterar a imagem do personagem grande
        const idPersonagem = personagem.attributes.id.value;
        console.log(idPersonagem);
        imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
        const personagemSelecionado = document.querySelector('.selecionado');
        personagemSelecionado.classList.remove('selecionado');
}

