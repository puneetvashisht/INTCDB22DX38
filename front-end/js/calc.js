function add(){
    var oper1= document.getElementById("oper1").value
    var oper2= document.getElementById("oper2").value
    var result= parseInt(oper1)+parseInt(oper2)
    console.log(result);

    document.getElementById("result").innerText="Result is "+result
}