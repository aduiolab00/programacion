function encontrar mayor() {
    a = parseInt(prompt("introduce el primer numero"))
    b = parseInt(prompt("introduce el segundo numero"))
    if (a > b) {
        return a;
    } else {
        return b;
    }
}
console.log("el numero mayor es: " + numeroMayor);
let numeroMayor = encontrarMayor();
document.getElementById("resultado").innerHTML = numeroMayor;