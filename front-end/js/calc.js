function add(){
  
    var oper1= document.getElementById("oper1").value
    var oper2= document.getElementById("oper2").value
    var result= parseInt(oper1)+parseInt(oper2)
    console.log(result);

    document.getElementById("result").innerText="Result is "+result
}
function sub(){
    var oper1= document.getElementById("oper1").value
    var oper2= document.getElementById("oper2").value
    var result= oper1-oper2
    console.log(result);

    document.getElementById("result").innerText="Result is "+result
}
function mul(){
    var oper1= document.getElementById("oper1").value
    var oper2= document.getElementById("oper2").value
    var result= oper1*oper2
    console.log(result);

    document.getElementById("result").innerText="Result is "+result
}
function divide(){
    var oper1= document.getElementById("oper1").value
    var oper2= document.getElementById("oper2").value
    var result= oper1/oper2
    console.log(result);

    document.getElementById("result").innerText="Result is "+result
}