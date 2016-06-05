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
if(!Notification){
  alert('Sorry, switch to Chromium for notifications... :P');
}
if (Notification.permission =='granted'){
  new Notification('Bananas for sale', {
    icon: 'https://upload.wikimedia.org/wikipedia/commons/4/44/Bananas_white_background_DS.jpg',
    body: 'Bananas! $100 off',
  })
  notification.onclick=function(){
    window.open('http://suburbanninjamc.github.io/-/');
  };
}
