function habilitarEnviar() {
    document.getElementById('botaoEnviar').disabled = false;
}

function clicouBotao(resposta) {
    let selecionado = resposta;

    if (selecionado == 'Front-End' ) {
 
        document.getElementById('respostaArea').style.display = 'block';
        let respostaArea = document.getElementById('respostaArea');
        respostaArea.innerHTML = 'Front-End';
        document.getElementById('perguntaEspecializacao').style.display = 'block';
        document.getElementById('botaoBackEnd').setAttribute('disabled', ' ');
    } else if (selecionado == 'Back-End') {

        document.getElementById('respostaArea').style.display = 'block';
        let respostaArea = document.getElementById('respostaArea');
        respostaArea.innerHTML = 'Back-End';
        document.getElementById('perguntaEspecializacao').style.display = 'block';
        document.getElementById('botaoFrontEnd').setAttribute('disabled', ' ');
    } else if (selecionado == 'Especialização') {

        document.getElementById('respostaEspecializacao').style.display = 'block';
        let respostaEspecializacao = document.getElementById('respostaEspecializacao');
        respostaEspecializacao.innerHTML = 'Especialização';
        document.getElementById('perguntaTecnologia').style.display = 'block';
        document.getElementById('botaoFullStack').setAttribute('disabled', ' ');
    } else if (selecionado == 'FullStack') {

        document.getElementById('respostaEspecializacao').style.display = 'block';
        let respostaEspecializacao = document.getElementById('respostaEspecializacao');
        respostaEspecializacao.innerHTML = 'FullStack';
        document.getElementById('perguntaTecnologia').style.display = 'block';
        document.getElementById('botaoEspecializacao').setAttribute('disabled', ' ');
    } else if (selecionado == 'Sim') {

        document.getElementById('respostaTecnologia').style.display = 'block';
        let respostaTecnologia = document.getElementById('respostaTecnologia');
        respostaTecnologia.innerHTML = 'Sim';
        document.getElementById('qualTecnologia').style.display = 'block';
        document.getElementById('botaoNao').setAttribute('disabled', ' ');
    } else {
        document.getElementById('respostaTecnologia').style.display = 'block';
        let respostaTecnologia = document.getElementById('respostaTecnologia');
        respostaTecnologia.innerHTML = 'Não';
        document.getElementById('respostaBest').style.display = 'block';
        let respostaBest = document.getElementById('respostaBest');
        respostaBest.innerHTML = 'Te aconselho a pesquisar mais sobre a sua área.'
        document.getElementById('botaoSim').setAttribute('disabled', ' ');
    }
}


function enviarResposta() {

    let caixaDeResposta = document.getElementById('respostas').value;
    document.getElementById('respostaQualTecnologia').style.display = 'block';
    let respostasQuaisTecnologias = document.getElementById('respostaQualTecnologia');
    respostasQuaisTecnologias.innerHTML = caixaDeResposta;
}