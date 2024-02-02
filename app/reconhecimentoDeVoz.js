window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const recognition = new SpeechRecognition();
  let elementoNumero = document.querySelector(".box");

  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.start();
  recognition.addEventListener("result", onSpeak);

  function onSpeak(evento)
  {
    for(let i = evento.resultIndex; i< evento.results.length; i++)
    {
        elementoNumero.innerHTML= evento.results[i][0].transcript;
        if(evento.results[i][0].transcript === "terminar")
        {
            recognition.continuous = false;
            recognition.top();
            return;
        } 
    }
    
  }