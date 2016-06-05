var
worldTaunt = document.getElementById("worldTaunt"),
name;
worldTaunt.addEventListener("click", "sayHello");
function sayHello(){
  name = prompt("What is your name");
  alert("Hey, " + name);
}
