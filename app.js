const  autos = require('./autos')

const concesionaria = {
    autos: autos,
    buscarAuto: function(solicitud){
        cars = this.autos.length;
        for(let i =0 ; i < cars; i++){
            if( autos[i].patente === solicitud){
                return autos[i].precio;
            }else{
                return null;
            }
        }
        /* return this.autos.find(auto => auto.patente === patente) || null */
        /* let busqueda = this.autos;
        let busquedaAuto = busqueda.filter((auto,solicitud)=>{
            if(auto === solicitud){
                return auto;
            }
        })
        return busquedaAuto; */
    },
    venderAuto:function(patente) {
       return this.buscarAuto(patente).vendido = true;
    },
     autosParaLaVenta(){ 
         let autosFiltrados = this.autos.filter(estado => { return estado.vendido == false;} );
         return autosFiltrados;  
     },
     autosNuevos(){
         return this.autosParaLaVenta().filter( auto => {return auto.km < 100 });
       
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
        listado = this.listaDeVentas();
        let totalVenta = listado.reduce( (a, b)=> { return a + b;},0)
        return totalVenta
        }
     };

    console.log(concesionaria.buscarAuto("APL123"));
    

        
    