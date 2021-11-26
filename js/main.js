window.addEventListener('offline', (event) => {
    console.log('Estoy offline!');
});

window.addEventListener('online', (event) => {
console.log('Estoy online! Puedo navegar!');
});

if (!navigator.onLine) {
console.log('Estoy sin conexión!');
}