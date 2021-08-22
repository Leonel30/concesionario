const  autos = require('./autos');
const persona = require('./persona');


const concesionaria = {
    autos: autos,
    buscarAuto(patente){
        let busqueda = this.autos.find(auto => auto.patente === patente)
         return (busqueda === undefined)? null : busqueda;
    },
    venderAuto(patente){
       return this.buscarAuto(patente).vendido = true;
    },
    autosParaLaVenta(){ 
        let autosFiltrados = this.autos.filter(auto =>  auto.vendido == false);
        return autosFiltrados;  
    },
    autosNuevos(){
        let autoCero = this.autosParaLaVenta().filter( auto => auto.km < 100 );
       return autoCero;
    },
    listaDeVentas(){
        listaAuto = this.autos;
        sumaDeVentas =[];
        for (let i = 0 ; i < listaAuto.length ; i++){
           if(autos[i].vendido === true){
               sumaDeVentas.push(autos[i].precio);
           }      
       }
       return sumaDeVentas;  
   },
   totalDeVentas(){
    let listado = this.listaDeVentas();
    let totalVenta = listado.reduce( (a, b)=> a + b,0)
    return totalVenta
    },
    puedeComprar(car,persona){
        let costoCuotas = car.precio / car.cuotas ;
        return ( (persona.capacidadDePagoTotal >= car.precio) && persona.capacidadDePagoEnCuotas >= costoCuotas )
    },
    autosQuePuedeComprar(persona){
        let disponibles = this.autosParaLaVenta();
        let puede =disponibles.filter(dispo =>{
            return this.puedeComprar(dispo,persona);
        })
        return puede;
 }
}

console.log(concesionaria.puedeComprar(autos,persona));