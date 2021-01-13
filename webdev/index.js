var randomNumber1 = Math.floor(Math.random() * 6) + 1; //1-6

var randomDicelmage = "dice" + randomNumber1 + ".png"; //dice images 

var randomlmageSource = "images/" + randomDicelmage;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomlmageSource);

