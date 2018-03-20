
zh = false;
function switchLang (){
    if(!zh) {
        //Nav bar translations
        document.getElementById('name').innerHTML = "孟尚朴";
        document.getElementById('language').innerHTML = "Eng/英文";
        document.getElementById('blog').innerHTML = "博客";
        document.getElementById('projects').innerHTML = "计划";
        document.getElementById('about').innerHTML = "资讯";
        document.getElementById('home').innerHTML = "主页";
        zh = true;
    }
    else {
        //Nav bar translations
        document.getElementById('name').innerHTML = "Sean Myers";
        document.getElementById('language').innerHTML = "中文/Zh";
        document.getElementById('blog').innerHTML = "Blog";
        document.getElementById('projects').innerHTML = "Projects";
        document.getElementById('about').innerHTML = "About";
        document.getElementById('home').innerHTML = "Home";
        zh = false;
    }
}
