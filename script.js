


function fun(){
  let urdu = document.querySelector("#urdu").value;
  let english = document.querySelector("#english").value;
  let pst = document.querySelector("#pst").value;
  let chemistry = document.querySelector("#chemistry").value;
  let math = document.querySelector("#math").value;
  let physics = document.querySelector("#physics").value;
  let total = document.querySelector("#total").value;
  let result = document.querySelector(".result");

  let add = (Number(chemistry)+ Number(physics) + Number(math)+ Number(urdu)+ Number(pst)+ Number(english));
  let sum =(add/total) * 100 ;

  result.innerHTML = (sum +"%")






}