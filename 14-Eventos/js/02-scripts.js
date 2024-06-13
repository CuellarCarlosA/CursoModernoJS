const nav = document.querySelector('.navegacion');

// registrar un evento 
nav.addEventListener('mouseenter', () =>{
    console.log('entrando a la navegacion');

    nav.style.backgroundColor = 'white';
})
nav.addEventListener('mouseout', () =>{
    console.log('saliendo de la la navegacion');

    nav.style.backgroundColor = 'transparent';
})

/* mousedown = similar al click
click
dbclick = doble click
mouseup = cuando sueltas el mouse*/