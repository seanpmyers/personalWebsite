
zh = false;
function switchLang (){
    if(!zh) {
        document.getElementById('text').innerHTML = "孟尚朴";
        document.getElementById('text2').innerHTML = "Eng/英文";
        document.getElementById('text3').innerHTML = "博客";
        document.getElementById('text4').innerHTML = "计划";
        document.getElementById('text5').innerHTML = "资讯";
        document.getElementById('text6').innerHTML = "主页";
        zh = true;
    }
    else {
        document.getElementById('text').innerHTML = "Sean Myers";
        document.getElementById('text2').innerHTML = "中文/Zh";
        document.getElementById('text3').innerHTML = "Blog";
        document.getElementById('text4').innerHTML = "Projects";
        document.getElementById('text5').innerHTML = "About";
        document.getElementById('text6').innerHTML = "Home";
        zh = false;
    }
}
