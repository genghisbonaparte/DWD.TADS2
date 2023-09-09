const nameInput = document.getElementById("nome");
const phoneInput = document.getElementById("tel");
const addButton = document.getElementById("botao");
const tabela = document.getElementById("table");

let lista = [];
let id = 1;

function getLocalStorage() {
  return JSON.parse(localStorage.getItem("lista")) || [];
}

function setLocalStorage(key, value) {
  localStorage.setItem(key, value);

  
}



function addContact() {
  const listas = {
    nome: nameInput.value,
    phone: phoneInput.value,
    idcount: id++,
  };

  lista = getLocalStorage();
  lista.push(listas);
  setLocalStorage("lista", JSON.stringify(lista));
  atualizarContatos(listas);
}

function atualizarContatos(listas) {
  tabela.innerHTML += `
    <tr class="contatos">
      <td><strong>${listas.idcount}</strong></td>
      <td><strong>${listas.nome}</strong></td>
      <td><strong>${listas.phone}</strong></td>
      <td><button class='Delete' onclick="deleteContact(${listas.idcount})">Delete</button></td>
    </tr>
  `;
}



function deleteContact(id) {
  lista = lista.filter((item) => item.idcount !== id);
  setLocalStorage("lista", JSON.stringify(lista));
  refreshTable();


}

function refreshTable() {
  tabela.innerHTML = `
    <tr id="tags">
      <td><strong>#</strong></td>
      <td><strong>Nome</strong></td>
      <td><strong>Telefone</strong></td>
      <td><strong>Ação</strong></td>
    </tr>
  `;

  lista.forEach((item) => {
    atualizarContatos(item);
  });



}

window.onload = function () {
  lista = getLocalStorage();

  lista.forEach((item) => {
    atualizarContatos(item);
  });


};