alert("VAMOS A JUGAR")

contador = 0


let pregunta1 = prompt("¿Cuál es el color del cielo en un día despejado? \n 1 - Rojo \n 2 - Verde \n 3 - Azul \n 4 - Amarillo")

if (pregunta1 == 3)
{
    alert("Correcto")
    contador++ 
}else {
    alert("Incorrecto")
}




let pregunta2 = prompt("¿Cuántas patas tiene un gato? \n 1 - 2 patas \n 2 - 4 patas \n 3 - 6 patas \n 4 - 5 patas")

if (pregunta1 == 2)
{
    alert("Correcto")
    contador++
}else {
    alert("Incorrecto")
}



let pregunta3 = prompt("¿Qué pesa más un kilo de hierro o un kilo de plumas? \n 1 - 1 kilo de hierro \n 2 - 1 kilo de pleumas \n 3 - pesan lo mismo")

if (pregunta1 == 3)
{
    alert("Correcto")
    contador++
}else {
    alert("Incorrecto")
}




let pregunta4 = prompt("¿De qué llenarías un barril para que pese lo menos posible? \n 1 - agujeros \n 2 - cabellos \n 3 - agua \n 4 - plumas")

if (pregunta1 == 1)
{
    alert("Correcto")
    contador++
}else {
    alert("Incorrecto")
}

alert("La cantida de respuestas correctas es "+contador)