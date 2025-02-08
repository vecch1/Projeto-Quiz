const alternativas = document.querySelectorAll('.opcao');
const btnConfirma = document.getElementById('btn-confirma');

const questao1 = document.querySelector('.num-questao1');
const questao2 = document.querySelector('.num-questao2');
const questao3 = document.querySelector('.num-questao3');
const agradecimento = document.querySelector('.agradecimento');

const resposta1 = document.querySelector('.respostas1');
const resposta2 = document.querySelector('.respostas2');
const resposta3 = document.querySelector('.respostas3');


btnConfirma.style.display = 'none';


alternativas.forEach(alternativa => {
    alternativa.addEventListener('click', () => {
        
        alternativas.forEach(b => b.style.backgroundColor = '');

        
        alternativa.style.backgroundColor = 'green';

        btnConfirma.style.display = 'block';

    
     });
    });








    function proximaPergunta() {
        
       btnConfirma.style.display = 'none';

    if (questao1.style.display !== 'none') {

        questao1.style.display = 'none';
        resposta1.style.display = 'none';

        questao2.style.display = 'block';
        resposta2.style.display = 'block';
       
        
        document.getElementById('btn1').style.backgroundColor = 'transparent';
        document.getElementById('btn2').style.backgroundColor = 'orangered';

     
    }

 


   
    else if (questao2.style.display !== 'none') {
        questao2.style.display = 'none';
        resposta2.style.display = 'none';

        questao3.style.display = 'block';
        resposta3.style.display = 'block';

         
        document.getElementById('btn2').style.backgroundColor = 'transparent';
        document.getElementById('btn3').style.backgroundColor = 'orangered';     
    }  else if (questao3.style.display !== 'none'){
        questao3.style.display = 'none';
        resposta3.style.display = 'none';
        document.getElementById('btn3').style.backgroundColor = 'transparent';

        agradecimento.style.display = 'block';

    }
}


function voltarPergunta(){
    if(questao3.style.display !== 'none'){
        questao3.style.display = 'none';
        resposta3.style.display = 'none';

        questao2.style.display = 'block';
        resposta2.style.display = 'block';


        document.getElementById('btn2').style.backgroundColor = 'orangered';
        document.getElementById('btn3').style.backgroundColor = 'transparent';

    } else if (questao2.style.display !== 'none'){

        questao1.style.display = 'block';
        resposta1.style.display = 'block';

        questao2.style.display = 'none';
        resposta2.style.display = 'none';

        document.getElementById('btn1').style.backgroundColor = 'orangered';
        document.getElementById('btn2').style.backgroundColor = 'transparent';

        
        document.querySelector('.pergunta1').style.marginTop = '-28px';
        document.querySelector('.pergunta1').style.marginLeft = '110px';
    } else if(agradecimento.style.display!== 'none'){
        questao3.style.display = 'block';
        resposta3.style.display = 'block';

        agradecimento.style.display = 'none';
        document.getElementById('btn3').style.backgroundColor = 'orangered';
    }
}



//  onclick agradecimento / aparecer apenas apos a ultima pergunta

// botao para retornar a questoes anteriores
