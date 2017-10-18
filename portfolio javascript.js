var projects = [ 
{
	logo: "https://images.findagrave.com/photos/2015/20/481_1421880348.jpg", 
	picture: "", 
	title: "Polling Website", 
	shortDesc: "A fullstack website for creating and answering polls. There is user authentication and login and several options when making a poll such as optional Captcha, the ability to see a poll before voting, voting with multiple answers, writing one's own answer, or rescinding a vote. The user can also link a poll to her account if they're logged in, which allows them to edit the poll afterwards or delete it. There is also a search funtionality.",
	tools: [], 
	skills: [], 
	productPaper: "This was built as part of FreeCodeCamp's backend cirriculum, the assignment can be found here: https://www.freecodecamp.org/challenges/build-a-voting-app", 
	codeLink: "https://github.com/CrumrineCoder/VotingApp", 
	websiteLink: "https://joinordie.glitch.me/"
}


]

var buttons = document.getElementById("projectSelectBoxes"); 
window.onload=function(){
	function changeProject(projectID){
		console.log(projectID); 
		
	}
	for(var i=0; i<projects.length; i++){
		var btn = document.createElement("BUTTON");
		btn.type = "image"; 
        console.log(projects[i].logo); 		
		btn.innerHTML = '<img src="' + projects[i].logo + '" />'
//		btn.id = "Button" + i; 
		btn.class = "buttonSelect"; 
		btn.onclick = function(id){ 
			return function(){
				changeProject(id);  
			}; 
		}(i);
		buttons.append(btn);  
	}
}