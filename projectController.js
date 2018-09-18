function on() {
    document.getElementById("aboutMeOverlay").style.display = "block";
}

function off() {
    document.getElementById("aboutMeOverlay").style.display = "none";
}

function toggleInfo() {
    if (document.getElementById("toggleButton").value == "Show Less") {
        document.getElementById("toggleButton").value = "Show More";
    document.getElementById("projectAdditionalInformation").style.display = "none";

    } else if (document.getElementById("toggleButton").value == "Show More") {
        document.getElementById("toggleButton").value = "Show Less";
        document.getElementById("projectAdditionalInformation").style.display = "block";
    }
}



function shadeColor(color, percent) {   
    var f=parseInt(color.slice(1),16),t=percent<0?0:255,p=percent<0?percent*-1:percent,R=f>>16,G=f>>8&0x00FF,B=f&0x0000FF;
    return "#"+(0x1000000+(Math.round((t-R)*p)+R)*0x10000+(Math.round((t-G)*p)+G)*0x100+(Math.round((t-B)*p)+B)).toString(16).slice(1);
}

/*
function creditsOn() {
    document.getElementById("logoCreditsOverlay").style.display = "block";
}

function creditsOff() {
    document.getElementById("logoCreditsOverlay").style.display = "none";
}*/
var app = angular.module('portfolio', []);
app.filter("trustUrl", ['$sce', function ($sce) {
    return function (recordingUrl) {
        return $sce.trustAsResourceUrl(recordingUrl);
    };
}]);
app.controller('portfolioControllers', function ($scope) {
    // Slow scroll functionality.
    $scope.scrollTo = function (eID) {
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
        logo: " Images/tmbgLogo.png ",
        color: "#171E26",
        title: "TMBG",
        shortDesc: "This is a landing page redesign for the They Might Be Giants website.",
        backend: "JavaScript, jQuery, Node.js, Express.js, MongoDB, Mongoose, OpenStreetMap API, LyricsAPI",
        frontend: "HTML, CSS, Responsive, Angular, Sass",
        productPaper: "I built this website as a Capstone project for everything I've learnt in the past year. The website allows users to anonymously comment on the newest album and to find the nearest tour. The website is also a practice in business marketing and design. Links and most buttons are placeholders.",
        codeLink: "https://github.com/CrumrineCoder/TheyMightBeGiantsv3",
        websiteLink: "https://tmbg.herokuapp.com/",
        video: "Videos\\tmbgEdited.mp4"
    },{
        logo: " Images/cookiesWebsiteLogo.png ",
        color: "#18788C",
        picture: " Images/cookiesWebsite.png ",
        title: "Penny's Cookies",
        shortDesc: "This is a portfolio website for a local NYC cookie bakery and decorating business that I built for a client.",
        backend: "JavaScript, PHP, jQuery",
        frontend: "HTML, CSS, Responsive, Swiper, Intense Images, Mail Chimp",
        productPaper: "I taught myself about developing a marketing strategy, writing a competitive analysis, scheduling, and writing user stories with a client. I also learned about working with another designer. I taught myself PHP to develop the email forms. I also taught myself a few other minor libraries and services.",
        codeLink: "https://github.com/CrumrineCoder/PJRevised",
        websiteLink: "http://pennyjanescookies.com/",
        video: "Videos\\pjcEdited.mp4"
    }, {
        logo: " Images/twitchViewerLogo.png ",
        color: "#6441A4",
        picture: " Images/twitchViewer.png ",
        title: "Twitch Viewer",
        shortDesc: "This is a website that uses the Twitch.tv API and Angular to display Twitch Streams.",
        backend: "JavaScript, jQuery, Twitch.tv API",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I taught myself one-page Angular design with this project as well as using multiple APIs with Angular.",
        codeLink: "https://github.com/CrumrineCoder/Twitch-Viewer-Redone",
        websiteLink: "https://crumrinecoder.github.io/Twitch-Viewer-Redone/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather",
        video: "Videos\\twitchEdited.mp4"
    }, {
        logo: " Images/connectFourAppLogo.png ",
        color: "#FF7F11",
        picture: " Images/connectFourApp.png ",
        title: "Connect Four",
        shortDesc: "This is a web app that uses plain JavaScript to play Connect Four either against an AI that uses alpha-beta minimaxing or locally with another player.",
        backend: "JavaScript",
        frontend: "HTML, CSS",
        productPaper: "This was practice with independent research, JavaScript algorithm scripting, UI design for games, and artificial intelligence.",
        codeLink: "https://github.com/CrumrineCoder/connect4-version2",
        websiteLink: "https://crumrinecoder.github.io/connect4-version2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-tic-tac-toe-game",
        video: "Videos\\c4Edited.mp4"
    }, {
        logo: " Images/votingAppLogo.png ",
        color: "#A61C88",
        picture: " Images/votingApp.png ",
        title: "Polling",
        shortDesc: "This fullstack website lets users create, view, and vote on polls.",
        backend: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport, Chart.js",
        frontend: "HTML, CSS, Responsive",
        productPaper: "I taught myself Express.js, Node.js, NPM, MongoDB, and other minor libraries to make my first fullstack website.",
        codeLink: "https://github.com/CrumrineCoder/VotingApp",
        websiteLink: "https://joinordie.glitch.me/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-voting-app",
        video: "Videos\\voteEdited.mp4"
    }, {
        logo: " Images/weatherApp%20logo.png ",
        color: "#048027",
        picture: " Images/weatherApp.png ",
        title: "Weather",
        shortDesc: "This is a web app that shows the weather based on location.",
        backend: "JavaScript, jQuery, OpenStreetMap API, Forecast.io API,",
        frontend: "HTML, CSS, Responsive, Angular, Sass",
        productPaper: "I taught myself multiple APIs, Angular, Sass and Mobile-first design with this project.",
        codeLink: "https://github.com/CrumrineCoder/Weather-App",
        websiteLink: "https://crumrinecoder.github.io/Weather-App/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/show-the-local-weather",
        video: "Videos\\weatherEdited.mp4"
    }, {
        logo: " Images/quotesAppLogo.png ",
        color: "#008080",
        picture: " Images/quotesApp.png ",
        title: "Quotes",
        shortDesc: "This is a website that uses Angular to display quotes from various sources.",
        backend: "JavaScript, jQuery",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I practiced Functional Programming and one page design in Angular and refined the design and User Experience.",
        codeLink: "https://github.com/CrumrineCoder/Quote-Generator-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Quote-Generator-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-random-quote-machine",
        video: "Videos\\quoteEdited.mp4"
    }, {
        logo: " Images/npcLookUpLogo.png ",
        color: "#EF281A",
        picture: " Images/npcLookUpv2.png ",
        title: "NPC Lookup",
        shortDesc: "This fullstack website lets users add Non Playable Characters (NPCs) to a database and view them with Angular.",
        backend: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I refined and expanded on Node.JS and Express.js and experimented with AngularJS alongside a database.",
        codeLink: "https://github.com/CrumrineCoder/NPC-LOOK-UP",
        websiteLink: "https://npclookup.glitch.me/",
        video: "Videos\\npcEdited.mp4"
    }, {
        logo: " Images/wikipediaViewerLogo.png ",
        color: "#007CB6",
        picture: " Images/wikipediaViewer.png ",
        title: "Wiki Viewer",
        shortDesc: "This is a web app that uses the Wikipedia API to search for multiple Wikipedia pages by term or by randomness.",
        backend: "JavaScript, jQuery, Wikipedia API",
        frontend: "HTML, CSS, React.js, Responsive",
        productPaper: "I taught myself about using APIs with React and more about state management with this project.",
        codeLink: "https://github.com/CrumrineCoder/wikipediaviewerreact",
        websiteLink: "http://dark-yarn.surge.sh/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-wikipedia-viewer",
        video: "Videos\\wiki.mp4"
    }, {
        logo: " Images/calculatorAppLogo.png ",
        color: "#865DAF",
        picture: " Images/calculatorApp.png ",
        title: "Calculator",
        shortDesc: "This is a web app that resembles a basic calculator.",
        backend: "JavaScript",
        frontend: "HTML, CSS, Responsive",
        productPaper: "I practiced JavaScript algorithm scripting with this project.",
        codeLink: "https://github.com/CrumrineCoder/Calculator",
        websiteLink: " https://crumrinecoder.github.io/Calculator/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-javascript-calculator",
        video: "Videos\\calcEdited.mp4"
    }, {
        logo: " Images/pomodoroAppLogo.png",
        color: "#E90000",
        picture: " Images/pomodoroApp.png ",
        title: "Pomodoro",
        shortDesc: "This is a web app that acts as a minimalist Pomodoro (time management) clock with options.",
        backend: "JavaScript, jQuery",
        frontend: "HTML, CSS, Responsive",
        productPaper: "I practiced Async JavaScript design and minimalistic front end design.",
        codeLink: "https://github.com/CrumrineCoder/Pomodoro-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Pomodoro-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-pomodoro-clock",
        video: "Videos\\pomodoroEdited.mp4"
    }, {
        logo: " Images/simonSaysLogo.png ",
        color: "#2D2D2D",
        picture: " Images/simonSays.png ",
        title: "Simon Says",
        shortDesc: "This is a web app that uses JavaScript to play Simon Says.",
        backend: "JavaScript, jQuery",
        frontend: "HTML, CSS",
        productPaper: "This was both more practice with JavaScript algorithm scripting, asynch JavaScript design, and more advanced CSS styling.",
        codeLink: "https://github.com/CrumrineCoder/Simon-Says-Version-2",
        websiteLink: "https://crumrinecoder.github.io/Simon-Says-Version-2/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-simon-game",
        video: "Videos\\simonEdited.mp4"
    }]/*, {
        logo: " Images/tabletopAppLogo.png ",
        color: "#E96969",
        picture: " Images/tabletopApp.png ",
        title: "Tabletop United",
        shortDesc: "This is a fullstack webiste that allows user to search for Tabletop shops in an area.",
        backend: "JavaScript, Node.js, Express.js, MongoDB, Mongoose, Passport, Yelp API, Geolocation API",
        frontend: "HTML, CSS, Responsive, Angular",
        productPaper: "I taught myself Angular with this project and learned how to incorporate an API with a database.",
        codeLink: "https://github.com/CrumrineCoder/TabletopUnited",
        websiteLink: "https://tabletop.glitch.me/",
        freeCodeCampLink: "https://www.freecodecamp.org/challenges/build-a-nightlife-coordination-app",
        video: "C:\\Users\\NicLaptop\\Videos\\fin\\twitchEdited.mp4"
    }]*/
    $scope.projectInfo = {};

 

    $scope.changeProject = function (projectID) {
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
        $scope.projectInfo.video = $scope.projects[projectID].video;
        $scope.projectInfo.darkerColor = shadeColor($scope.projects[projectID].color, -.55);
        //$scope.projectInfo.freeCodeCampLink = $scope.projects[projectID].freeCodeCampLink;
        document.getElementById("contactInfo").style.background = $scope.projects[projectID].color;
        document.getElementById("toggleButton").style.background =  $scope.projects[projectID].color;
        document.getElementById("emailButton").style.background =  $scope.projectInfo.darkerColor;
        document.getElementById("code-link").style.background =  $scope.projects[projectID].color;
        document.getElementById("website-link").style.background = $scope.projects[projectID].color;
        document.getElementById("nav").style.borderColor = $scope.projects[projectID].color;
        $scope.selectedProject = projectID;
    }
    $scope.carouselProject = function (increment) {
        if ($scope.selectedProject == 0 && increment == -1) {
            $scope.changeProject($scope.projects.length - 1);
        } else if ($scope.selectedProject == $scope.projects.length - 1 && increment == 1) {
            $scope.changeProject(0);
        } else {
            $scope.changeProject($scope.selectedProject + increment);
        }
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
    $scope.change = function (x) {
        document.getElementById("index").style.display = "block";
        document.getElementById("splash").style.display = "none";
        //	document.getElementById("nav").style.position = "fixed";
        $scope.changeProject(x);
    }
});