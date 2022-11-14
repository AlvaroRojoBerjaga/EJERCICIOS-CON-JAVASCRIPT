
// Ejercicio 1

function ejerciciouno() {
    var nombre = document.getElementById("txtNombreAlumno").value;
    var nota = document.getElementById("txtNotaAlumno").value;
    var resultado = document.getElementById("txtResultadoNota");
    if (nombre == "" || nota == "") {
        alert("Debe rellenar el formulario completo");
    } else if(nota <0 || nota>10){
        alert("La nota no es válida");
    }else {

        if (nota < 5) {
            resultado.innerHTML = nombre + " ha suspendido con un " + nota;
        } else {
            resultado.innerHTML = nombre + " ha aprobado con un " + nota;
        }

    }
}


//Ejercicio 2

function ejerciciodos() {

    var n1 = document.getElementById("txtNumero1").value;
    var n2 = document.getElementById("txtNumero2").value;
    var n3 = document.getElementById("txtNumero3").value;
    var n4 = document.getElementById("txtNumero4").value;
    var n5 = document.getElementById("txtNumero5").value;
    var n6 = document.getElementById("txtNumero6").value;
    var n7 = document.getElementById("txtNumero7").value;
    var n8 = document.getElementById("txtNumero8").value;
    var n9 = document.getElementById("txtNumero9").value;
    var n10 = document.getElementById("txtNumero10").value;
    var conPos = 0;
    var conNeg = 0;
    var resultado = document.getElementById("txtResultadoContador");


    if (n1 == "" || n2 == "" || n3 == "" || n4 == "" || n5 == "" || n6 == "" || n7 == "" || n8 == "" || n9 == "" || n10 == "") {
        alert("Debe rellenar todos los campos");
    } else {
        var lista = [n1, n2, n3, n4, n5, n6, n7, n8, n9, n10];
        for (var i = 0; i < lista.length; i++) {
            if (lista[i] < 0) {
                conNeg++;
            } else {
                conPos++;
            }
        }
        resultado.innerHTML = "Positivos: " + conPos + " Negativos: " + conNeg;
    }
}

//Ejercicio tres

function ejerciciotres() {
    var l1 = document.getElementById("txtLado1").value;
    var l2 = document.getElementById("txtLado2").value;
    var base = document.getElementById("txtBase").value;
    var resultado = document.getElementById("txtResultadoTriangulo");

    if (l1 == "" || l2 == "" || base == "") {
        alert("Debe completar todos los campos");
    } else if (l1 <= 0 || l2 <= 0 || base <= 0) {
        alert("No puedes poner números negativos o igual a 0");
    } else {

        if (l1 == l2 && l1 == base && l2 == base) {
            resultado.innerHTML = "Triangulo equilatero";
        } else if ((l1 == l2 && l1 != base && l2 != base) || (l1 == base && l1 != l2 && l2 != base) || (l2 == base && l1 != l2 && l1 != base) ) {
            resultado.innerHTML = "Triangulo isosceles";
        } else {
            resultado.innerHTML = "Triangulo escaleno";
        }

    }
}

//Ejercicio bucle

function ejerciciobucle() {

    var ejecutar = "<pre>";

    for (var i = 1; i < 8; i++) {

        for (var j = 20 - i; j > 0; j--) {
            ejecutar+=" ";
        }

        ejecutar+="*";

        for (var k = i; k <= i * 2 - 2; k++) {
            ejecutar += "*";
        }

        for (var t = k - 1; t >= i; t--) {
            ejecutar += "*";
        }
        ejecutar += "\n";
    }
    ejecutar+="</pre>"
    document.getElementById("triangulo").innerHTML = ejecutar;
}

//Ejercicio 4

 function ejerciciofechauno() {

     var formato = document.getElementById("txtFecha1").value;
     var resultado = document.getElementById("txtResultadoFechaPrimera");
     var separado = formato.split("-");
     var dia, mes, anio;
     if (separado.length == 3) {

         if (separado[0].length > 2) {
             anio = separado[0];
             mes = separado[1];
             dia = separado[2];
         } else {
             anio = separado[2];
             mes = separado[1];
             dia = separado[0];
         }

         var f = new Date(anio, mes - 1, dia);
         var f0 = new Date(anio, mes - 1, dia - 1);
         var f2 = new Date(anio, mes - 1, ++dia);
         fecha = f.toLocaleDateString();
         fecha0 = f0.toLocaleDateString();
         fecha2 = f2.toLocaleDateString();
         resultado.innerHTML = "Día anterior: " + fecha0 + ". Día elegido: " + fecha + ". Día siguiente: " + fecha2 + ".";

     } else {
         alert("Datos erroneos");
     }

}

function ejerciciofechados() {
    var dia = document.getElementById("txtDia").value;
    var mes = document.getElementById("txtMes").value;
    var anio = document.getElementById("txtAnio").value;
    var resultado = document.getElementById("txtResultadoFechaSegunda");
    if (dia == "" || mes == "" || anio == "") {
        alert("Debe rellenar todos los campos");
    } else if (dia <= 0 || mes <= 0 || anio <= 0) {
        alert("No puedes poner números negativos");
    }
    else{
        var f = new Date(anio, mes-1, dia);
        var f0 = new Date(anio, mes-1, dia-1);
        var f2 = new Date(anio, mes-1, ++dia);
        fecha = f.toLocaleDateString();
        fecha0 = f0.toLocaleDateString();
        fecha2 = f2.toLocaleDateString();
        resultado.innerHTML = "Día anterior: " + fecha0 + ". Día elegido: " + fecha + ". Día siguiente: " + fecha2 +".";
    }
}


//Ejercicio 5

class Animal {
    nombre;
    cantidad;
    constructor(nombre, cantidad) {
        this.nombre = nombre;
        this.cantidad = cantidad;
    }
}

var perro = new Animal("perro", 15);
var gato = new Animal("gato", 5);
var cobaya = new Animal("cobaya", 10);
var animales = [perro, gato, cobaya];

function ejerciciocinco() {

   

     noexistencia = true;

    var anm = document.getElementById("txtAnimal").value;
    var a = anm.toLowerCase();
    var c = 0;
    var resultado = document.getElementById("txtResultadoCantidad");


    if (a == "") {
        alert("No puedes dejar el campo vacío");
    } else {

        for (var i = 0; i < animales.length; i++) {
            if (a == animales[i].nombre) {
                noexistencia = false;
                c = animales[i].cantidad;
                break;
            }

        }

        if (!noexistencia) {
            resultado.innerHTML = "Felicidades, disponemos de un/a " + a + " con una cantidad de " + c;
        } else {
            resultado.innerHTML= "Lo sentimos, no disponemos de " + a;
        }
    }
}

//Ejercicio 6

class Empleado {
    nombre;
    antiguedad;
    valor;
    horas;
    constructor(nombre, antiguedad, valor, horas) {
        this.nombre = nombre;
        this.antiguedad = antiguedad;
        this.valor = valor;
        this.horas = horas;
    }
}

var empleado1 = new Empleado("Alberto", 2, 9, 8);
var empleados = [empleado1];

function agregar() {
    var contenido = "";
    contenido += "<h3>Agregar un empleado</h3>";
    contenido += "<table>";

    contenido += "<tr>";
    contenido += "<td width='40%'>Ingrese nombre: </td>";
    contenido+= "<td width='60%'> <input class='form-control' type='text' id='txtNombreEmpleado'/></td >"
    contenido += "</tr>";

    contenido += "<tr>";
    contenido += "<td width='40%'>Antiguedad en años:</td>";
    contenido+= "<td width='60%'> <input class='form-control' type='number' id='txtAntiguedad'/></td >"
    contenido += "</tr>";
    
    contenido += "<tr>";
    contenido += "<td width='40%'>Ingrese su valor/hora:</td>";
    contenido += "<td width='60%'> <input class='form-control' type='number' id='txtValor'/></td >"
    contenido += "</tr>";
     
    contenido += "<tr>";
    contenido += "<td width='40%'>Horas trabajadas al día: </td>";
    contenido += "<td width='60%'> <input class='form-control' type='number' id='txtHoras'/></td >"
    contenido += "</tr>";

    contenido += "</table>";

    contenido += "<br/>";
    contenido += "<button onclick ='agregarEmpleado()' class='btn btn-info'>Añadir </button>";
    contenido += "<label id='txtAgregarEmpleado'> Ingrese los datos...</label>";
    contenido += "<br/>";
    contenido += "<br/>";

    document.getElementById("espacio").innerHTML = contenido;

}

function agregarEmpleado() {

    var nombre = document.getElementById("txtNombreEmpleado").value;
    var antiguedad = document.getElementById("txtAntiguedad").value;
    var valor = document.getElementById("txtValor").value;
    var horas = document.getElementById("txtHoras").value;

    if (nombre == "" || antiguedad == "" || valor == "" || horas == "") {
        alert("Debe rellenar todos los campos");
    } else {
        var e = new Empleado(nombre, antiguedad, valor, horas);
        empleados.push(e);
        document.getElementById("txtAgregarEmpleado").innerHTML = "Agregado correctamente";
    }
}

function verEmpleados() {
    contenido = "";
    contenido += "<h3>Lista de empleados</h3>";
    contenido += "<br/>";
    contenido += "<table class='table'>";
    contenido += "<thead>";
    contenido += "<tr>";
    contenido += "<td>Nombre</td>";
    contenido += "<td>Antiguedad</td>";
    contenido += "<td>Valor</td>";
    contenido += "<td>Horas</td>";
    contenido += "</tr>";
    contenido += "</thead>";
    contenido += "<tbody";

    for (var i = 0; i < empleados.length; i++) {
        contenido += "<tr>";
        contenido += "<td>" + empleados[i].nombre + "</td>";
        contenido += "<td>" + empleados[i].antiguedad + "</td>";
        contenido += "<td>" + empleados[i].valor + "</td>";
        contenido += "<td>" + empleados[i].horas + "</td>";
        contenido += "</tr>";
    }
    contenido += "</tbody>";
    contenido += "</table>";

    document.getElementById("espacio").innerHTML = contenido;
}

function cobro() {
    contenido = "";
    contenido += "<h3>Realizar cobro de un empleado</h3>";
    contenido += "<table>";
    contenido += "<tr>";
    contenido += "<td width='40%'>Ingrese nombre: </td>";
    contenido += "<td width='60%'> <input class='form-control' type='text' id='txtNombreEmpleadoBuscar'/></td >"
    contenido += "</tr>";contenido += "<tr>";
    contenido += "<td width='40%'>Ingrese mes: </td>";
    contenido += "<td width='60%'> <input class='form-control' type='number' id='txtMesCobro'/></td >"
    contenido += "</tr>";
    contenido += "</table>";
    contenido += "<br/>";
    contenido += "<button onclick ='cobroEmpleado()' class='btn btn-info'>Realizar cobro</button>";
    contenido += "<label id='txtCobroEmpleado'> Ingrese los datos...</label>";
    contenido += "<br/>";
    contenido += "<div id='resultado'></div>"

    document.getElementById("espacio").innerHTML = contenido;
}

function cobroEmpleado() {
    var nom = document.getElementById("txtNombreEmpleadoBuscar").value;
    var mes = document.getElementById("txtMesCobro").value;
    var dias;

    

    var existe = false;

    if (nom == "" || mes =="") {
        alert("Debe rellenar todos los campos");
    } else if (mes < 1 || mes > 12) {
        alert("Mes no válido");
    }
    else {
        for (var i = 0; i < empleados.length; i++) {
            if (nom == empleados[i].nombre) {
                e = empleados[i];
                existe = true;
                break;
            }
        }
        if (!existe) {
            alert("No existe ese empleado");
        } else {

            switch (mes * 1) {
                case 1:
                case 3:
                case 5:
                case 7:
                case 8:
                case 10:
                case 12:
                    dias = 31;
                    break;
                case 2:
                    dias = 28;
                    break;
                default:
                    dias = 30;
                    break;
            }

            var cobroLimpio = e.valor * (e.horas * dias) + e.antiguedad * 30;
            var descuento = cobroLimpio * 13 / 100;
            var cobroFinal = cobroLimpio - descuento;

            document.getElementById("txtCobroEmpleado").innerHTML = "El cobro de " + e.nombre + " en el mes " + mes + " supone:";

            var final = "";
            final += "<br/>"
            final += "<p>Un cobro limpio de: " + cobroLimpio + "€</p>";
            final += "<p>Un descuento de: " + descuento + "€</p>";
            final += "<p>Un cobro final de: " + cobroFinal + "€</p>";

            document.getElementById("resultado").innerHTML = final;

        }

    }
}