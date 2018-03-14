
zh = false;
function switchLang (){
    if(!zh) {
        document.getElementById('text').innerHTML = "孟尚朴";
        zh = true;
    }
    else {
        document.getElementById('text').innerHTML = "Sean Myers";
        zh = false;
    }
}
