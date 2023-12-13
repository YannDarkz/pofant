const btnSim = document.getElementById('btnSim')
const btnNao = document.getElementById('btnNao');

let numeroCliques = 0;


btnSim.addEventListener('click', () => {

    
    let audio = document.getElementById("meuAudio");

    if (audio.paused) {
      audio.play();
    } else {
      // Se o áudio estiver tocando, pause
      audio.pause();
      // Reinicie o áudio para que ele comece do início na próxima reprodução
      audio.currentTime = 0;
    }
   
})


btnNao.addEventListener('click', () => {
    console.log('bota nao clicado')
    const posicoes = [
        { top: '150px' },
        { top: '50px' },
        { top: '200px' },
        { top: '100px' },
        { top: '240px' }
    ];

    if (numeroCliques < posicoes.length) {
        const posicao = posicoes[numeroCliques];
        btnNao.style.top = posicao.top;
        numeroCliques++;
    } else {
        // Resetar para a posição original
        btnNao.style.top = '0';
        numeroCliques = 0;
    }
})