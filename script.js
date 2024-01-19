const input = document.querySelector('input');
const lista = document.querySelector('ul');

function handKeyUp(event) { //O "event" pega os detalhes do evento 
    const textoDoInput = input.value;

    if(event.key === "Enter" && textoDoInput.trim() !== "") {
        const newli = document.createElement('li');
        newli.innerHTML = textoDoInput;
        lista.appendChild(newli);
        input.value = "";
    }
}

input.addEventListener("keyup", handKeyUp);
