/* Your JS here. */

var x = document.getElementById("sam_name");
var project1change = document.getElementById("project1");
var expproj1_ = document.getElementById("expproj1");
var project2change = document.getElementById("project2");
var expproj2_ = document.getElementById("expproj2");

var proj1 = document.getElementsByClassName('project-contain')[0];
var proj2 = document.getElementsByClassName('project-contain')[1];

var body = document.getElementsByClassName('body');

proj1.addEventListener('click', function() {
  expproj1_.style.display = 'block';
  expproj1_.style.height = 500;
  document.getElementById("body").style.height = "2800px";
  if(expproj2_.style.display == 'block'){
    expproj2_.style.display = 'none';
  }
});

proj2.addEventListener('click', function() {
  expproj2_.style.display = 'block';
  expproj2_.style.height = 500;
  document.getElementById("body").style.height = "2800px";
  if(expproj1_.style.display == 'block'){
    expproj1_.style.display = 'none';
  }
});

var link1 = document.getElementById('projectslink');
var link2 = document.getElementById('skillslink');
var link3 = document.getElementById('contactlink');
var sec1 = document.getElementById('projectstitle');
var sec1 = document.getElementById('contactstitle');

var project1_height = 0;
var project2_height = 0;

var projects_height = 420;
var skills_height = 750 + project1_height + project2_height;
var contacts_height = 1500 + project1_height + project2_height;

window.onscroll = function() {
  if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
    document.getElementById("navbar").className = "navbar";
    link1.className = "headlinks";
    link2.className = "headlinks";
    link3.className = "headlinks";
  } else {
    document.getElementById("navbar").className = "bignavbar";
    link1.className = "bigheadlinks";
    link2.className = "bigheadlinks";
    link3.className = "bigheadlinks";
  }
  if (expproj1_.style.display == 'block' || expproj2_.style.display == 'block'){
    project1_height = 485;
    skills_height = 750 + project1_height;
    contacts_height = 1520 + project1_height;
  } else{
    project1_height = 0;
  }
  if (document.body.scrollTop >= contacts_height){
    link3.classList.add('navbarhighlight');
  } else if (document.body.scrollTop >= skills_height){
    link2.classList.add('navbarhighlight');
    link3.classList.remove('navbarhighlight')
  } else if (document.body.scrollTop >= projects_height){
    link1.classList.add('navbarhighlight');
    link2.classList.remove('navbarhighlight');
    link3.classList.remove('navbarhighlight')
  }
}
var slide_int = 0;
var sliding = false;
document.getElementById('right_arrow').onclick = function(){
  if(!sliding){
    sliding = true;
    var current_slide = document.getElementById('slide' + slide_int);
  slide_int += 1;
  if(slide_int > 3){
    slide_int = 0;
  }
  var next_slide = document.getElementById('slide' + slide_int);
  next_slide.classList.add('right');
  next_slide.classList.add('visible');
  next_slide.classList.add('moving');
  current_slide.classList.add('moving');
  setTimeout(function() {
    current_slide.classList.add('left');
    next_slide.classList.remove('right');
  }, 25);
  setTimeout(function() {
    current_slide.classList.remove('visible')
    current_slide.classList.remove('moving');
    next_slide.classList.remove('moving');
    current_slide.classList.remove('left');
    sliding = false;
  }, 550);
  }
}

document.getElementById('left_arrow').onclick = function(){
  if(!sliding){
    sliding = true;
  var current_slide = document.getElementById('slide' + slide_int);
  slide_int -= 1;
  if(slide_int < 0){
    slide_int = 3;
  }
  var next_slide = document.getElementById('slide' + slide_int);
  next_slide.classList.add('left');
  next_slide.classList.add('visible');
  next_slide.classList.add('moving');
  current_slide.classList.add('moving');
  setTimeout(function() {
    current_slide.classList.add('right');
    next_slide.classList.remove('left');
  }, 25);
  setTimeout(function() {
    current_slide.classList.remove('visible')
    current_slide.classList.remove('moving');
    next_slide.classList.remove('moving');
    current_slide.classList.remove('right');
    sliding = false;
  }, 550);
}
}

document.getElementById('image_modal').onclick = function(){
  document.getElementById('modal').classList.add('modalvisible');
}

document.getElementById('modal').onclick = function(){
  document.getElementById('modal').classList.remove('modalvisible');
}
