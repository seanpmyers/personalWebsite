function switchLang (){
    var zh = window.localStorage.getItem("zh");
    if(!(zh === "true")) {
        window.localStorage.setItem("zh", "true");
    }
    else {
        window.localStorage.setItem("zh", "false");
    }
    return;
}