const reproductor = {
    reproducir: function(id){
        console.log(`Reproduciendo cancion con el id ${id}`)
    },
    pausar: function(){
        console.log(`pausando...`)
    },
    borrar: function(id){
        console.log(`Borrando cancion... ${id}`)
    },
    playlist: function(nombre){
        console.log(`Agregando playlist de ${nombre}`)
    },
    reproducirPlaylist: function(nombre){
        console.log(`Reproduciendo playlist ${nombre}`)
    },
}

reproductor.reproducir(30);
reproductor.reproducir(20);
reproductor.pausar(30);
reproductor.borrar(30);
reproductor.crearPlaylist(`Heavy Metal`);
reproductor.crearPlaylist(`Rock 90s`);
reproductor.reproducirPlaylist(`Heavy Metal`);