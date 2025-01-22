// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
const amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigoInput");
  const amigo = input.value;
  if (amigo == "") {
    alert("Debes agregar un nombre");

  } else if(typeof amigo !== 'srting'){
    alert("Debes ingresar nombres no numeros")
    return false
  } else if (amigo !== "") {
    amigos.push(amigo);
    input.value = "";
  }
  renderizarLista();
}
function renderizarLista() {
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";
  amigos.forEach((amigo) => {
    const li = document.createElement("li");
    li.textContent = amigo;
    lista.appendChild(li);
  });
}
