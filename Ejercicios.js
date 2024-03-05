console.log("ContraValida")
function contrasenaValida(password) {
    return password === "2Fj(jjbFsuj" || password === "eoZiugBf&g9";
}
// Ejemplos de uso:
console.log(contrasenaValida("2Fj(jjbFsuj")); 
console.log(contrasenaValida("otraContraseña")); 


console.log("CalImpuestos")
function calcularImpuestos(edad, ingresos) {
    if (edad >= 18 && ingresos >= 1000) {
        return ingresos * 0.4;
    } else {
        return 0;
    }
}
// Ejemplos de uso:
console.log(calcularImpuestos(20, 1500));
console.log(calcularImpuestos(17, 1200)); 
console.log(calcularImpuestos(25, 800)); 


console.log("IMC")
function bmi(peso, altura) {
    var imc = peso / Math.pow(altura, 2);
    
    if (imc < 18.5) {
        return "Bajo de peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        return "Normal";
    } else if (imc >= 25 && imc <= 29.9) {
        return "Sobrepeso";
    } else {
        return "Obeso";
    }
}
// Ejemplos de uso:
console.log(bmi(70, 1.75));
console.log(bmi(50, 1.65)); 
console.log(bmi(90, 1.8));
console.log(bmi(100, 1.7)); 


console.log("ImpArray")
function imprimirArreglo(arreglo) {
    arreglo.forEach(function(elemento) {
        console.log(elemento);
    });
}
// Ejemplo de uso:
var miArreglo = [1, 2, 3, 4, 5];
imprimirArreglo(miArreglo);


console.log("NumLikes")
function likes(numero) {
    if (numero < 1000) {
        return numero.toString();
    } else if (numero < 1000000) {
        return (numero / 1000).toFixed(0) + 'K';
    } else {
        return (numero / 1000000).toFixed(0) + 'M';
    }
}
// Ejemplo de uso:
console.log(likes(1400));


console.log("FizzBuzz")
function fizzBuzz(numero) {
    if (numero % 3 === 0 && numero % 5 === 0) {
        return "fizzbuzz";
    } else if (numero % 3 === 0) {
        return "fizz";
    } else if (numero % 5 === 0) {
        return "buzz";
    } else {
        return numero.toString();
    }
}
// Ejemplos de uso:
console.log(fizzBuzz(3)); 
console.log(fizzBuzz(5)); 
console.log(fizzBuzz(15)); 
console.log(fizzBuzz(7)); 


console.log("Rango")
function contarRango(num1, num2) {
    var contador = 0;
    for (var i = num1 + 1; i < num2; i++) {
        contador++;
    }
    return contador;
}
// Ejemplo de uso:
console.log(contarRango(3, 8));
console.log(contarRango(10, 15)); 
console.log(contarRango(-5, 5));


console.log("SumarRango")
function sumarRango(numInicial, numFinal) {
    var suma = 0;
    for (var i = numInicial; i <= numFinal; i++) {
        suma += i;
    }
    return suma;
}
// Ejemplo de uso:
console.log(sumarRango(1, 5));
console.log(sumarRango(3, 8)); 
console.log(sumarRango(-2, 2));


console.log("Aes")
function numeroDeAes(texto) {
    var contador = 0;
    for (var i = 0; i < texto.length; i++) {
        if (texto[i].toLowerCase() === 'a') {
            contador++;
        }
    }
    return contador;
}

// Ejemplo de uso:
console.log(numeroDeAes("Hola Mundo"));
console.log(numeroDeAes("JavaScript"));
console.log(numeroDeAes("Diego"));


console.log("Caracteres")
function numeroDeCaracteres(texto, caracter) {
    var contador = 0;
    for (var i = 0; i < texto.length; i++) {
        if (texto[i] === caracter) {
            contador++;
        }
    }
    return contador;
}
// Ejemplo de uso:
console.log(numeroDeCaracteres("Hola Mundo", "o"));
console.log(numeroDeCaracteres("JavaScript", "a"));
console.log(numeroDeCaracteres("Diego", "x"));





