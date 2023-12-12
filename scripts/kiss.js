const btnSim = document.getElementById('btnSim')
const btnNao = document.getElementById('btnNao');

let numeroCliques = 0;


btnSim.addEventListener('click', () => {

    
        window.open('https://www.youtube.com/watch?v=_pCZM9ymDSI&ab_channel=GabrielMansano', '_blank');
   
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