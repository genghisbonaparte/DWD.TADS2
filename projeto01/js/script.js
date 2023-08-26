const nameInput = document.getElementById("nome");
const phoneInput = document.getElementById("tel");
const addButton = document.getElementById("botao");
const tabela = document.getElementById("table");


let lista = []
let id = 3



function getLocalStorage(){
    return JSON.parse(localStorage.getItem('lista')) || [];

}

function setLocalStorage(){
    setLocalStorage(`lista`, JSON.stringify(lista)) || [];


}


function addContact() {

    const listas = {

        nome : nameInput.value,
        phone : phoneInput.value,
        idcount : id++,


    }

    lista = getLocalStorage();
    
    // listas.push(agenda)

    lista.push(listas)

    
    atualizarContatos(listas)
    
    
    setLocalStorage(lista) 
}

function atualizarContatos(listas) {
    tabela.innerHTML += `
        <tr class="contatos">
            <td><strong>${listas.idcount}</strong></td>
            <td><strong>${listas.nome}</strong></td>
            <td><strong>${listas.phone}</strong></td>
            <td><button class='Delete'>Delete</button></td>
          </tr>
    
    `
}
 