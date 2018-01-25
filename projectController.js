var app = angular.module('portfolio', []);
app.controller('portfolioControllers', function($scope) {
    $scope.projects = [{
        logo: " Images/npcLookUpLogo.png ",
        picture: " Images/npcLookUp.png ",
        title: "NPC Lookup",
        shortDesc: "This is a full stack website that lets users create Non Playable Characters (NPCs) and add them to the database. Other users can view them and comment on them. Users can edit NPCs they've made and they only need to fill out the name. Users can also search for NPCs.",
        backend: "Javascript, Node.js, Glitch, MongoDB, Express, Mongoose, Passport, Angular",
        frontend: "HTML, CSS, Responsive",
        productPaper: "This was a personal project for an idea I had after looking at AdventureLookup and Undead.live. I refined the skills I learned making the Voting website by routing the individual pages better, incorporating Angular to display the data, experimenting with a comment section, and other minor fixes. Once I find the time the comment sction will allow for replying, editing and deleting one's comment, and allowing a user to change their password.",
        codeLink: "https://github.com/CrumrineCoder/NPC-LOOK-UP",
        websiteLink: "https://npclookup.glitch.me/"
    }, {
        logo: " Images/votingAppLogo.png ",
        picture: " Images/votingApp3.png ",
        title: "Polling Website",
        shortDesc: "This is my first attempt at a fullstack website. The website lets users create, view, and vote on polls. If the user logs in, the user can link a poll in its creation to the user's account. The user can edit or delete the poll at any time afterwards if it's linked.",
        backend: "Javascript, Node.js, Glitch, MongoDB, Express, Mongoose, Passport",
        frontend: "HTML, CSS, Responsive",
        productPaper: "This was built as part of FreeCodeCamp's backend cirriculum. This is my first fullstack website and I taught myself Express, Node.js, NPM, MongoDB, and other minor libraries to build this. Once I find the time, I'll improve on this with the skills I learned making the NPC website.",
        codeLink: "https://github.com/CrumrineCoder/VotingApp",
        websiteLink: "https://joinordie.glitch.me/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-voting-app"
    }, {
        logo: " Images/tabletopAppLogo.png ",
        picture: " Images/tabletopApp.png ",
        title: "Tabletop Coordination",
        shortDesc: "This is a fullstack webiste that allows user to search for Tabletop shops in an area. The website not only shows information about the shops but also how many users from the site are planning to go there. Users who are logged in can RSVP. ",
        backend: "Javascript, Node.js, Glitch, MongoDB, Express, Mongoose, Passport, Angular, Yelp API",
        frontend: "HTML, CSS, Responsive",
        productPaper: "This was built as part of FreeCodeCamp's backend cirriculum. I changed it from finding bars to finding Tabletop shops. I had to teach myself Angular for this project and learned how to incorporate an API with a database.",
        codeLink: "https://github.com/CrumrineCoder/TabletopCoordinationApp",
        websiteLink: "https://tabletop.glitch.me/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app"
    }, {
        logo: " Images/twitchViewerLogo.png ",
        picture: " Images/twitchViewer.png ",
        title: "Twitch Viewer",
        shortDesc: "This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",
        backend: "Javascript, jQuery, Angular, Twitch.tv API",
        frontend: "HTML, CSS, Font Awesome, Responsive",
        productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum. I revisited this project and am incredibly proud how much I've grown since I made this. I decided to display the data with Angular this time and this was the first time I've used a one page design with Angular, which meant I had to be sending data back and forth. This was the main struggle with this project but the rest which would've taken me weeks to do now took me only two days.",
        codeLink: "https://github.com/CrumrineCoder/Twitch-Viewer-Redone",
        websiteLink: "https://crumrinecoder.github.io/Twitch-Viewer-Redone/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather"
    }, {
        logo: " Images/weatherApp%20logo.png ",
        picture: " Images/weatherApp.png ",
        title: "Weather App",
        shortDesc: "This is a web app that uses the Geolocation API to find the user's location and then tells the user of the weather with the Forecast.io API.",
        backend: "Javascript, jQuery, Google Geolocation API, Forecast.io API,",
        frontend: "HTML, CSS, Font Awesome, Responsive",
        productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum. This was the first project I was really proud to make. The revision process actually didn't change that much other than making the search bar work, improving the time zone marker, and cleaning up the backend functions and the page layout.",
        codeLink: "https://github.com/CrumrineCoder/Weather-App",
        websiteLink: "https://crumrinecoder.github.io/Weather-App/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather"
    }, {
        logo: " Images/pomodoroAppLogo.png",
        picture: " Images/pomodoroApp.png ",
        title: "Pomodoro Clock",
        shortDesc: "This is a web app that acts as a minimalist Pomodoro clock with options. The app also uses jQueryProgress to display to the user the progress of the current Pomodoro the user is on.",
        backend: "Javascript, jQuery",
        frontend: "HTML, CSS, Font Awesome, Responsive",
        productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum. I learned about intervals for this one and about minimalistic design: initially I had a large amount of buttons, but I was able to streamline them into a UI design I like. I want to learn about sessions and be able to store a user's preferences.",
        codeLink: "https://github.com/CrumrineCoder/Pomodoro-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Pomodoro-Version-2/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-pomodoro-clock"
    }, {
        logo: " Images/wikipediaViewerLogo.png ",
        picture: " Images/wikipediaViewer.png ",
        title: "Wikipedia Viewer",
        shortDesc: "This is a web app that uses the Wikipedia API to allow search functionality for Wikipedia or for searching random pages.",
        backend: "Javascript, jQuery, Wikipedia API",
        frontend: "HTML, CSS, Responsive",
        productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum. I like the colors I picked out for this design as well as its layout. The Wikipedia API doesn't give that much information so once I teach myself React I'm going to redo this project to get proper data in a layout similar to the revised Twtich.tv viewer. I'd like to do this same website but for the TvTropes website instead of Wikipedia, but their API doesn't work.",
        codeLink: "https://github.com/CrumrineCoder/Wikipedia-Viewer-Version2",
        websiteLink: "https://crumrinecoder.github.io/Wikipedia-Viewer-Version2/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer"
    }, {
        logo: " Images/calculatorAppLogo.png ",
        picture: " Images/calculatorApp.png ",
        title: "Calculator",
        shortDesc: "This is a web app that resembles a basic calculator.",
        backend: "Javascript",
        frontend: "HTML, CSS, Responsive",
        productPaper: "This was built as part of FreeCodeCamp's backend cirriculum. This one was pure javascript and algorithm scripting.",
        codeLink: "https://github.com/CrumrineCoder/Calculator",
        websiteLink: " https://crumrinecoder.github.io/Calculator/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-javascript-calculator"
    }, {
        logo: " Images/connectFourAppLogo.png ",
        picture: " Images/connectFourApp.png ",
        title: "Connect Four",
        shortDesc: "This is a web app that uses plain Javascript to play Connect Four locally between two players.",
        backend: "Javascript",
        frontend: "HTML, CSS",
        productPaper: "This was built as part of FreeCodeCamp's frontend cirriculum. I've built about three Tic-Tac-Toe games in my time so I got bored and made a Connect Four instead of the suggested Tic Tac Toe game. I'd like to build a full TI-84 except for the graphing part.",
        codeLink: "https://github.com/CrumrineCoder/Connect-Four",
        websiteLink: " https://crumrinecoder.github.io/Connect-Four/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game"
    }, {
        logo: " Images/simonSaysLogo.png ",
        picture: " Images/simonSays.png ",
        title: "Simon Says",
        shortDesc: "This is a web app that uses Javascript to play Simon Says. jQuery is used to change  classes but other than that it is not used. ",
        backend: "Javascript, jQuery",
        frontend: "HTML, CSS",
        productPaper: "This was built as part of FreeCodeCamp's front cirriculum. The CSS took a while to figure out, but I got there eventually. I'm not happy with the Simon Says being loaded with position: absolute but if I return to this project I'll figure out a way to do it more elegantly.",
        codeLink: "https://github.com/CrumrineCoder/Simon-Says-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Simon-Says-Version-2/",
		freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-simon-game"
    }]

	$scope.projectInfo = {
	};

	$scope.changeProject = function(projectID){
		if ($scope.selectedProject != null) {
			document.getElementById($scope.selectedProject).style.opacity = "1";
			document.getElementById($scope.selectedProject).disabled = false;
		}
		 document.getElementById(projectID).style.opacity = ".3"
		 document.getElementById(projectID).disabled = true;
		 
		$scope.projectInfo = {};
	
		$scope.projectInfo.picture = $scope.projects[projectID].picture;
		
		$scope.projectInfo.title = $scope.projects[projectID].title;
		$scope.projectInfo.frontTechnologies = $scope.projects[projectID].frontend;
		$scope.projectInfo.backTechnologies = $scope.projects[projectID].backend;
		$scope.projectInfo.projectDescription = $scope.projects[projectID].shortDesc;
		$scope.projectInfo.productPaper = $scope.projects[projectID].productPaper;
		$scope.projectInfo.codeLink = $scope.projects[projectID].codeLink;
		$scope.projectInfo.websiteLink = $scope.projects[projectID].websiteLink;
		$scope.projectInfo.freeCodeCampLink = $scope.projects[projectID].freeCodeCampLink;
		
		$scope.selectedProject = projectID;
	}
	$scope.buttons = [];
	for (var i = 0; i < $scope.projects.length; i++) {
			$scope.buttons.push({logo: $scope.projects[i].logo, id: i});
		}
	$scope.change = function(x){
		console.log(x);
		document.getElementById("index").style.display = "block";
		document.getElementById("splash").style.display = "none";
		$scope.changeProject(x);
	}
});
