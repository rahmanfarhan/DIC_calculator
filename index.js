document.querySelector("button").addEventListener("click", handleClick)

function handleClick(){
  let num_1 = document.getElementById("num_1").value;
  let num_2 = document.getElementById("num_2").value;
  let sum =  parseInt(num_1)+parseInt(num_2);
  alert("Sum of number 1 and number 2 are: " + sum);
}
