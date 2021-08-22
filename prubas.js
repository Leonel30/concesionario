const  autos = require('./autos')

const concesionaria = {
    autos: autos,
    buscarAuto: function(solicitud){
       for(let i =0 ; i < autos.length; i++){
            if( autos[i].patente === solicitud){
                return autos[i];
            }else{
                return null;
            }
        }
    },
    venderAuto:function(){}
};
