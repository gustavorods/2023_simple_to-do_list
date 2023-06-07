// Elementos 
const input = document.querySelector('input'); 
const lista = document.querySelector('ul');


//funções
function handKeyUp(event) //chamando os detalhes do evento 
{   
    const textoDoInput = input.value; //esse valor é igual ao que foi digitado no input (para chamar o valor que foi digitado no input, é so colcoar o .value)


    if (textoDoInput.trim() === "") 
    {
        alert("Você precisa digital algo!")
    }


    else if(event.key === "Enter") // se a tecla apertada for igual a "enter"
    {
        const newli = document.createElement('li'); //criando o newli
        newli.innerHTML = textoDoInput; // colocando um valor nesse newli, 
        lista.appendChild(newli); //adiconando esse novo li

        textoDoInput = ""; //resetando o input
    }
}


// Eventos 
input.addEventListener("keyup", handKeyUp);

