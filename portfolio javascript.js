var projects = [ 
{
	logo: "https://images.findagrave.com/photos/2015/20/481_1421880348.jpg", 
	picture: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTYzMjc2Mjg4MF5BMl5BanBnXkFtZTcwODc1OTQwNw@@._V1_UX214_CR0,0,214,317_AL_.jpg", 
	title: "Polling Website", 
	shortDesc: "A fullstack website for creating and answering polls.", 
	backend: ["Javascript", "Node.js", "Glitch", "MongoDB", "Express", "Mongoose", "Passport"],
    frontend: [ "HTML", "CSS", "Responsive"], 	
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-voting-app'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/VotingApp", 
	websiteLink: "https://joinordie.glitch.me/"
}, 
{
	logo: "https://i.pinimg.com/736x/43/35/5e/43355e3d0aff6512fab8a5e549158440--pathfinder-rpg-dark-souls-d-d.jpg", 
	picture: "https://i.pinimg.com/736x/2d/bd/d7/2dbdd70a5f5419ad2f7b2d5ca9a510e7--tabletop-rpg-pathfinder-rpg.jpg", 
	title: "Weather App", 
	shortDesc: "A front end app for getting the weather.", 
	backend: ["Javascript", "Geolocation", "Forecast.io", "jQuery"], 
	frontend: ["HTML", "CSS", "Fonts", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/show-the-local-weather'> here </a>", 
	codeLink: "https://codepen.io/CrumrineCoder/pen/jAKOWY", 
	websiteLink: "https://codepen.io/CrumrineCoder/full/jAKOWY/"
}


]

var projectPic = document.getElementById("projectPic"); 
var projectTitle = document.getElementById("projectTitle"); 
var projectShortDescription = document.getElementById("projectDescription"); 
var projectBackEnd = document.getElementById("projectBackEnd"); 
var projectFrontEnd = document.getElementById("projectFrontEnd"); 
var projectProductPaper = document.getElementById("projectProductPaper"); 
var projectLinks = document.getElementById("projectLinks"); 

var buttons = document.getElementById("projectSelectBoxes"); 
window.onload=function(){
	function changeProject(projectID){
		projectBackEnd.innerHTML  = ""; 
		
		projectFrontEnd.innerHTML = ""; 
		
			projectLinks.innerHTML = ""; 
		
		projectPic.innerHTML = "<img src = '" + projects[projectID].picture + "'></img> ";
		
		projectTitle.innerHTML = "<h1> " + projects[projectID].title + "</h1>"; 
		
		projectShortDescription.innerHTML = "<p> " + projects[projectID].shortDesc + "</p>";  
		
		projectFrontEnd.innerHTML += "<ul>";
		for(var i=0; i<projects[projectID].frontend.length; i++){
			projectFrontEnd.innerHTML += "<li class='frontend' >" + projects[projectID].frontend[i] + "</li>"; 
		}
		projectFrontEnd.innerHTML += "</ul>";
		
		projectBackEnd.innerHTML += "<ul>";
		for(var i=0; i<projects[projectID].backend.length; i++){
			projectBackEnd.innerHTML += "<li class='backend' >" + projects[projectID].backend[i] + "</li>"; 
		}
		projectBackEnd.innerHTML += "</ul>";
		
		projectProductPaper.innerHTML = projects[projectID].productPaper; 
		
		projectLinks.innerHTML += "<li> <a href='" + projects[projectID].codeLink + "' ><i class='fa fa-code' rgb=(0,0,0) >  See Code</i></a> </li>";
		projectLinks.innerHTML += "<li> <a href='" +projects[projectID].websiteLink + "' > <i class='fa fa-external-link' > Visit Website</i> </a> </li>";
		
	
	}
	for(var i=0; i<projects.length; i++){
		var btn = document.createElement("BUTTON");
		btn.type = "image"; 
		btn.innerHTML = '<img src="' + projects[i].logo + '" class="projectSelectImage" />'
		btn.className = "projectSelectButton"; 
		btn.onclick = function(id){ 
			return function(){
				changeProject(id);  
			}; 
		}(i);
		buttons.append(btn);   
	}
	// Select one at random for the onload
}