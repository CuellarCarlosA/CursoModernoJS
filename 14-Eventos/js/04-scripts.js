const formulario = document.querySelector('#formulario');

formulario.addEventListener('submit', validarFormulario);

function validarFormulario() {
    e.preventDefault();

    console.log('buscando...')

    console.log(e.target.action);
}