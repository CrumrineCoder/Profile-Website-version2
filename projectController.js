var animalImages = [
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "https://cdn.colorlib.com/dazzling/wp-content/uploads/sites/6/2013/03/image-alignment-150x150.jpg",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "https://cdn.colorlib.com/dazzling/wp-content/uploads/sites/6/2013/03/image-alignment-150x150.jpg"
];

var dImages = [
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "https://cdn.colorlib.com/dazzling/wp-content/uploads/sites/6/2013/03/image-alignment-150x150.jpg",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "http://via.placeholder.com/150x150",
  "https://cdn.colorlib.com/dazzling/wp-content/uploads/sites/6/2013/03/image-alignment-150x150.jpg"
];

var animalRowContainer = document.getElementById("category0Small");
var animalLargeImage = document.getElementById("category0Large");

var dRowContainer = document.getElementById("category1Small");
var dLargeImage = document.getElementById("category1Large");
// Add Images from the Array to the Container and add an onclick to them
var selectedAnimal = 0;
var selectedD = 0;

generateImages(animalRowContainer, animalImages, animalLargeImage, "Animal");
generateImages(dRowContainer, dImages, dLargeImage, "D");

changeCookie(0, animalImages, animalLargeImage, "Animal");
changeCookie(0, dImages, dLargeImage, "D");
// Take the selected Cookie's number, take it from the array and add it to the large image area.
function changeCookie(cookie, category, image, select) {
  if (select == "Animal") {
    selectedAnimal = cookie;
  } else if (select == "D") {
    selectedD = cookie;
  }
  image.innerHTML = "";
  var img = document.createElement("img");
  img.src = category[cookie];
  image.append(img);
}

function incrementCookie(x, category, image, inc, select) {
  if (inc == 0 && x == -1) {
    changeCookie(category.length - 1, category, image, select);
  } else if (inc == category.length - 1 && x == 1) {
    changeCookie(0, category, image, select);
  } else {
    changeCookie(inc + x, category, image, select);
  }
}

function generateImages(container, category, image, select) {
  for (var i = 0, j = category.length; i < j; i++) {
    var btn = document.createElement("BUTTON");
    btn.type = "image";
    var img = document.createElement("img");
    img.src = category[i];
    btn.append(img);
    btn.id = i;
    btn.onclick = (function(id) {
      return function() {
        changeCookie(id, category, image, select);
      };
    })(i);
    container.append(btn);
  }
}
