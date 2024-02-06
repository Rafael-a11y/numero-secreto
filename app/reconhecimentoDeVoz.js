console.log(parseInt("10", 10));

window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  let elementoNumero = document.querySelector("#chute");
  

  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.start();
  recognition.addEventListener("result", onSpeak);

  function onSpeak(evento)
  {
    for(let i = evento.resultIndex; i< evento.results.length; i++)
    {
        console.log(evento.results[i][0].transcript);
        if(evento.results[i][0].transcript == " terminar")
        {
          console.log("entrou aqui")
          recognition.stop();
        }  
      gerarElementos(evento.results[i][0].transcript);
    }
  }

  function gerarElementos(transcricao)
  {
    const div = document.createElement("div");
    div.innerHTML = "Você disse:";
    const span = document.createElement("span");
    span.classList.add("box");
    span.innerHTML = transcricao;
    const div2 = document.createElement("div");
    const i = document.createElement("i");
    i.classList.add("fa-solid","fa-up-long");
    div2.append("O número secreto é maior", i);
    elementoNumero.append(div, span, div2);
    if(!isNaN(transcricao))
    {

    }
  }