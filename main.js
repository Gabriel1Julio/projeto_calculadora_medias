const form = document.getElementById('form-atividade');
const imgAprovado = '<img src="images/aprovado.png" alt="emoji festejando">';
const imgReprovado = '<img src="images/reprovado.png" alt="emoji triste">';
const atividades = [];
const notas = [];
const aprovado = '<Span class="resultado aprovado">Aprovado</Span>';
const reprovado = '<Span class="resultado reprovado">Reprovado</Span>';
const notaMinima = parseFloat(prompt('Digite a nota mínima: '));

let linhas = '';

form.addEventListener('submit', function(e){
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
    atualizaMedia();
})

function adicionaLinha() {
    const atividade = document.getElementById('atividade');
    const notaAtividade = document.getElementById('nota-atividade');

    if(atividades.includes(atividade.value)){
        alert(`A atividade: ${atividade.value} já foi adicionanda`);
    } else{
        atividades.push(atividade.value);
        notas.push(parseFloat(notaAtividade.value));
    
        let linha = '<tr>';
        linha += `<td> ${atividade.value} </td>`;
        linha += `<td> ${notaAtividade.value} </td>`;
        linha += `<td> ${notaAtividade.value >= notaMinima ? imgAprovado : imgReprovado} </td>`;
        linha += `</tr>`;
    
        linhas += linha;
    }


    atividade.value = '';
    notaAtividade.value = '';
}

function atualizaTabela() {
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}

function atualizaMedia() {
    const mediaFinal = calcularMedia();

    document.getElementById('media-final-nota').innerHTML = mediaFinal;
    document.getElementById('media-final-resultado').innerHTML = mediaFinal >= notaMinima ? aprovado :reprovado;

}

function calcularMedia(){
    let somaDasNotas = 0;

    for (let i = 0; i < notas.length; i++){
        somaDasNotas += notas[i];
    }

    return somaDasNotas / notas.length;
}