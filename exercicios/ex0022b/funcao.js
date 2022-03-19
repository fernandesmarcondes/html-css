function mudarCor(){
    var paragrafo = document.getElementById('olamundo');
    paragrafo.style.color='grem';
    paragrafo.innerHTML='Olà mundo';
}

function recuperartexto(){
    var texto = document.getElementById("meutexto").value;
    var paragrafo = document.getElementById("olamundo");
    paragrafo.innerHTML = texto;
}