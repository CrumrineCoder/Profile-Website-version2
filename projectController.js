var projects = [ 
{
	logo: " Images/votingAppLogo.png ", 
	picture: " Images/votingApp3.png ", 
	title: "Polling Website", 
	shortDesc: "This is my first attempt at a fullstack website. The website lets users create, view, and vote on polls. If the user logs in, the user can link a poll in its creation to the user's account. The user can edit or delete the poll at any time afterwards if it's linked.", 
	backend: ["Javascript", "Node.js", "Glitch", "MongoDB", "Express", "Mongoose", "Passport"],
    frontend: [ "HTML", "CSS", "Responsive"], 	
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-voting-app'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/VotingApp", 
	websiteLink: "https://joinordie.glitch.me/"
}, {
	logo: " Images/tabletopAppLogo.png ", 
	picture: " Images/tabletopApp.png ",  
	title: "Tabletop Coordination", 
	shortDesc: "This is a fullstack webiste that allows user to search for Tabletop shops in an area. The website not only shows information about the shops but also how many users from the site are planning to go there. Users who are logged in can RSVP. ", 
	backend: ["Javascript", "Node.js", "Glitch", "MongoDB", "Express", "Mongoose", "Passport", "Angular"], 
	frontend: ["HTML", "CSS", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app'> here </a>. I changed it from finding bars to finding Tabletop shops.", 
	codeLink: "https://github.com/CrumrineCoder/TabletopCoordinationApp", 
	websiteLink: "https://tabletop.glitch.me/"
}, 
{
	logo: " Images/weatherApp%20logo.png ", 
	picture: " Images/weatherApp.png ", 
	title: "Weather App", 
	shortDesc: "This is a web app that uses the Geolocation API to find the user's location and then tells the user of the weather with the Forecast.io API.", 
	backend: ["Javascript", "Geolocation", "Forecast.io", "jQuery"], 
	frontend: ["HTML", "CSS", "Font Awesome", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/show-the-local-weather'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/Weather-App", 
	websiteLink: "https://crumrinecoder.github.io/Weather-App/"
}, 
{
	logo: " Images/pomodoroAppLogo.png", 
	picture: " Images/pomodoroApp.png ", 
	title: "Pomodoro Clock", 
	shortDesc: "This is a web app that acts as a minimalist Pomodoro clock with options. The app also uses jQueryProgress to display to the user the progress of the current Pomodoro the user is on.", 
	backend: ["Javascript", "jQuery"], 
	frontend: ["HTML", "CSS", "Font Awesome", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-pomodoro-clock'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/Pomodoro-Version-2", 
	websiteLink: "https://crumrinecoder.github.io/Pomodoro-Version-2/"
}
, 
{
	logo: " Images/wikipediaViewerLogo.png ", 
	picture: " Images/wikipediaViewer.png ", 
	title: "Wikipedia Viewer", 
	shortDesc: "This is a web app that uses the Wikipedia API to allow search functionality for Wikipedia or for searching random pages.", 
	backend: ["Javascript", "jQuery", "Wikipedia API"], 
	frontend: ["HTML", "CSS",  "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/Wikipedia-Viewer-Version2", 
	websiteLink: "https://crumrinecoder.github.io/Wikipedia-Viewer-Version2/"
}
, 
{
	logo: " Images/calculatorAppLogo.png ", 
	picture: " Images/calculatorApp.png ", 
	title: "Calculator", 
	shortDesc: "This is a web app that resembles a basic calculator. I am still developing this app and ironing out bugs that I find.", 
	backend: ["Javascript"], 
	frontend: ["HTML", "CSS", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-javascript-calculator'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/Calculator", 
	websiteLink: " https://crumrinecoder.github.io/Calculator/"
}
]

var projectPic = document.getElementById("projectPic"); 
var projectTitle = document.getElementById("projectTitle"); 
var projectShortDescription = document.getElementById("projectDescription"); 
var projectBackEnd = document.getElementById("projectBackEnd"); 
var projectFrontEnd = document.getElementById("projectFrontEnd"); 
var projectProductPaper = document.getElementById("projectProductPaper"); 
var projectLinks = document.getElementById("projectLinks"); 
var selectedProject; 
var buttons = document.getElementById("projectSelectBoxes"); 

	function changeProject(projectID){
		if(selectedProject != null){
			document.getElementById(selectedProject).style.opacity = "1";
			document.getElementById(selectedProject).disabled = false;
		} 
		document.getElementById(projectID).style.opacity = ".3"
		document.getElementById(projectID).disabled = true;
		projectBackEnd.innerHTML  = ""; 
		
		projectFrontEnd.innerHTML = ""; 
		
			projectLinks.innerHTML = ""; 
		
	//	document.getElementById("projectInfoContainer").style.background = "url(" + projects[projectID].picture + ")"; 
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
		
		projectLinks.innerHTML += "<li> <a href='" + projects[projectID].codeLink + "' target='_blank'><i class='fa fa-code' rgb=(0,0,0) >  See Code</i></a> </li>";
		projectLinks.innerHTML += "<li> <a href='" +projects[projectID].websiteLink + "' target='_blank'> <i class='fa fa-external-link' > Visit Website</i> </a> </li>";
		
			selectedProject = projectID; 
	}
	
	// Select one at random for the onload
	//changeProject(0); 


function change(x){
	document.getElementById("index").style.display = "block"; 
	document.getElementById("splash").style.display = "none"; 
	
	
	for(var i=0; i<projects.length; i++){
		   if(i % 7 == 0){
			   buttons.append(document.createElement("br"));
		   }
			var btn = document.createElement("BUTTON");
			btn.type = "image"; 
			btn.innerHTML = '<img src="' + projects[i].logo + '" class="projectSelectImage" />'
			btn.className = "projectSelectButton"; 
			btn.id = i; 
			btn.onclick = function(id){ 
				return function(){
					changeProject(id);  
				}; 
			}(i);
			buttons.append(btn);   
		}
		changeProject(x); 

}
