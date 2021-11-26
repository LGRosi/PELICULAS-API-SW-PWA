window.addEventListener('offline', (event) => {
    console.log('Estoy offline!');
    document.querySelector('#idSw').classList.add('offline');
});

window.addEventListener('online', (event) => {
console.log('Estoy online! Puedo navegar!');
document.querySelector('#idSw').classList.add('online');
});

if (!navigator.onLine) {
console.log('Estoy sin conexión!');
}