var projects = [ 
{
	logo: "https://images.findagrave.com/photos/2015/20/481_1421880348.jpg", 
	picture: "https://images-na.ssl-images-amazon.com/images/M/MV5BNTYzMjc2Mjg4MF5BMl5BanBnXkFtZTcwODc1OTQwNw@@._V1_UX214_CR0,0,214,317_AL_.jpg", 
	title: "Polling Website", 
	shortDesc: "A fullstack website for creating and answering polls. There is user authentication and login and several options when making a poll such as optional Captcha, the ability to see a poll before voting, voting with multiple answers, writing one's own answer, or rescinding a vote. The user can also link a poll to her account if they're logged in, which allows them to edit the poll afterwards or delete it. There is also a search funtionality.",
	tools: [], 
	skills: [], 
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found here: https://www.freecodecamp.org/challenges/build-a-voting-app", 
	codeLink: "https://github.com/CrumrineCoder/VotingApp", 
	websiteLink: "https://joinordie.glitch.me/"
}


]

var projectPic = document.getElementById("projectPic"); 
var projectTitle = document.getElementById("projectTitle"); 
var projectShortDescription = document.getElementById("projectShortDescription"); 
var projectTools = document.getElementById("projectTools"); 
var projectSkills = document.getElementById("projectSkills"); 
var projectProductPaper = document.getElementById("projectProductPaper"); 
var projectCode = document.getElementById("projectCode"); 
var projectVisit = document.getElementById("projectVisit"); 

var buttons = document.getElementById("projectSelectBoxes"); 
window.onload=function(){
	function changeProject(projectID){
		projectTools.innerHTML  = ""; 
		
		projectSkills.innerHTML = ""; 
		
		projectPic.innerHTML = "<img src = '" + projects[projectID].picture + "' ></img> ";
		
		projectTitle.innerHTML = "<p> " + projects[projectID].title + "</p>"; 
		
		projectShortDescription.innerHTML = "<p> " + projects[projectID].shortDesc + "</p>";  
		
		projectTools.innerHTML += "<ul>";
		for(var i=0; i<projects[projectID].tools.length; i++){
			projectTools.innerHTML += "<li>" + projects[projectID].tools[i] + "</li>"; 
		}
		projectTools.innerHTML += "</ul>";
		
		projectSkills.innerHTML += "<ul>";
		for(var i=0; i<projects[projectID].skills.length; i++){
			projectSkills.innerHTML += "<li>" + projects[projectID].skills[i] + "</li>"; 
		}
		projectSkills.innerHTML += "</ul>";
		
		projectProductPaper.innerHTML = projects[projectID].productPaper; 
		
		projectCode.innerHTML = "<a href='" + projects[projectID].codeLink + "' class='button'>See Code</a>"
		
		projectVisit.innerHTML = "<a href='" + projects[projectID].websiteLink + "' class='button'>Visit Website</a>"
		
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
}