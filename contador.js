

console.log('Empezamos a cpontador');
var cont=0;
function contador(){
    console.log('Contfuncion contador');
    cont=cont+1 ; 
    console.log("cont:" + cont);
    document.getElementById('boton').innerHTML='pulsaciones :'+ cont;
    document.getElementById('boton').style.display='block';

}