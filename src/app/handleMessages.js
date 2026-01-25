const $listMessages = document.querySelector(".messages")

const messages = [
    {
    id:1,
    text:"hola!! tomamos un cafe?",
    hour:"14:12",
    me:false
    },
    {
    id:1,
    text:"si, perfecto! te parece a las 18?",
    hour:"14:13",
    me:true
    },
    {
    id:1,
    text:"de una!!te espero en la plaza?",
    hour:"14:16",
    me:false
    },
    {
    id:1,
    text:"dale, salgo y te aviso",
    hour:"14:21",
    me:true
    },
]

const renderMessages = (list) => {
  $listMessages.innerHTML = ""

  list.forEach((messages) => {
    $listMessages.innerHTML += `
       <div class="message ${messages.me === true ? 'me' : ""}">
          <p class="content"> ${messages.text}</p>
          <p class="time">${messages.hour}</p>
        </div>
    `
  });

}

renderMessages(messages)
