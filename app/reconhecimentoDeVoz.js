window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const elementoNumero = document.querySelector("#chute");
  const recognition = new SpeechRecognition();
  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.start();
  
  recognition.addEventListener("result", onSpeak);

  function onSpeak(evento)
  {
    console.log(evento.results[0][0].transcript);
    console.log(evento)
    let chute = evento.results[evento.results.length - 1][0].transcript;
    exibeConteudo(chute)
  }

  function exibeConteudo(chute)
  {
    elementoNumero.innerHTML = 
    `<div>Você disse:</div>
    <span class="box">${chute}</span>
    <div>O número secreto é maior <i class="fa-solid fa-up-long"></i></div>`;
  }