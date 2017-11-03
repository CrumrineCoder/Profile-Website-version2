var projects = [ 
{
	logo: "https://www.dropbox.com/s/ilzr341uddw8d85/votingAppLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/ma91oyg2p5zu1t8/votingApp3.png?raw=1", 
	title: "Polling Website", 
	shortDesc: "This is my first attempt at a fullstack website. The website lets users create, view, and vote on polls. If the user logs in, the user can link a poll in its creation to the user's account. The user can edit or delete the poll at any time afterwards if it's linked.", 
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
	picture: "https://www.dropbox.com/s/zkhaoemdjx2eatb/pomodoroApp.png?raw=1", 
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
	logo: "https://www.dropbox.com/s/jhsgasksxrhlc3h/wikipediaViewerLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/b7q5dujvpnek2s4/wikipediaViewer.png?raw=1", 
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
	logo: "https://www.dropbox.com/s/o4otu48qrkji2ao/calculatorAppLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/zbcigzoxcxg7bgu/calculatorApp.png?raw=1", 
	title: "Calculator", 
	shortDesc: "This is a web app that resembles a basic calculator. I am still develop this app and ironing out bugs that I find.", 
	backend: ["Javascript"], 
	frontend: ["HTML", "CSS", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-javascript-calculator'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/Calculator", 
	websiteLink: " https://crumrinecoder.github.io/Calculator/"
}
, 
{
	logo: "https://www.dropbox.com/s/o4otu48qrkji2ao/calculatorAppLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/zbcigzoxcxg7bgu/calculatorApp.png?raw=1", 
	title: "Calculator", 
	shortDesc: "This is a web app that resembles a basic calculator. I am still develop this app and ironing out bugs that I find.", 
	backend: ["Javascript"], 
	frontend: ["HTML", "CSS", "Responsive"], 
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found <a href='https://www.freecodecamp.org/challenges/build-a-javascript-calculator'> here </a>", 
	codeLink: "https://github.com/CrumrineCoder/Calculator", 
	websiteLink:  "https://crumrinecoder.github.io/Calculator/"
}
, 
{
	logo: "https://www.dropbox.com/s/o4otu48qrkji2ao/calculatorAppLogo.png?raw=1", 
	picture: "https://www.dropbox.com/s/zbcigzoxcxg7bgu/calculatorApp.png?raw=1", 
	title: "Calculator", 
	shortDesc: "This is a web app that resembles a basic calculator. I am still develop this app and ironing out bugs that I find.", 
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
