window.addEventListener('scroll', function() {
    var elemento = document.querySelector('');
    var posicaoElemento = elemento.getBoundingClientRect().top;
    var posicaoJanela = window.innerHeight;
    console.log(posicaoJanela)
    if (posicaoElemento < posicaoJanela) {
      elemento.classList.toggle('active')
    } else {
        elemento.classList.toggle('active')
    }
    });