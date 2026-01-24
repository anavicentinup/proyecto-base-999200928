//referenciar elementos a manipular del html

const $search = document.getElementById("search")
const $listchat = document.querySelector(".chats ul")



// //diferencia entre Nodelist y un Array
// const colores = [ "rojo", "verde", "azul"]
// console.log(colores)//Array: lista de valores
// console.log($chats)//Nodelist: lista de nodos de ELEMENTOS HTML

const chatsData = [
    {
        name: "Fidel Carbini",
        lastMessage: "vamos a comer afuera",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "mica vicentin",
        lastMessage: "tenemos que juntarnos",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "zoe Carbini",
        lastMessage: "gracias por venir mi china",
        avatar: "https://placehold.co/100x100",
    },
    {
        name: "adri 👩‍🦳",
        lastMessage: "como esta de su pansa?",
        avatar: "https://placehold.co/100x100"
    },
]


//declaracion de funciones: 

const renderChats = (list) => {
    $listchat.innerHTML = ""

    list.forEach((chat) =>
        $listchat.innerHTML += `
 <li class="user-chat">
            <img src="${chat.avatar} alt="foto de perfil de fiorella vicentin">
            <div>
              <h2>${chat.name}</h2>
              <P>${chat.lastMessage}</P>
            </div>
          </li>`
    )
}

const searchChats = () => {
    const nameSearch = $search.value.toLowerCase()
    const $chats = document.querySelectorAll(".user-chat")
    for (let i = 0; i < $chats.length; i++) {
        const $chat = $chats[i]
        const $titleTag = $chat.querySelector("h2")
        const name = $titleTag.textContent.toLowerCase()
        if (name.includes(nameSearch)) {
            $chat.style.display = "flex";
        }
        else {
            $chat.style.display = "none";
        }
    }
}






$search.addEventListener("input", searchChats)
//EVENTO INPUT: ES EL DATO QUE INGRESA
renderChats(chatsData)