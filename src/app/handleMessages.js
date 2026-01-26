const $listMessages = document.querySelector(".messages")
const $message = document.getElementById("message")
const $formMenssage = document.getElementById("formMenssage")
//let messages = [] // (seria en el caso de una conversacion nueva)
let messages = [
  {
    id: 1,
    text: "hola!! tomamos un cafe?",
    hour: "14:12",
    me: false
  },
  {
    id: 1,
    text: "si, perfecto! te parece a las 18?",
    hour: "14:13",
    me: true
  },
  {
    id: 1,
    text: "de una!!te espero en la plaza?",
    hour: "14:16",
    me: false
  },
  {
    id: 1,
    text: "dale, salgo y te aviso",
    hour: "14:21",
    me: true
  },
]

//recarga los chats
const loadChats = () => {
  const data = JSON.parse(localStorage.getItem("messages"))
  if (data === null) {
    return messages
  } else {
    return data // saca la "data" afuera
  }
}


//guarda en localStorage
const saveChats = (listOfMessages) => {
  localStorage.setItem("messages", JSON.stringify(listOfMessages))
  console.log("msj guardados")
}

//+=: que agregue al contenido que ya tengo lo que sigue(uno x uno)
const renderMessages = (listOfMessages) => {
  $listMessages.innerHTML = ""
  // listOfMessages.forEach((message) => {
  //     let className
  //   if (message.me === true) {
  //     className = "me"
  //   } else {
  //     className = ""
  //   }

  // })
  //todo esto es = a hacerlo en O.T(operador ternario + simple): message.me? 'me' : ""
  listOfMessages.forEach((message) => {
    $listMessages.innerHTML += `
       <div class="message ${message.me? 'me' : ""}">
          <p class="content"> ${message.text}</p>
          <p class="time">${message.hour}</p>
        </div>
    `
  })
}



const sendMessage = (event) => {
  const now = new Date()
  if (event.key === "Enter") {
    const newMessage = {
      text: $message.value,
      me: true,
      hour: now.getHours() + ":" + now.getMinutes()
    }
  
    //  messages.push(newMessage)
    //Spread operator: ...array
    const messageInLs = loadChats()
    messages = [...messageInLs, newMessage]
    saveChats(messages)
    renderMessages(messages)
    $formMenssage.reset()
  }
}




$message.addEventListener("keydown", (e) => { sendMessage(e) })

const initialMenssages = loadChats()
renderMessages(initialMenssages)