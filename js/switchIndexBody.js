function switchLangIndexBody (){
    var zh = window.localStorage.getItem("zh");
    if(zh === "true") {
        //Nav bar translations
        document.getElementById('indexP').innerHTML 
        = "欢迎来到我自己上网的地方！<br> <br>下载我的 <strong><a href='content/MyResume-v0.1.pdf' class='links' download>简历</a></strong> 这里! <br> <br>"
        + "有关此站点的一般信息，请查看 <a href='html/about' class='links'><strong>资讯</strong></a>。 <br>"
        + "关于我的工作的完整报告可以在 <a href='html/projects' class='links'><strong>计划</strong></a>。 <br>"
        + "如果你对我最近做的事感兴趣，请结账 <a href='html/blog' class='links'><strong>博客</strong></a>。 <br><br>"
        + "在这个网页的底部有链接，将带你到我的社会媒体. <br>"
        + "谢谢你的光临！";
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
    }
}
