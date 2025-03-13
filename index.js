console.log(1);

const button = document.querySelector('button');
const output = document.querySelector('.output');

button.addEventListener('click', function() {
    output.innerHTML = 'Весь мир - контора, а мы в ней пидорасы';
});