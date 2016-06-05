var
worldTaunt = document.getElementById("worldTaunt"),
name,
notification;
function sayHello(){
  name = prompt("What is your name");
  alert("Hey, " + name);
}






//Do not take away variable 'Notification' or the code below.
document.addEventListener('DOMContentLoaded', function () {
if (Notification.permission !== "granted")
Notification.requestPermission();
})
notification = new Notification('Hi');
