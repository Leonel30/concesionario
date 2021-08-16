let lista =  require('./autos') ;



function buscar(solicitud , lista){
    for(let i = 0 ; i < lista.length; i++){
        if(lista[auto].patente === solicitud){
            console.log(lista[auto].patente);
        }
    }
}
console.log(buscar("APL-123"),lista);


