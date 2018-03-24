

var postN = 1;

for(i=0; i<postN; i++) {
   //create the div where the blog post will reside
   var div = document.createElement('div');
   div.setAttribute('class','card');          //set the div to card css class
   div.setAttribute('id','post-'+postN);      //each post is indexed in order of creation and searchable by id
   //create the post main header and id
   var h2 = document.createElement('h2');
   h2.setAttribute('id','h2-'+postN);
   //create the post's date and description header with an id
   var h5 = document.createElement('h5');
   h5.setAttribute('id','h5-'+postN);
   //append the child elements to the div
   div.appendChild(h2);
   div.appendChild(h5);
   //create the section which the div will reside
   var section = document.createElement('section');
   section.setAttribute('class','blog');    //set the css class of the section to blog
   section.appendChild(div);

   document.body.appendChild(section);
}


//all content is written post creation of the html elements

// Blog Post 1: Website
document.getElementById('h2-1').innerHTML = ('Blog Post 1: My Website');
document.getElementById('h5-1').innerHTML = ('Development of my website, March 21, 2018');