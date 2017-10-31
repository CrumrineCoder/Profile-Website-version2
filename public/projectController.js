var projects = [ 
{
	logo: "https://www.dropbox.com/s/ilzr341uddw8d85/votingAppLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/ma91oyg2p5zu1t8/votingApp3.png?raw=1", 
	title: "Polling Website", 
	shortDesc: "This is my first attempt at a fullstack website. The website lets users create a poll with several options, view polls with optional search functionality, and of course vote on polls. If the user is logged in during poll creation, the user can link the poll to the user's account. The user can edit or delete the poll at any time afterwards.", 
	backend: ["Javascript", "Node.js", "Glitch", "MongoDB", "Express", "Mongoose", "Passport"],
    frontend: [ "HTML", "CSS", "Responsive"], 	
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-voting-app'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/VotingApp", 
	websiteLink: "https://joinordie.glitch.me/"
}, 
{
	logo: "https://www.dropbox.com/s/ukbsb6po0hhh09i/weatherApp%20logo.png?raw=1", 
	picture: "https://www.dropbox.com/s/g47zdpfvkld5hhz/weatherApp.png?raw=1", 
	title: "Weather App", 
	shortDesc: "This is a web app that uses the Geolocation API to find the user's location and then tells the user of the weather with the Forecast.io API.", 
	backend: ["Javascript", "Geolocation", "Forecast.io", "jQuery"], 
	frontend: ["HTML", "CSS", "Font Awesome", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/show-the-local-weather'> here </a>", 
	codeLink: "https://codepen.io/CrumrineCoder/pen/WZWKLg", 
	websiteLink: "https://codepen.io/CrumrineCoder/full/WZWKLg/"
}, 
{
	logo: "https://www.dropbox.com/s/larkckwosuw81tw/pomodoroAppLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/g47zdpfvkld5hhz/weatherApp.png?raw=1", 
	title: "Pomodoro Clock", 
	shortDesc: "This is a web app that acts as a minimalist Pomodoro clock with options. The app also uses jquery progress to display to the user the progress of the current Pomodoro the user is on.", 
	backend: ["Javascript", "jQuery"], 
	frontend: ["HTML", "CSS", "Font Awesome", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-pomodoro-clock'> here </a>", 
	codeLink: "https://codepen.io/CrumrineCoder/pen/ooNqaM", 
	websiteLink: "https://codepen.io/CrumrineCoder/full/ooNqaM/"
}
, 
{
	logo: "https://www.dropbox.com/s/jhsgasksxrhlc3h/wikipediaViewerLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/b7q5dujvpnek2s4/wikipediaViewer.png?raw=1", 
	title: "Wikipedia Viewer", 
	shortDesc: "This is a web app that uses the Wikipedia API to allow search functionality or searching a random page.", 
	backend: ["Javascript", "jQuery", "Wikipedia API"], 
	frontend: ["HTML", "CSS",  "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer'> here </a>", 
	codeLink: "https://codepen.io/CrumrineCoder/pen/xPbVzw", 
	websiteLink: "https://codepen.io/CrumrineCoder/full/xPbVzw"
}
, 
{
	logo: "https://www.dropbox.com/s/o4otu48qrkji2ao/calculatorAppLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/b7q5dujvpnek2s4/wikipediaViewer.png?raw=1", 
	title: "Calculator", 
	shortDesc: "This is a web app that resembles a basic calculator.", 
	backend: ["Javascript"], 
	frontend: ["HTML", "CSS", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-javascript-calculator'> here </a>", 
	codeLink: "https://codepen.io/CrumrineCoder/pen/OOVrBP", 
	websiteLink: "https://codepen.io/CrumrineCoder/full/OOVrBP"
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
	changeProject(0); 
}
