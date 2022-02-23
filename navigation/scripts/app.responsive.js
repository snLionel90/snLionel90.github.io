const prompts = [
    ["hola", "hey", "hello", "buenos dias", "buenas tardes"],
    ["que tal", "cuentame algo", "how are things"],
    ["Que mas te gusta hacer", "cual seria tu rango salarial", "Que tal?"],
    ["que edad tienes","a que te dedicas en tu tiempo libre","Que nivel de ingles tienes"],
    ["Quien eres", "como te llamas", "hablame sobre tus estudios", "Cuentame un poco sobre tu experiencia laboral"],
    ["Tienes experiencia en Frameworks", "Que tipo de tecnologias usas/utilizas"],
    ["Que frameworks utilizas","molan tus dibujos, los haces tu"],
    ["NodeJs,AngularJs,VueJs,por Cuanto tiempo"]
  ]
  
  // Possible responses, in corresponding order
  
  const replies = [
    ["hola", "hey", "hello", "buenos dias", "buenas tardes"],
    ["Bien","Me ha Programado Lionel Sanchez", "Soy Bot-Chan"],
    ["Desarrollar sitios web, Programar aplicaciones, estar con mi familia, buscar trabajo", "entre 16mil y 22mil"," bien"],
    ["30", "Estar con los demas, salir y crear contenido","mi nivel de ingles es avanzado C1"],
    ["Soy humano","mi nombre es Lionel Sanchez"," Estoy graduado en 3 FP, Grado medio en imagen y sonido, grado medio en sistemas y grado superior en desarrollo","5 años en desarrollo"],
    ["si, mas de 4 años","utilizo tecnologias de lentejas con shorisho"],
    ["Node Js, AngularJS, SpringBoot, JUnit, REST,API, Docker, Python3","Si, los hago con Medibang Paint Pro"],
    ["Correcto, durante mas de 3 años"]
  ]
  
  // Random for any other user input
  
  const alter = [
    "Escuchando peticiones...",
    "Lo siento no eschuché bien, me lo puede repetir? :/"
  ]

//seccion donde se plasma todo en el documento HTML

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

