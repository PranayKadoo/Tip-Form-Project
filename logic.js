
function calculate(){
    let bill = document.getElementById("text1").value;
let count = document.getElementById("text2").value;
let tip = document.getElementById("text3").value;

console.log(bill);
console.log(count);
console.log(tip);
    let tipAm2 = bill;
    let tipAm = (parseInt(bill) + parseInt(tip)) * 0.1;
    let total = parseInt(bill)  + parseInt(tipAm);
    let each = total/count;

    console.log("total"+total);
    console.log("tip"+tipAm);
    console.log("per"+each);

    document.getElementById("res1").textContent ="Tip amount is:" +tipAm;
    document.getElementById("res2").textContent ="Total Bill amount is:" +total;
    document.getElementById("res3").textContent ="Amount per head:" +each;

}