
document.getElementById('menubtn').addEventListener('click', function (event) {
    var menu= document.querySelector('#side-menu');
    menu.style.display = 'block';
 });

document.getElementById('closebtn').addEventListener('click' ,function(){
    var menuclose=document.querySelector('#side-menu');
    menuclose.style.display="none";
})