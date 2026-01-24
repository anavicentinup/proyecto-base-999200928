//referenciar elementos a manipular del html

const $search = document.getElementById("search")
const $chats = document.querySelectorAll(".user-chat")


//diferencia entre Nodelist y un Array
const colores = [ "rojo", "verde", "azul"]
console.log(colores)//Array: lista de valores
console.log($chats)//Nodelist: lista de nodos de ELEMENTOS HTML


//declaracion de funciones: 

const searchChats = () => {
const nameSearch = $search.value.toLowerCase()
console.log(nameSearch)
for(let i = 0; i < $chats.length; i++){
   const $chat = $chats[i]
   const $titleTag = $chat.querySelector("h2")
   const name = $titleTag.textContent.toLowerCase()
   if(name.includes(nameSearch)){
   $chat.style.display = "flex";
   }
   else{
     $chat.style.display = "none";
   }
}


}

$search.addEventListener("input", searchChats)
//EVENTO INPUT: ES EL DATO QUE INGRESA
