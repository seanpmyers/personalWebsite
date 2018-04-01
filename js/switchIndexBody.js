zh2 = false;
function switchLangIndex (){
    if(!zh2) {
        //Nav bar translations
        document.getElementById('indexP').innerHTML 
        = "欢迎来到我自己上网的地方！<br> <br>下载我的 <strong><a href='content/MyResume-v0.1.pdf' class='links' download>简历</a></strong> 这里! <br> <br>"
        + "有关此站点的一般信息，请查看 <a href='html/about' class='links'><strong>资讯</strong></a>. <br>"
        + "You can find write ups on projects I have worked on under <a href='html/projects' class='links'><strong>计划</strong></a>. <br>"
        + "If you're interested in what I've been up to recently, check out <a href='html/blog' class='links'><strong>博客</strong></a>. <br><br>"
        + "My social media and other links can be found at the bottom of the page. <br>"
        + "Thanks for stopping by!";
        
        zh2 = true;
    }
    else {
        //Nav bar translations
        document.getElementById('indexP').innerHTML 
        = "Welcome to my space on the internet! <br> <br>"
        + "Download my <strong><a href='content/MyResume-v0.1.pdf' class='links' download>resume</a></strong> here! <br> <br>"
        + "For general information concerning this site, check out <a href='html/about' class='links'><strong>About</strong></a>. <br>"
        + "You can find write ups on projects I have worked on under <a href='html/projects' class='links'><strong>Projects</strong></a>. <br>"
        + "If you're interested in what I've been up to recently, check out <a href='html/blog' class='links'><strong>Blogs</strong></a>. <br><br>"
        + "My social media and other links can be found at the bottom of the page. <br>"
        + "Thanks for stopping by!";
        zh2 = false;
    }
}
