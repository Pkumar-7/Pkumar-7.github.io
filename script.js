

document.querySelector("#content").style.display = "none";
document.getElementById('loader').classList.add('loader');

setTimeout(()=>{

document.getElementById('loader').classList.remove('loader');
document.querySelector("#content").style.display = "block";

}, 4000);
