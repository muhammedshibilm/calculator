  let inp = document.getElementById("inp");
//clear functions
function clearT(){
  inp.value = "";
}



function btnClick(a){
  let inp = document.getElementById("inp");
  inp.value += a;
}


function equalClick(){
  var text = document.getElementById("inp").value
  var result = eval(text)
  document.getElementById("inp").value = result;
}