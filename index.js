
let pontos;

function classificacao(pontos){
    let nome = document.getElementById("nome").value.toUpperCase();
    let nivel;

    pontos = calculoPontos();
    
    if(pontos <= 10){
        nivel = "Ferro";
    
    }else if(pontos >= 11 && pontos <= 20){
        nivel = "Bronze";
    
    }else if(pontos >= 21 && pontos <= 50){
        nivel = "Prata";
    
    }else if(pontos >= 51 && pontos <= 80){
        nivel = "Ouro";
    
    }else if(pontos >= 81 && pontos <= 90){
      nivel = "Diamante";
    
    }else if(pontos >= 91 && pontos <= 100){
        nivel = "Lendário";
    
    }else if(pontos >= 101){
        nivel = "Imortal"
    
    }else {
        document.getElementById("result").textContent = `Digite um valor válido`;
        return; // Adicionando um return para sair da função em caso de erro.
    }
    document.getElementById("result").innerHTML = `O jogador <span class="nome">${nome}</span> tem <span class="pontos">${pontos}</span> e está no nível <span class="nivel">${nivel}</span>`;
    }
    
    function calculoPontos(){
        let victory = parseInt(document.getElementById("victory").value); 
        let defeat = parseInt(document.getElementById("defeat").value);  
        pontos = victory - defeat;
        return pontos;
    }

    function limparInput(){
        document.getElementById("nome").value = " ";
        document.getElementById("victory").value = " ";
        document.getElementById("defeat").value = " ";
    }
    
