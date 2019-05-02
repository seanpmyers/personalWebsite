function switchNavbar() {
  var zh = window.localStorage.getItem("zh");
  if (zh === "true") {
    //Nav bar translations
    document.getElementById('name').innerHTML = "孟尚朴";
    document.getElementById('language').innerHTML = "Eng/英文";
    document.getElementById('blog').innerHTML = "博客";
    document.getElementById('projects').innerHTML = "计划";
    document.getElementById('about').innerHTML = "资讯";
    document.getElementById('home').innerHTML = "主页";
    //Footer Links
    document.getElementById('Facebook').innerHTML = "脸书";
    document.getElementById('Twitter').innerHTML = "推特";
    document.getElementById('Linkedin').innerHTML = "领英";
    document.getElementById('Github').innerHTML = "吉图布";
  }
  else {
    //Nav bar translations
    document.getElementById('name').innerHTML = "Sean Myers";
    document.getElementById('language').innerHTML = "中文/Zh";
    document.getElementById('blog').innerHTML = "Blog";
    document.getElementById('projects').innerHTML = "Projects";
    document.getElementById('about').innerHTML = "About";
    document.getElementById('home').innerHTML = "Home";
    //Footer Links
    document.getElementById('Facebook').innerHTML = "Facebook";
    document.getElementById('Twitter').innerHTML = "Twitter";
    document.getElementById('Linkedin').innerHTML = "Linkedin";
    document.getElementById('Github').innerHTML = "Github";
  }
  return;
}