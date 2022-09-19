let h1 = document.getElementsByTagName('h1')[0];

h1.addEventListener('click', function(){

    //h1.setAttribute('teste', 5);
    //console.log(h1.getAttribute('teste'));

    h1.dataset.teste = 5
    console.log(h1.dataset.teste);

})
