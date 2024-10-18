//* RETO 1
document.getElementById("e1_btn1").addEventListener('click', (e) => {
    e.preventDefault();
    let a = parseInt(document.getElementById("e1_input1").value);
    let b = parseInt(document.getElementById("e1_input2").value);
    document.getElementById("e1_resultado").innerText=`${a+b}`;
})