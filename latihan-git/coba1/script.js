console.log('ok!');

const tombolBold = document.querySelector('.b');
const tombolReguler = document.querySelector('.r');


tombolBold.addEventListener('click', function() {
    const p = document.querySelector('p');
    p.className = "bold";
});

tombolReguler.addEventListener('click', function() {
    const p = document.querySelector('p');
    p.className = "reguler";
});
