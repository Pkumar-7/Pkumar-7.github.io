

document.querySelector(".rest").style.display = "none";

function showAll() {
    document.querySelector(".rest").style.display = "block";
    document.querySelector(".loader").style.display = "none";
}
setTimeout(showAll, 2000);
