// RETO 2
//Ejercicio1
document
    .getElementById("r2_e1_btn1")
    .addEventListener("click", (sumarNumeros) => {
        sumarNumeros.preventDefault();
        const a = document.getElementById("r2_e1_input1").value;
        const b = document.getElementById("r2_e1_input2").value;
        const c = document.getElementById("r2_e1_input3").value;

        if (a == null || b == null || isNaN(c)) {
            alert("Ejercicio 1. Valores inválidos");
            return;
        }
        console.log(a, b, c);
        document.getElementById("r2_e1_input1").value = ``;
        document.getElementById("r2_e1_input2").value = ``;
        document.getElementById(
            "r2_e1_resultado"
        ).innerText = `Hola mi nombre es ${a} ${b} y mi edad ${c}`;
    });
//Ejercicio2
let e2_acumulador = 0;
document.getElementById("r2_e2_btn1").addEventListener("click", (sumaCubos) => {
    sumaCubos.preventDefault();
    const a = +document.getElementById("r2_e2_input1").value;
    console.log(a, e2_acumulador);
    if (a === 0 || a === null) {
        document.getElementById("r2_e2_resultado").value = ` `;
        alert("Ejercicio 2. Valores reiniciados");
        document.getElementById("r2_e2_resultado").value = ` `;
        e2_acumulador = 0;
        return;
    }
    e2_acumulador += a ** 3;
    document.getElementById("r2_e2_input1").value = ``;
    document.getElementById("r2_e2_resultado").value = `${e2_acumulador}`;
});

//ejercicio3
const enteroRandom = () => {
    const random = Math.floor(Math.random() * 1000);
    return random;
}
const flonateRandom = () => {
    const random = Math.random();
    return random;
}

const cadenaRandom = () => {
    const caracteres = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    let random = "";
    for (let i = 0; i < 6; i++) {
        const indiceAleatorio = Math.floor(Math.random() * caracteres.length);
        random += caracteres[indiceAleatorio];
    }
    return random;
};
document.getElementById("r2_e3_btn1").addEventListener("click", (varTipo) => {
    varTipo.preventDefault();
    const azar = enteroRandom();
    var random=null;
    switch (azar % 3) {
        case 1:
            random = enteroRandom();
            break;
        case 2:
            random = flonateRandom();
            break;

        default:
            random = cadenaRandom();
            break;
    }
    document.getElementById("r2_e3_span1").innerText=`${random}`;
    console.log(typeof random);
    document.getElementById("r2_e3_resultado").innerText=`${(typeof random)}`;
    random=null;
});

//Ejercicio 04
const sumaParametros = (...rest) => {
    const sum = (accumulator, currentValue) => accumulator + currentValue;
    return rest.reduce(sum, 0);
};
document.getElementById("r2_e4_btn1").addEventListener("click",(paramRest)=>{
    paramRest.preventDefault();
    let numeros = [];
    for (let index = 0; index < 10; index++) {
        numeros.push(enteroRandom());
    }
    document.getElementById("r2_e4_span1").innerText=`${numeros}`;
    document.getElementById("r2_e4_resultado").innerHTML=`${sumaParametros(...numeros)}`;
})

//Ejercicio 05
const sinCadenas = (arreglo=[])=>{
    let sinCadenas=[];
    // console.log(arreglo);
    arreglo.forEach(element => {
        if(!isNaN(element)){
            // console.log(isNaN(element));
            sinCadenas.push(element);
        }
    });
    return sinCadenas; 
}
document.getElementById("r2_e5_btn1").addEventListener("click",(filtarCadenas)=>{
    filtarCadenas.preventDefault();
    //generar arreglo aleatorio
    let arreglo =[]
    for (let index = 0; index < 12; index++) {
        if(enteroRandom()% 2 === 0){
            arreglo.push(enteroRandom());
        }else{
            arreglo.push(cadenaRandom());
        }
    }
    let arr = sinCadenas(arreglo);
    console.log(arr);
    document.getElementById("r2_e5_span1").innerText=`${arreglo}`;
    document.getElementById("r2_e5_resultado").innerText=`${sinCadenas(arreglo)}`;
})

