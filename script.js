
const alternativas = document.querySelectorAll('.opcao');
const btnConfirma = document.getElementById('btn-confirma');



btnConfirma.style.display = 'none';

alternativas.forEach(alternativa => {
    alternativa.addEventListener('click', () => {
        
        alternativas.forEach(b => b.style.backgroundColor = '');

        // Aplica a cor verde no botão clicado
        alternativa.style.backgroundColor = 'green';

        btnConfirma.style.display = 'block';
    });
});
   
function proximaPergunta() {
    // Se a pergunta 1 estiver visível, vai para a pergunta 2
    if (document.querySelector('.num-questao1').style.display !== 'none') {
        document.querySelector('.num-questao1').style.display = 'none';
        document.querySelector('.respostas1').style.display = 'none';

        document.querySelector('.num-questao2').style.display = 'block';
        document.querySelector('.respostas2').style.display = 'block';

        // Altera a cor do botão de pergunta 1 para transparente e do botão de pergunta 2 para orangered
        document.getElementById('btn1').style.backgroundColor = 'transparent';
        document.getElementById('btn2').style.backgroundColor = 'orangered';
    }
    // Se a pergunta 2 estiver visível, vai para a pergunta 3
    else if (document.querySelector('.num-questao2').style.display !== 'none') {
        document.querySelector('.num-questao2').style.display = 'none';
        document.querySelector('.respostas2').style.display = 'none';

        document.querySelector('.num-questao3').style.display = 'block';
        document.querySelector('.respostas3').style.display = 'block';

        // Altera a cor do botão de pergunta 2 para transparente e do botão de pergunta 3 para orangered
        document.getElementById('btn2').style.backgroundColor = 'transparent';
        document.getElementById('btn3').style.backgroundColor = 'orangered';
    }
}


// seta para retornar as questoes

// ao clicar na pergunta 3, div de agradecimento


