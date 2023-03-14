//las funciones callback son funciones que ejecutan otras funciones 
//las funciones pueden ser predefinidas o anonimas 
/*
function saludar( nombre ){
    alert(" Hola " +nombre);
}
//funcion para ejecutar saludar u otra funcion (callback)
function llamarsaludo(fn){
    fn();
}
//ejecutar funciones 
var nom = prompt("Digite su nombre");
llamarsaludo(function(){
    alert ("hola " +nom);
});
*/

function operacion(n1, n2, signo){
    if(signo== "-"){
        return alert (n1-n2);
    }else if (signo == "/"){
        return alert (n1 /n2);
    }else if (signo == "*"){
        return alert (n1*n2);
    }else{
        return alert(n1+n2)
    }
}
function llamarfunciones(n1,n2,signo,fn){
    fn(n1,n2,signo);
}
//ejecutar el callback 
var num1 = parseInt(prompt("Digite numero 1"));
var num2 = parseInt(prompt("Digite numero 2"));
var sig = prompt("Digite signo");
llamarfunciones(num1, num2, sig, operacion );
/*crear una funcion que calcule iva y tottal a pagar e 3 productos por medio de una
funcion callback ejecutar la funcion 
-ingresar los valores de los productos por el navegador 
mostrar en pantalla el valor de los productos y el total a pagar 
*/
function operacion(iva, precio, totalp){
    var suma = 0;
    for(x=1; x<=3;x++){
        precio=parseInt(prompt("ingrese el precio del producto"));
        suma += precio;
        document.write("los precios son :"+ precio + "<br>")
    }
    var iva =  suma*(0.19)
    var totalp = suma + iva;
    document.write("el iva es "+iva + "<br>")
    document.write("el precio total es "+totalp+ "<br>")
}
function llamarfunciones(precio, iva,totalp,fn){
    fn(precio, iva, totalp);
}
//ejecutar el callback 


