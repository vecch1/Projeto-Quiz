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
    
    if (document.querySelector('.num-questao1').style.display !== 'none') {
        document.querySelector('.num-questao1').style.display = 'none';
        document.querySelector('.respostas1').style.display = 'none';
        document.querySelector('.num-questao2').style.display = 'block';
        document.querySelector('.respostas2').style.display = 'block';

        
        document.getElementById('btn1').style.backgroundColor = 'transparent';
        document.getElementById('btn2').style.backgroundColor = 'orangered';
    }
   
    else if (document.querySelector('.num-questao2').style.display !== 'none') {
        document.querySelector('.num-questao2').style.display = 'none';
        document.querySelector('.respostas2').style.display = 'none';
        document.querySelector('.num-questao3').style.display = 'block';
        document.querySelector('.respostas3').style.display = 'block';

         
        document.getElementById('btn2').style.backgroundColor = 'transparent';
        document.getElementById('btn3').style.backgroundColor = 'orangered';
    }
}



//  onclick agradecimento / aparecer apenas apos a ultima pergunta

// botao para retornar a questoes anteriores


