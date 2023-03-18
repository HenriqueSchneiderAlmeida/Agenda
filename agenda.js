const form = document.getElementById('form-agenda');
const imgCelular = '<img src="./imagens/celular.jpg" alt="celular">';
const imgFixo = '<img src="./imagens/fixo.jpg" alt="tel. fixo">';
const nome = [];
const notas = [];
const spanAprovado = '<span class="aprovado">Aprovado</span>';
const spanReprovado = '<span class="reprovado">Reprovado</span>';

let linhas ='';

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinhas();
    atualizaTabela();
});

function adicionaLinhas() {
    const inputNome = document.getElementById('nome');
    const inputTelefone = document.getElementById('telefone');
    const inputTipo = document.getElementById('tipo');

    if (nome.includes(inputNome.value)) {
        alert (`A pessoa: ${inputNome.value} já foi incluida`);
    } else {
        nome.push(inputNome.value);
        notas.push(parseFloat(inputTelefone.value));

        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`; 
        linha += `<td>${inputTelefone.value}</td>`;   
        linha += `<td>${inputTipo.value > 1 ? imgCelular : imgFixo}</td>`;   
        linha += '</tr>';
        linhas+= linha;
    }
    inputNome.value = '';
    inputTelefone.value = '';      
    inputTipo.value = '2';  
}

function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas;
}
