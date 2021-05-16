console.log('ok!');

const tombol = document.querySelector('button');


tombol.addEventListener('click', function() {
    const p = document.querySelector('p');
    p.classList.toggle(".toogle");
});
