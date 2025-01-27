// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
  const input = document.getElementById("amigoInput");
  const amigo = input.value;
  amigos.push(amigo);
  input.value = ""; //limpiar el input
    if (amigo == "") {
        alert("Debes agregar un nombre");
    }
//   renderizarLista();
  const lista = document.getElementById("listaAmigos");
  lista.innerHTML += `<li>${amigo}</li>`;
}
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}
function sortearAmigo() {
    if (amigos.length < 2) {
        alert("Debes ingresar al menos dos nombres para el sorteo.");
        return;
    }
    console.log(amigos);
    shuffleArray(amigos);
    console.log(amigos);
    
    const resultado = document.getElementById("resultado");
    resultado.textContent = `El amigo secreto es: ${amigos[0]}!!`;

    const lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    amigos = [];
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
