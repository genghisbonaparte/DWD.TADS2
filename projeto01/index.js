function inserirContato(){
    const contato = {
        name: document.getElementById('nome').value,
        fone: document.getElementById('telefone').value,
    }

    const bd_contats = getLocalStorage(); // abre lista interna de contatos de telefone

    bd_contats.push(contact) // insere um novo caractere a lista

    setLocalStorage(bd_contats) // aramzenar os contatos no localStorage

    updateTable() // atualizar a tabela apos a insersão 
    
}


//----------------------------------------------------------------
function getLocalStorage(){
    return JSON.parse(localStorage.getItem('bd_contats')) || []
}

//----------------------------------------------------------------

function setLocalStorage(){
    localStorage.setItem('bd_contats', JSON.stringify(bd_contats)); // covert

}

//-----------------------------TABLE------------------------------
function updateTable(){
    // função clean table

    const bd_contats = getLocalStorage()

    bd_contats.forEach(newRow)


}

//----------------------------------------------------------------

function newRow(contact, index){

    const line = document.createElement('tr.contato') // criando uma tag <tr>

    line.innerHTML = `
        <td>${index}</td>'
        <td>${contact.name}</td>'
        <td>${contat.fone}</td>'
        <td><buttom>Delete</buttom></td>
    `

    document.querySelector('#tbContacts>tbody').appendChild(line) // Especifica e seleciona a linha onde será gerada a tr



}

//----------------------------------------------------------------
