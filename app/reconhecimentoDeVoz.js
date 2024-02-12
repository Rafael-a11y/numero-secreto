window.SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition;

  const elementoNumero = document.querySelector("#chute");
  const recognition = new SpeechRecognition();
  // const jogarNovamenteBtn = document.querySelector("#jogar-novamente");
  recognition.lang = "pt-BR";
  recognition.continuous = true;
  recognition.start();

  const comecar = () =>
  {
    recognition.continuous = true;
    recognition.start();
    document.body.innerHTML = 
    `<h1>Acerte o Número Secreto</h1>
    <h3>
        O número secreto está entre 
        <span id="menor-valor">
            0
        </span> e <span id="maior-valor">
            100.
        </span>
    </h3>
    <div id="chute" class="mensagem">
        ${elementoNumero}
    </div>`;
  };

  document.addEventListener("acerto", () =>
  {
    bt = document.querySelector("#jogar-novamente");
    bt.addEventListener("click", comecar);
  });

  recognition.addEventListener("result", onSpeak);

  function onSpeak(evento)
  {
    let chute = evento.results[evento.results.length - 1][0].transcript;
    exibeConteudo(chute);
    validarChute(chute);
  }

  function exibeConteudo(chute)
  {
    elementoNumero.innerHTML = `
    <div>Você disse:</div>
    <span class="box">${chute}</span>
    `;
  }
