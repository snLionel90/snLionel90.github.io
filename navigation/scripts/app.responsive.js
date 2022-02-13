document.addEventListener("DOMContentLoaded", () => {
    const inputField = document.getElementById("input");
    inputField.addEventListener("keydown", (e) => {
      if (e.code === "Enter") {
        let input = inputField.value;
        inputField.value = "";
        output(input);
      }
    });
});

function output(input) {
    let prokt;
    let text = input.toLowerCase().replace(/[^\w\s]/gi, "").replace(/[\d]/gi, "").trim();;
    text = text
      .replace(/ a /g, " ")   // 'dime argo' 
      .replace(/messiento /g, "")
      .replace(/que/g, "que es lo..")
      .replace(/por favor /g, "")
      .replace(/porfavor/g, "")
      .replace(/r u/g, "eres");

    if(compare(prompts,replies,text)){ //busca en la lista de props
        prokt = compare(prompts,replies,text)
    }else if(text.match(/thank/gi)){ //un gracias por lo menos
        prokt="de nada";
    }else{ //si todo falla o no se encuetra lanza una alternativa
        prokt = alter[Math.floor(Math.random() * alter.length)];
    }
    addChat(input,prokt); //actualiza el DOM
}  


function compare(promptsArray, repliesArray, text) {
    let item;
    for (let x = 0; x < promptsArray.length; x++) {
      for (let y = 0; y < repliesArray.length; y++) {
        if (promptsArray[x][y] == text) {
          items = repliesArray[x];
          item = items[Math.floor(Math.random() * items.length)];
        }
      }
    }
    return item;
  }

const robot = ["How do you do, fellow human", "I am not a bot"];
document.addEventListener("DOMContentLoaded", () => {
    if (e.code === "Enter") {
        let input = document.getElementById("input").value;
        document.getElementById("user").innerHTML = input;
        output(input);    
    }
});

function addChat(input, prokt) {
    const mainDiv = document.getElementById("messages");
    let userDiv = document.createElement("div");
    userDiv.id = "user";
    userDiv.innerHTML = `You: <span id="user-response">${input}</span>`;
    mainDiv.appendChild(userDiv);
  
    let botDiv = document.createElement("div");
    botDiv.id = "bot";
    botDiv.innerHTML = `Bot-Chan: <span id="bot-response">${prokt}</span>`;
    mainDiv.appendChild(botDiv);
    speak(prokt);


    setTimeout(() => {
        botText.innerText = `${product}`;
        textToSpeech(product)
      }, 2000)
}

