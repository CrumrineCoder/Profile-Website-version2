function on() {
    document.getElementById("aboutMeOverlay").style.display = "block";
}

function off() {
    document.getElementById("aboutMeOverlay").style.display = "none";
}
/*
function creditsOn() {
    document.getElementById("logoCreditsOverlay").style.display = "block";
}

function creditsOff() {
    document.getElementById("logoCreditsOverlay").style.display = "none";
}*/
var app = angular.module('portfolio', []);
app.controller('portfolioControllers', function($scope) {
	// Slow scroll functionality.
    $scope.scrollTo = function(eID) {
        // This scrolling function 
        // is from http://www.itnewb.com/tutorial/Creating-the-Smooth-Scroll-Effect-with-JavaScript
        var startY = currentYPosition();
        var stopY = elmYPosition(eID);
        var distance = stopY > startY ? stopY - startY : startY - stopY;
        if (distance < 100) {
            scrollTo(0, stopY);
            return;
        }
        var speed = Math.round(distance / 40);
        if (speed >= 20) speed = 20;
        var step = Math.round(distance / 25);
        var leapY = stopY > startY ? startY + step : startY - step;
        var timer = 0;
        if (stopY > startY) {
            for (var i = startY; i < stopY; i += step) {
                setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
                leapY += step;
                if (leapY > stopY) leapY = stopY;
                timer++;
            }
            return;
        }
        for (var i = startY; i > stopY; i -= step) {
            setTimeout("window.scrollTo(0, " + leapY + ")", timer * speed);
            leapY -= step;
            if (leapY < stopY) leapY = stopY;
            timer++;
        }

        function currentYPosition() {
            // Firefox, Chrome, Opera, Safari
            if (self.pageYOffset) return self.pageYOffset;
            // Internet Explorer 6 - standards mode
            if (document.documentElement && document.documentElement.scrollTop) return document.documentElement.scrollTop;
            // Internet Explorer 6, 7 and 8
            if (document.body.scrollTop) return document.body.scrollTop;
            return 0;
        }

        function elmYPosition(eID) {
            var elm = document.getElementById(eID);
            var y = elm.offsetTop;
            var node = elm;
            while (node.offsetParent && node.offsetParent != document.body) {
                node = node.offsetParent;
                y += node.offsetTop;
            }
            return y;
        }
    };
    $scope.projects = [{
        logo: " Images/npcLookUpLogo.png ",
        color: "#EF281A",
        picture: " Images/npcLookUp.png ",
        title: "NPC Lookup",
        shortDesc: "This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",
        backend: "Javascript, Node.js, Express, MongoDB, Mongoose, Passport",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I refined and expanded on Node.JS and Express and experimented with Angular alongside a database.",
        codeLink: "https://github.com/CrumrineCoder/NPC-LOOK-UP",
        websiteLink: "https://npclookup.glitch.me/"
    }, {
        logo: " Images/votingAppLogo.png ",
        color: "#A61C88",
        picture: " Images/votingApp.png ",
        title: "Polling",
        shortDesc: "This fullstack website lets users create, view, and vote on polls.",
        backend: "Javascript, Node.js, Express, MongoDB, Mongoose, Passport, Chart.js",
        frontend: "HTML, CSS, Responsive",
        productPaper: "I taught myself Express, Node.js, NPM, MongoDB, and other minor libraries to make my first fullstack website.",
        codeLink: "https://github.com/CrumrineCoder/VotingApp",
        websiteLink: "https://joinordie.glitch.me/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-voting-app"
    }, {
        logo: " Images/twitchViewerLogo.png ",
        color: "#6441A4",
        picture: " Images/twitchViewer.png ",
        title: "Twitch Viewer",
        shortDesc: "This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",
        backend: "Javascript, jQuery, Twitch.tv API",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",
        codeLink: "https://github.com/CrumrineCoder/Twitch-Viewer-Redone",
        websiteLink: "https://crumrinecoder.github.io/Twitch-Viewer-Redone/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather"
    }, {
        logo: " Images/quotesAppLogo.png ",
        color: "#008080",
        picture: " Images/quotesApp.png ",
        title: "Quotes",
        shortDesc: "This is a website that uses Angular to display quotes from various sources.",
        backend: "Javascript, jQuery",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",
        codeLink: "https://github.com/CrumrineCoder/Quote-Generator-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Quote-Generator-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-random-quote-machine"
    }, {
        logo: " Images/weatherApp%20logo.png ",
        color: "#048027",
        picture: " Images/weatherApp.png ",
        title: "Weather",
        shortDesc: "This is a web app that shows the weather based on location.",
        backend: "Javascript, jQuery, Google Geolocation API, Forecast.io API,",
       frontend: "HTML, CSS, Responsive, Angular, Sass",
        productPaper: "I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",
        codeLink: "https://github.com/CrumrineCoder/Weather-App",
        websiteLink: "https://crumrinecoder.github.io/Weather-App/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather"
    }, {
        logo: " Images/tabletopAppLogo.png ",
        color: "#E96969",
        picture: " Images/tabletopApp.png ",
        title: "Tabletop United",
        shortDesc: "This is a fullstack webiste that allows user to search for Tabletop shops in an area.",
        backend: "Javascript, Node.js, Express.js, MongoDB, Mongoose, Passport, Yelp API, Geolocation API",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I taught myself Angular with this project and learned how to incorporate an API with a database.",
        codeLink: "https://github.com/CrumrineCoder/TabletopUnited",
        websiteLink: "https://tabletop.glitch.me/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app"
    }, {
        logo: " Images/pomodoroAppLogo.png",
        color: "#E90000",
        picture: " Images/pomodoroApp.png ",
        title: "Pomodoro",
        shortDesc: "This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",
        backend: "Javascript, jQuery",
        frontend: "HTML, CSS, Responsive",
        productPaper: "I practiced Asynch Javascript design and minimalistic front end design.",
        codeLink: "https://github.com/CrumrineCoder/Pomodoro-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Pomodoro-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-pomodoro-clock"
    }, {
        logo: " Images/wikipediaViewerLogo.png ",
        color: "#007CB6",
        picture: " Images/wikipediaViewer.png ",
        title: "Wiki Viewer",
        shortDesc: "This is a web app that uses the Wikipedia API to searching for multiple Wikipedia pages by term or by randomness.",
        backend: "Javascript, jQuery, Wikipedia API",
        frontend: "HTML, CSS, Responsive",
        productPaper: "I taught myself APIs and Ajax with this project.",
        codeLink: "https://github.com/CrumrineCoder/Wikipedia-Viewer-Version2",
        websiteLink: "https://crumrinecoder.github.io/Wikipedia-Viewer-Version2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer"
    }, {
        logo: " Images/calculatorAppLogo.png ",
        color: "#865DAF",
        picture: " Images/calculatorApp.png ",
        title: "Calculator",
        shortDesc: "This is a web app that resembles a basic calculator.",
        backend: "Javascript",
        frontend: "HTML, CSS, Responsive",
        productPaper: "I practiced Javascript algorithm scripting with this project.",
        codeLink: "https://github.com/CrumrineCoder/Calculator",
        websiteLink: " https://crumrinecoder.github.io/Calculator/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-javascript-calculator"
    }/*, {
        logo: " Images/connectFourAppLogo.png ",
        color: "#D8AD00",
        picture: " Images/connectFourApp.png ",
        title: "Connect Four",
        shortDesc: "This is a web app that uses plain Javascript to play Connect Four locally between two players.",
        backend: "Javascript",
        frontend: "HTML, CSS",
        productPaper: "This was more practice with Javascript algorithm scripting.",
        codeLink: "https://github.com/CrumrineCoder/Connect-Four",
        websiteLink: " https://crumrinecoder.github.io/Connect-Four/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game"
    }*/, {
        logo: " Images/simonSaysLogo.png ",
        color: "#2D2D2D",
        picture: " Images/simonSays.png ",
        title: "Simon Says",
        shortDesc: "This is a web app that uses Javascript to play Simon Says.",
        backend: "Javascript, jQuery",
        frontend: "HTML, CSS",
        productPaper: "This was both more practice with Javascript algorithm scripting, asynch Javascript design, and more advanced CSS styling.",
        codeLink: "https://github.com/CrumrineCoder/Simon-Says-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Simon-Says-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-simon-game"
    }]
    $scope.projectInfo = {};
    $scope.changeProject = function(projectID) {
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
        //$scope.projectInfo.freeCodeCampLink = $scope.projects[projectID].freeCodeCampLink;
        document.getElementById("contactInfo").style.background = $scope.projects[projectID].color;
		document.getElementById("nav").style.borderColor = $scope.projects[projectID].color;
        $scope.selectedProject = projectID;
    }
    $scope.buttons = [];
    for (var i = 0; i < $scope.projects.length; i++) {
        $scope.buttons.push({
            logo: $scope.projects[i].logo,
            id: i,
            color: $scope.projects[i].color,
			title: $scope.projects[i].title
        });
    }
    $scope.change = function(x) {
        document.getElementById("index").style.display = "block";
        document.getElementById("splash").style.display = "none";
        //	document.getElementById("nav").style.position = "fixed";
        $scope.changeProject(x);
    }
});