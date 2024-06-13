window.addEventListener('scroll', () => {
    


    const premium = document.querySelector('.premium');
    const ubicacion = premium.getBoundingClientRect();

    //console.log(ubicacion);

    if (ubicacion.top < 100) {
        console.log('El elemento ya está visible');
    } else{
        console.log('aun no, da mas scroll')
    }
})